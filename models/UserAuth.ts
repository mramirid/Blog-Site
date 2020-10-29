// User auth input type (for firebase)
export interface UserAuthInput {
  email: string
  password: string
}

// User auth data type (for local storage)
export interface UserAuthData {
  userId: string | null
  token: string | null
  tokenExpirationDate: number | null
}
