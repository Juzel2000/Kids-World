import About from "./about";
import Addfav from "./addfav";
import Fav from "./favourites";
import Home from "./home";

const Navbar = () => {
    let links=[
        {link:"home",path:"/"},
        {link:"About",path:"/about"},
        {link:"Favourites",path:"/favourites"},
        {link:"Signup",path:"/addfav"}]
    
    return (  
        <div className="navbar">
            <div className="logo">
                <img width="100px" src="https://cdn.icon-icons.com/icons2/2699/PNG/128/netflix_official_logo_icon_168085.png" alt=""/>
            </div>
            <div className="links">
               {links.map((data)=>{
                 return(
                    <a href={data.path}>{data.link}</a>
                 )
               })}
                    
                        


                    

                
                
                
            </div>
        </div>
    );
}
 
export default Navbar;