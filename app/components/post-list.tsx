import { Link } from "@remix-run/react"

type PostListProps = {
    name: string,
    posts: any
}

export default function PostList(props: PostListProps){
    return <div style={containerStyle}>
        <h2 style={titleStyle}>{props.name}</h2>
        <ul style={ulStyle}>
         {
          props.posts.map((post: any) => (
            <li>
                <Link style={liLinkStyle} to={`/explainer/${post.slug}`}>
                    <div className="post-title" style={linkPostTitleStyle}>{post.title.replace(", explained", "").replace(".", "")}</div>
                </Link>
            </li>
          ))
         }
        </ul>
    </div>
}

const containerStyle = {
    marginTop: "30px"
}

const titleStyle = {
    padding: "15px"
}

const ulStyle = {
    "listStyle": "none",
    "padding": 0,
    "paddingLeft": "30px",
    "display": "flex",
    "overflowX": "auto",
    "marginTop": "15px"
}

const liLinkStyle = {
    display: "flex",
    border: "1px solid #eee",
    margin: "6px",
    borderRadius: "6px",
    boxShadow: "0 0 15px #eee",
    width: "210px",
    height: "210px",
    textDecoration: "none",
    color: "black"
}

const linkPostTitleStyle = {
    margin: "auto",
    fontSize: "21px"
}