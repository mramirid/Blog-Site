interface BasePost {
  author: string
  title: string
  thumbnailLink: string
}

export interface InputPost extends BasePost {
  content: string
}

export interface PostPreview extends BasePost {
  id: string
  previewText: string
}

export default interface Post extends BasePost {
  id: string
  content: string
}
