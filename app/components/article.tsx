type ArticleProps = {
    title: string,
    htmlContent: string
}

export function Article(props: ArticleProps){
    return <article>
            <h1>{props.title}</h1>

            <div dangerouslySetInnerHTML={{__html: props.htmlContent}}></div>
    </article>
}