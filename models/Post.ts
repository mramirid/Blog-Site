export interface InputPost {
  title: string
  thumbnailLink: string
  content: string
  author: string
}

export default interface Post {
  id: string
  title: string
  thumbnailLink: string
  previewText: string
  content: string
  author: string
  updatedDate: string
}
