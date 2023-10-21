import { Link } from "@remix-run/react"

type PostListProps = {
    id: number,
    name: string,
    posts: any
}

export default function PostList(props: PostListProps){    
    const scroll = (direction: string, e: any) => {        
        let scrollChange: number = 0
        if(direction === "LEFT"){
            scrollChange = -90
        }
        else if(direction === "RIGHT"){
            scrollChange = 90
        }

        let listElement: Element|null = document.querySelector(`#post-list-${props.id} ul`)
        listElement && (listElement.scrollLeft += scrollChange)

        e.preventDefault()
    }


    return <div className="post-list-container" id={`post-list-${props.id}`}  style={{position: "relative"}}>
        <h2>{props.name}</h2>
        <button className="scroll-button left" onClick={(e) => scroll("LEFT", e)}>&lt;</button>
        <button className="scroll-button right" onClick={(e) => scroll("RIGHT", e)}>&gt;</button>
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