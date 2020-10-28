import { RawPost } from '@/models/Post'

// Fetch posts response type from firebase
export interface FirebaseRawPosts {
  [id: string]: RawPost
}

// Add post response type from firebase
export interface FirebaseAddPostResponse {
  name: string
}
