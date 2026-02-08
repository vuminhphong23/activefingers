// import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import "/public/assets/css/animate.min.css"
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/flaticon.min.css"
import "/public/assets/css/fontawesome-5.14.0.min.css"
import "/public/assets/css/magnific-popup.min.css"
import "/public/assets/css/nice-select.min.css"
import "/public/assets/css/slick.min.css"
import "/public/assets/css/style.css"

import { Playfair, Plus_Jakarta_Sans } from 'next/font/google'

const playfair = Playfair({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--script-font",
    display: 'swap',
})
const jakarta = Plus_Jakarta_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--base-font",
    display: 'swap',
})

export const metadata = {
    title: 'Active Fingers',
    description: 'Active Fingers - Digital solutions and development',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${playfair.variable} ${jakarta.variable}`}>{children}</body>
        </html>
    )
}
