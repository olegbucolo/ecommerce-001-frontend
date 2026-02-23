import LogoComponent from './LogoComponent';
import PopoverComponent from './PopoverComponent';
import UserLoginComponent from './UserLoginComponent';
import MobileMenuComponent from './MobileMenuComponent';
import MobileMenuDialog from './MobileMenuDialog';
import { useState } from 'react';

const headerProducts = [
    {name: "name01", desc: "desc01", href: "href01"},
    {name: "name02", desc: "desc02", href: "href02"},
    {name: "name03", desc: "desc03", href: "href03"},
    {name: "name04", desc: "desc04", href: "href04"},
]

export default function HeaderAgain01(){
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="bg-red-500">
            <nav className='flex justify-between items-center p-4'>
                <LogoComponent/>
                <PopoverComponent headerProducts={headerProducts} />
                <UserLoginComponent />
                <MobileMenuComponent setMobileMenuOpen={setMobileMenuOpen} />
            </nav>
            <MobileMenuDialog open={mobileMenuOpen} onClose={setMobileMenuOpen}/>
        </header>
    )
}