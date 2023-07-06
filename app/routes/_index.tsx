import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios"
import { Link } from "@remix-run/react"
import Post from "~/model/Post";
import PostService from "~/module/post/PostService";

export const loader = async () => {
  const postService = new PostService()
  const allPosts: Post[] = await postService.getAllPosts()
  
  return json({
    allPosts
  })
}

export default function IndexRoute() {
    const data = useLoaderData<typeof loader>()
    return <div>
        <h1>All posts</h1>

        <ul>
         {
          data.allPosts.map((post: any) => (
            <li><Link to={`/explainer/${post.slug}`}>{post.title}</Link></li>
          ))
         }
        </ul>
      </div>;
}
  