'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

   export default function Navbar({lang}){
    const pathname = usePathname()
    console.log(pathname);
    const router = useRouter()


    const handleLanguageChange = (e) =>{
      const newLocale =e.target.value;
     
      const path = pathname.split("/").slice(2).join("/");
      
      router.push(`/${newLocale}/${path}`);
    }

    
    return(

      
      <div className='flex justify-between'>
       
        <nav className=''>
      <Link className= {`link  ${pathname === `/${lang}` ? 'active bg-cyan-200' : ''}`} href={`/${lang}/`}>
        Home
      </Link>
 
      <Link
        className={`link mx-5 ${pathname === `/${lang}/about` ? 'active bg-cyan-200' : ''}`}
        href={`/${lang}/about`}
      >
        About
      </Link>


      <Link
        className={`link mx-5 ${pathname === `/${lang}/contact` ? 'active bg-cyan-200' : ''}`}
        href={`/${lang}/contact`}
      >
        Contact
      </Link>

      <button className="bg-red-600 mx-4" type="button" onClick={() => router.push('/')}>
Home
</button>


    </nav>

    

  
    <select className="bg-red-600" value={lang} onChange={handleLanguageChange}>
      <option   value="en">EN</option>
      <option value="bn">BN</option>
    </select>

   


    </div>
    
   

        
    )
}