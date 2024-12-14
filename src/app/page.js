import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Styles from './page.module.css'
import Link from "next/link";

// const post = {
//     "id": 1,
//     "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
//     "title": "Introdução ao React",
//     "slug": "introducao-ao-react",
//     "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
//     "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
//     "author": {
//         "id": 101,
//         "name": "Ana Beatriz",
//         "username": "anabeatriz_dev",
//         "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
//     }
// }

//primeiro a gente cria a função assíncrona que vai guardar a url
async function getAllPosts(page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`);
  if(!response.ok){
    logger.error("Algo deu errado!");
    return []; //para não quebrar a aplicação se tive um erro.
  }
  logger.info("Logger obtido com sucesso");
  return response.json();
}

//segundo, precisamos conectar o componente a esses dados. no next a gente obtain esses dados no lado do servidor, monta a tela,e joga no navegador. Só precisamos declarar a função como assíncrona.

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1; //senão tiver pagina, é a pagina um.
  const {data: posts, prev, next} = await getAllPosts(currentPage) //passando a página 1
  return (
    <main className={Styles.postsContainer}>
      {posts.map(post => <CardPost key={post.id} post={post} />)}
      {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
      {next && <Link className={Styles.navegacao} href={`/?page=${next}`}> Próxima página</Link>}
    </main>
  );
}
