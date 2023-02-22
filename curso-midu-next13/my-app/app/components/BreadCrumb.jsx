'use client'

import { usePathname } from 'next/navigation'

export default function BreadCrumb () {
  const pathname = usePathname()
  const breadCrumb = pathname.split('/').join(' - ')

  return (
    <div>
      <p>{breadCrumb}</p>
    </div>
  )
}
