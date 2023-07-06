export default class Post{
    slug: string
    title: string
    publishDate: Date
    content: string
    thumbnailFileName: string
    keywords: string[]

    constructor(
        slug: string, 
        title: string, 
        publishDate: Date,
        content: string,
        thumbnailFileName: string,
        keywords: string[]){
        this.slug = slug
        this.title = title
        this.publishDate = publishDate
        this.content = content
        this.thumbnailFileName = thumbnailFileName
        this.keywords = keywords
    }
}