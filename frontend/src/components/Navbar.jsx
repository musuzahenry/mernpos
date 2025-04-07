import { Link } from "react-router-dom"
import {useState} from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import avatarImg from "../assets/avatar.png";

const Navbar = () =>{

    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    
    const navigation = [
        {name:"Dashboard", href:"/dashboard"},
        {name:"Orders", href:"/orders"},
        {name:"Cart Page", href:"/cart"},
        {name:"Check Out", href:"/check"},
    ]
    
    const currrentUser = true; 

   return (
       <header class="max-w-screen mx-auto px-4 py-6 bg-blue-300">
        <nav className="flex justify-between items-center">
            { /* left side */ }
            <div className="flex justify-between text-white py-2 gap-2">
                
               <div className="flex">

                <div className="flex gap-1 bg-[#EAEAEA] items-center">
                <IoSearchOutline className="text-black" />  <input placeholder="Search here" className=" text-black w-full" />
                </div>
                </div>


        
            </div>

            { /* right side */ }
            <div class="relative flex items-center md:space-x-3 space-x-2">

                <div>
                    {
                        currrentUser ? 
                        <>
                            <button className="flex items-center relative w-17 h-9" 
                                    onClick ={()=>setIsDropDownOpen(!isDropDownOpen)}>
                                    <img src={avatarImg}  className={`py-1 px-1 sm:size-4 md:size-6 rounded-full 
                                    ${currrentUser ? 'ring-2 ring-blue-500' : '' } `} />
                            </button> 
                                { /* how drop dowsns */ }
                                {
                                    isDropDownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                        <ul className="py-2">
                                            {navigation.map((item)=>(
                                                <li key={item.name}>
                                                <Link onClick={()=>setIsDropDownOpen(false)}
                                                className="block px-4 py-2 text-sm hover:bg-blue-300 hover:text-white shadow-lg flex align-items-left"
                                                to={item.href}>{item.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                        </div>
                                    )

                                }
                        </>
                        : 
                        <Link to="/login"><HiOutlineUser className="size-9" /></Link>
                    }
                </div>

                


               <button className="hidden sm:block h-9 gap-0"><HiOutlineHeart className="size-4" /></button>
                
                 

                <Link to="/cart" className="bg-primary p-1 h-9 sm:px-6 px-2 flex items-center rounded">
                    <HiOutlineShoppingCart className="size-6" />
                    <span className="text-sm font-semibold sm:ml-1">0</span>
                </Link>

                

                
            </div>
        </nav>
        </header>
   );

}


export default Navbar;