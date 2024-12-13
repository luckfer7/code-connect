import Image from "next/image"
import { Avatar } from "../Avatar"
import Styles from './CardPost.module.css'

export const CardPost = ({ post }) => {
    //traçamos um objetos post por props para ele receber título, capa, texto, autor etc,  tudo que um post possui.

    //tag figure para conter a imagem da capa.
    return (
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
    )
}