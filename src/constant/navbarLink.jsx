import {AiOutlineHome} from "react-icons/ai";
import { BiCart,BiCloset } from "react-icons/bi";
import { BsFillAlarmFill } from "react-icons/bs";
import { HiOutlineChatAlt } from "react-icons/hi";


 
export  const navbarLinks = [
    {   
        id : 1 ,
        label : 'Home',
        route : 'home',
        icon : <AiOutlineHome />
    },
    {   
        id : 2 ,
        label : 'Categories',
        route : 'categories',
        icon : <BiCloset />
    },
    {
        id : 3 ,
        label : 'Last Minute',
        route : 'lastMinute',
        icon: <BsFillAlarmFill />
    },
    {
        id : 4 ,
        label : 'Carrello',
        route : 'carrello',
        icon : <BiCart />
    },
    
    {
        id : 5 ,
        label : 'Contact',
        route : 'contact',
        icon : <HiOutlineChatAlt />
    }
    
];