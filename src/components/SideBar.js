import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Link , useLocation} from "react-router-dom";

export default function SideBar({links, close}){
    const location = useLocation();
    return(
        <div onClick= {close} className="sidebar">
           {
            links.map(link => (
                <Link to={link.path} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} key ={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name} 
                </Link>
            )) }
        </div>
    )
}