import React, { useEffect, useState } from "react";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import { menuItems } from "./MenuItems";
import { Link } from "react-router-dom";

export default function NavBarComponent (){

   const [activeLink ,setActiveLink]=useState("Home");
  
   const scrollFunction = (sectionId)=>{
      if(sectionId){      
         const marginToY = 0;
         const element = document.getElementById(sectionId);
         const scrollToY= element.getBoundingClientRect().top+window.scrollY+marginToY;
         window.scrollTo({top:scrollToY,behavior:"smooth"})
      }
   }

   const deterMinescrollSection =()=>{
      for(let i = menuItems.length -1 ;i >= 0;i--){
         const section = document.getElementById(menuItems[i]);
         if(section){
            const rect = section.getBoundingClientRect();
            if(rect.top <=120 && rect.bottom>=120){
               setActiveLink(menuItems[i]);
               break
            }
         }
      }
   }

   useEffect(()=>{
     const handleScroll =()=>{
      deterMinescrollSection();
     }
     window.addEventListener('scroll',handleScroll);

     return()=>{
      window.removeEventListener('scroll',handleScroll)
     }
   },[])

    return(<>
     <GridContainer className="navContainer">
        <GridItem xs={4} sm={4} md ={4} lg={4} className="logo">
           GOKUL
        </GridItem>
        <GridItem xs={8} sm={8} md ={8} lg={8} className="menulist">
         {menuItems.map((menu)=>{
            return(
                <ul onClick={()=>scrollFunction(menu)} ><Link className={ menu == activeLink ? "activeLink":''} to="/">{menu}</Link></ul>
            )
         })}
        </GridItem>
     </GridContainer>
    </>)
}