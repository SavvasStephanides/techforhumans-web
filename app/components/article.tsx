import hljs from "highlight.js"
import { useEffect } from "react"

type ArticleProps = {
    title: string,
    htmlContent: string
}

export function Article(props: ArticleProps){
    useEffect(() => {
        hljs.highlightAll()
    }, [])
    return <article>
            <h1>{props.title}</h1>

            <div dangerouslySetInnerHTML={{__html: props.htmlContent}}></div>
    </article>
}