import Credentials from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: "Email"},
                password: {label: "Password"}
            },
            authorize(credentials, req) {
                // ToDo: dperform datablase operations here
                if(credentials?.email === 'admin@example.com' && credentials.password === 'admin') {
                    return {
                        id: '1', email:'admin@example.com'
                    }
                }
                return null
            }
            }
        )
    ]
}