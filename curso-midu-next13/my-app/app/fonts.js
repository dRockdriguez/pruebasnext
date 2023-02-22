import { Roboto, Comic_Neue } from '@next/font/google'

export const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-roboto'
})

export const comicNeue = Comic_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-comicNeue'
})
