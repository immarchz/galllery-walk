import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export default  NextAuth({
    providers:[
        GoogleProvider({
            clientId:"642640439282-2dka09k5k9vecpkq408j54b5skq8sq62.apps.googleusercontent.com",
            clientSecret: "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"
            
        })
    ]
})

