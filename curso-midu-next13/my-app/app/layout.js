import '../styles/globals.css'
import Navigation from './components/Navigation'
import BreadCrumb from './components/BreadCrumb'
import { roboto } from './fonts'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body className={roboto.variable}>
        <header>
          <Navigation />
          <BreadCrumb />
        </header>
        {children}
      </body>
    </html>
  )
}
