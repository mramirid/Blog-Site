export interface RawPost {
  title: string
  thumbnailLink: string
  content: string
  author: string
  previewText: string
  updatedDate: string
}

export default interface Post extends RawPost {
  id: string
}
