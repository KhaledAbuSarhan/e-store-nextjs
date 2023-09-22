import './globals.css'
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import {Inter} from 'next/font/google';
import ThemeProvider from '@/context/ThemeContext';


export const metadata = {
  title: 'Fox4Shopping',
  description: "Fox4Shopping is your one-stop destination for a virtual shopping extravaganza! Step into a world of limitless choices where you can browse, select, and purchase a wide array of products from the comfort of your own home. Our imaginative e-shop offers an extensive range of items, from fashion-forward clothing and accessories to cutting-edge electronics and trendy home decor. With user-friendly navigation, secure payment options, and swift delivery services, Fox4Shopping transforms your online shopping experience into a delightful adventure. Explore, shop, and indulge in the convenience of Fox4Shopping today!",
}
const LogoFont = Inter({subsets: ['latin']});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={LogoFont.className}>
      <ThemeProvider>
        <div className='container'>
        <Navbar/>
        {children}
        <Footer/>
        </div>
      </ThemeProvider>
      </body>
    </html>
  )
}
