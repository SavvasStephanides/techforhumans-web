import { LoaderArgs, json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import Post from "~/model/Post"
import PostService from "~/module/post/PostService"

export const loader = async ({params}: LoaderArgs) => {
    const postService = new PostService()
    const slug: string = params.postSlug
    const post: Post | undefined = await postService.getPostBySlug(slug)

    return json({
        post
      })
}
export default function postSlug(){
    const data = useLoaderData<typeof loader>()
    return <div>
        <article>
            <h1>{data.post.title}</h1>

            <div dangerouslySetInnerHTML={{__html: data.post.content}}></div>
        </article>
    </div>
}