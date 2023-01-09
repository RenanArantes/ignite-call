import NextAuth from 'next-auth'

declare module 'next-auth' {
  export interface User {
    id: string
    name: string
    email: string
    fullname: string
    avatar_url: string
  }
}
