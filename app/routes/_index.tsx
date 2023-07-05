import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios"
import { Link } from "@remix-run/react"

export const loader = async () => {
  const apiAllPostsUrl = "http://api/posts/all.json"
  const apiResponse = await axios.get(apiAllPostsUrl)
  const allPosts = apiResponse.data
  
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
          data.allPosts.map((post) => (
            <li><Link to={`/explainer/${post.slug}`}>{post.title}</Link></li>
          ))
         }
        </ul>
      </div>;
}
  