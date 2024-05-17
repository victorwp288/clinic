'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const ActiveLink = ({ href, children }) => {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <Link href={href} className={isActive ? 'text-black' : 'text-gray-400'}>
      {children}
    </Link>
  )
}

export default ActiveLink
