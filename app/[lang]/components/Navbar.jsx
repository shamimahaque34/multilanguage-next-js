'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

   export default function Navbar({lang}){
    const pathname = usePathname()
    const router = useRouter()


    const handleLanguageChange = (e) =>{
      const newLocale =e.target.value;
      console.log (newLocale);
      const path = pathname.split("/").slice(2).join("/");
      console.log(path);
      router.push(`/${newLocale}/${path}`);
    }

    
    return(

      
      <div className='d-flex gap-6'>
        <div>
        <nav>
      <Link className= {`link  ${pathname === '/' ? 'active bg-cyan-200' : ''}`} href={`/${lang}/`}>
        Home
      </Link>
 
      <Link
        className={`link mx-5 ${pathname === '/about' ? 'active bg-cyan-200' : ''}`}
        href={`/${lang}/about`}
      >
        About
      </Link>


      <Link
        className={`link mx-5 ${pathname === '/contact' ? 'active bg-cyan-200' : ''}`}
        href={`/${lang}/contact`}
      >
        Contact
      </Link>

      <button className="bg-red-600 mx-4" type="button" onClick={() => router.push('/')}>
Home
</button>


    </nav>

    </div>

    <div>
    <select value={lang} onChange={handleLanguageChange}>
      <option value="en">EN</option>
      <option value="bn">BN</option>
    </select>

    </div>


    </div>
    
   

        
    )
}