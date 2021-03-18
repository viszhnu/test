import React from "react";
import Card from "./Card";
import App from "./App.js";
import Cartmani from "./Cartmani.js";
function Cart(props) {
  console.log(props.pass)
  var sno=1;
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">ItemName</th>
            <th scope="col">NOs</th>
            <th scope="col">price</th>
          </tr>
        </thead>
        <tbody>
         {
           props.pass.map((item)=>{
             console.log(item)
           return <Cartmani p={item} s={sno++}></Cartmani>
           })
          }
          
         
        </tbody>
      </table>
    </div>
  );
}
export default Cart;
