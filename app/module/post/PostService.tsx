import axios from "axios"
import Post from "~/model/Post"

export default class PostService{
    private apiAllPostsUrl = `${process.env.API_BASE_URL}/posts/all.json`

    async getAllPosts(): Promise<Post[]>{
        let apiResponse = await axios.get(this.apiAllPostsUrl)
        let allPosts: Post[] = apiResponse.data
        return allPosts
    }

    async getPostBySlug(slug: string): Promise<Post | undefined>{
        let allPosts: Post[] = await this.getAllPosts()
        let post: Post | undefined = allPosts.find(post => post.slug === slug)
        return post
    }
}