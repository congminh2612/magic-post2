import { OrganizationSwitcher, SignOutButton, SignedIn, UserButton } from "@clerk/nextjs";
import logo from '@/assets/logo.png'
import logout from '@/assets/page.png'
import Image from "next/image";
import Link from "next/link";

const Topbar = () =>  {
    return (
    <>
    <nav className='topbar'>
      <Link href='/' className='flex items-center gap-4'>
        <Image 
            src={logo} 
            alt='logo' 
            width={100}  
        />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>Magic Post</p>
      </Link>

      <div className='flex items-center gap-1'>
        <div className='block '>
            <UserButton 
                afterSignOutUrl='/'
                
            />
        </div>

        {/* <OrganizationSwitcher
          appearance={{
            // baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        /> */}
      </div>
    </nav>
    </>
    )
}
export default Topbar;