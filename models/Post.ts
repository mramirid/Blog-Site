interface BasePost {
  author: string
  title: string
  content: string
  thumbnailLink: string
}

export interface InputPost extends BasePost {}
