import React from "react"
import Card from "./Card";
import App from "./App.js";
import Cart from "./Cart.js";

function Cartmani(props){
   
       return(
           <tr>
               <td>
                {props.s}
               </td>
               <td>
               {props.p.name}
               </td>
               <td>
               {props.p.no}
               </td>
               <td>
                 {props.p.price}
               </td>
           </tr>  
       );  
    
}

export default Cartmani;