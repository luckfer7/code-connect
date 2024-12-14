import logger from "@/logger";
import { Html } from "next/document";
import { remark } from "remark";

async function getPostBySlug(slug) {
    const url = `http://localhost:3042/posts?slug=${slug}`;
    //vai filtrar o post clicado por slug.
    const response = await fetch(url);
    if(!response.ok){
        logger.error("Algo deu errado!");
        return {};
    }
    logger.info("Logger obtido com sucesso");
    const data = await response.json()
    if (data.length === 0) {
        return {};
    }

    const post = data[0];

    const processedContent = await remark()
        .use(Html)
        .process(post.markdown);
    const contentHtml = processedContent.toString();

    post.markdown = contentHtml;

    return post;
}


const PagePost = async ({ params }) => {
    const post = await getPostBySlug(params.slug)
    return (
        <>
            <h1 style={{ color: 'white' }}>{post.title}</h1>
            <div style={{ padding: 16, background: 'white' }} dangerouslySetInnerHTML={{ __html: post.markdown }} />
        </>
    ) 
}

export default PagePost;