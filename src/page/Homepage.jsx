import { useState } from "react"
import { Menu } from 'lucide-react';
import{SunMoon,Sun} from 'lucide-react'
function Homepage() {


   

    let [menu,SetMenu]=useState(true)
    let[light,SetLight]=useState(false)

   


  return (
    <div className={`main ${light?'light-main':'dark-main'}`} >
        <div className="header">
            <div className="logo"><h1>GALLERY</h1></div>

          

            <ul className="list" style={{listStyle:"none"}}>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>JOIN</li>
                <li>GALLERY</li>
                <li>HELP</li>

                
            </ul>


            {
                light? <Sun onClick={()=>SetLight(!light)}/>: <SunMoon className="theam" onClick={()=>SetLight(!light)}/>
            }
           

               
              <Menu className="icon-menu" onClick={()=>SetMenu(!menu)}/>
        </div>

        <div className="menulist" style={{height:"100px",color:"white"}} hidden={menu} >
             <li>HOME</li>
             <li>ABOUT</li>
             <li>JOIN</li>
             <li>GALLERY</li>
             <li>HELP</li>
             <li>test</li>
        </div>

        
        <div className={`body ${light?'light-body':""}`}>
            <div className="welcome"><h1>WELCOME TO GALLERY</h1></div>
            <div className="section">
                <div className="section1" style={{flex:1}}><button className="button">Join Now</button></div>
                <div className="section2" style={{flex:1}}><button className="button">Upload</button><button className="button">Download</button></div>

            </div>

        </div>
      
    </div>
  )
}

export default Homepage
