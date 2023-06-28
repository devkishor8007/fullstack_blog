'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'

export const Navbar = ({currentUser}: any) => {
  return (
    <header>
        <nav className="bg-gray-200 flex justify-between px-4 py-6 shadow-xl">
            <div>{currentUser?.username}</div>

            <div className="flex gap-4">
                <Link href='/'>Home</Link>
             { currentUser && <Link href='/blog'>Blog</Link>}
                
                {
                    currentUser ? <button onClick={()=> signOut()}>Signout</button> : <Link href='/register'>Register</Link>
                }
            </div>
        </nav>
    </header>
  )
}
