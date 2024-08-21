'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

   export default function Navbar(){
    const pathname = usePathname()
    const router = useRouter()

    
    return(

      <>
        <nav>
      <Link className= {`link  ${pathname === '/' ? 'active bg-cyan-200' : ''}`} href="/">
        Home
      </Link>
 
      <Link
        className={`link mx-5 ${pathname === '/about' ? 'active bg-cyan-200' : ''}`}
        href="/about"
      >
        About
      </Link>

      <button className="bg-red-600 mx-4" type="button" onClick={() => router.push('/')}>
Home
</button>


    </nav>
    
    </>

        
    )
}