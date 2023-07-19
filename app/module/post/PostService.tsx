import axios from "axios"
import Collection from "~/model/Collection"
import Post from "~/model/Post"

export default class PostService{
    

    async getAllPosts(): Promise<Post[]>{
        let apiAllPostsUrl: string = `${process.env.API_BASE_URL}/posts/all.json`

        let apiResponse = await axios.get(apiAllPostsUrl)
        let allPosts: Post[] = apiResponse.data
        return allPosts
    }

    async getCollection(collectionSlug: string): Promise<Collection>{
        let apiCollectionPostsUrl: string = `${process.env.API_BASE_URL}/collections/${collectionSlug}.json`

        let apiResponse = await axios.get(apiCollectionPostsUrl)
        let collection: Collection = apiResponse.data
        return collection
    }

    async getPostBySlug(slug: string): Promise<Post | undefined>{
        let allPosts: Post[] = await this.getAllPosts()
        let post: Post | undefined = allPosts.find(post => post.slug === slug)
        return post
    }


}