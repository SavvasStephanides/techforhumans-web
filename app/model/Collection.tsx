import Post from "./Post"

export default class Collection{
    name: string
    posts: Post[]

    constructor(name: string, posts: Post[]){
        this.name = name
        this.posts = posts
    }
}