// import { NextAuthOptions } from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'

// const authOptions: NextAuthOptions = {
//     session: {
//         strategy: 'jwt'
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     providers: [
//         CredentialsProvider({
//             type: 'credentials',
//             credentials: {
//                 username: { label: 'Username', type: 'text' },
//                 password: { label: 'Password', type: 'password' }
//             },
//             async authorize(credentials) {
//                 const { username, password } = credentials as {
//                     username: string
//                     password: string
//                 }
//                 const user: any = {
//                     id: 1,
//                     username: username,
//                     password: password
//                 }
//                 if (user) {
//                     return user
//                 } else {
//                     return null
//                 }
//             }
//         })
//     ],
//     callbacks: {
//         async jwt({ token, account }) {
//             if (account?.provider === 'credentials') {
//                 token.username = account.username
//             }
//             return token
//         },
//         async session({ session, token }: any) {
//             if ('username' in token) {
//                 session.user.username = token.username
//                 return session
//             }
//         }
//     }
// }
