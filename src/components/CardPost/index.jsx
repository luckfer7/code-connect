import Image from "next/image"
import { Avatar } from "../Avatar"
import Styles from './CardPost.module.css'
import Link from "next/link"

export const CardPost = ({ post }) => {
    //traçamos um objetos post por props para ele receber título, capa, texto, autor etc,  tudo que um post possui.

    //tag figure para conter a imagem da capa.
    return ( //aqui temos que pegar todo esse article, que é um post, fzer dele um link.
        <Link href={`/posts/${post.slug}`} className={Styles.link}>
            <article className={Styles.post}>
                <header className={Styles.header}>
                    <figure>
                        <Image className={Styles.img} src={post.cover} width={438} height={133} alt={`Capa do post de titulo: ${post.title}`}/>
                    </figure>
                </header>

                <section className={Styles.secao}>
                    <h2 className={Styles.titulo}>{post.title}</h2>
                    <p className={Styles.paragrafo}>{post.body}</p>
                </section>
                <footer className={Styles.rodape}>
                    <Avatar 
                        imageSrc={post.author.avatar}
                        name={post.author.username}
                    />
                </footer>
            </article>
        </Link>
    )
}