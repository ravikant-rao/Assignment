import React, { useContext } from "react";
import { Link } from "react-router";
import { HambergContext } from "../context";

function Header(){
    const {showSidebar,setShowSidebar} = useContext(HambergContext)
    const handleShowSidebar = ()=>{
        setShowSidebar(!showSidebar);
    }
    
    
    
    return (
        <div className="flex justify-between py-3 px-8 bg-zinc-100">
            <div >
            
                <img 
                onClick={handleShowSidebar}
                className="h-11 cursor-pointer"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg==" alt="hamberg" />
            </div>
            <ul className="flex items-center gap-7">
                <Link to="/">
                 <li className="cursor-pointer hover:border-b-1">Home</li>
                </Link>
                <Link to="/about">
                <li className="cursor-pointer hover:border-b-1">About</li>
                </Link>
                <Link to="/Contact">
                <li className="cursor-pointer hover:border-b-1">Contact Us</li>
                </Link>
            </ul>
        </div>
    )
}

export default Header;