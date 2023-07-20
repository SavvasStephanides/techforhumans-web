import { LoaderArgs, json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { Article } from "~/components/article"
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
        <Article title={data.post.title} htmlContent={data.post?.content} />
    </div>
}