import './globals.css'
import {Inter} from 'next/font/google'
import NavBar from './navBar'
import Footer from "@/app/footer";
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Aggie ProfMatch',
    description: 'A dynamic, personalized professor matching system.',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <NavBar/>
        {children}
        <Analytics />
        <Footer/>
        </body>
        </html>
    )
}
