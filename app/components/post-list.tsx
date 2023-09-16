import { Link } from "@remix-run/react"

type PostListProps = {
    name: string,
    posts: any
}

export default function PostList(props: PostListProps){
    return <div className="post-list-container">
        <h2>{props.name}</h2>
        <ul>
         {
          props.posts.map((post: any) => (
            <li>
                <Link to={`/explainer/${post.slug}`}>
                    <div className="post-title">{post.title.replace(", explained", "").replace(".", "")}</div>
                </Link>
            </li>
          ))
         }
        </ul>
    </div>
}