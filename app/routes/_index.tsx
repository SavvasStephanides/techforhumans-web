import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios"
import { Link } from "@remix-run/react"
import Post from "~/model/Post";
import PostService from "~/module/post/PostService";
import Collection from "~/model/Collection";
import PostList from "~/components/post-list";

export const loader = async () => {
  const postService = new PostService()
  const programmingBasicsCollection: Collection = await postService.getCollection("programming-basics")
  const webFundamentalsCollection: Collection = await postService.getCollection("web-fundamentals")
  
  return json({
    programmingBasicsCollection,
    webFundamentalsCollection
  })
}

export default function IndexRoute() {
    const data = useLoaderData<typeof loader>()
    return <div>
        <PostList name={data.programmingBasicsCollection.name} posts={data.programmingBasicsCollection.posts} />
        <PostList name={data.webFundamentalsCollection.name} posts={data.webFundamentalsCollection.posts} />
      </div>;
}
  