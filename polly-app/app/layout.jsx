import './styles/globals.css'
import { roboto } from './fonts'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body className={roboto.className}>
        <div className="container">
            {children}
        </div>
      </body>
    </html>
  )
}
