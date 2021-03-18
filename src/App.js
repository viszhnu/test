import logo from "./logo.svg";
import "./App.css";
import Card from "./Card.js";
import Cart from "./Cart.js";
import Cartmani from "./Cartmani.js";
import { useState } from "react";
function App() {
  var items = [
    { name: "Item one", price: "15$", description: "xxx" ,no:0},
    { name: "Item two", price: "25$", description: "aaa", no:0},
    { name: "Item three", price: "35$", description: "yyy",no:0 },
    { name: "Item four", price: "45$", description: "zzzz" ,no:0},
  ];
  const [now, manipulate] = useState([]);
  var cart = function (i) {
   var x;
     x=now;
     var check=true;
    for(var j in x){
      if(x[j].name===i.name){
        x[j].no++;
        check=false;
      }
    }
    if(check){
      i.no++;
      x.push(i)
    }
    console.log(x)
    manipulate(x);
    console.log(now)
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <h1 class="my-4">Shop Name</h1>
          <div>
             <Cart pass={now}></Cart>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="row">
            {items.map((item) => {
              return <Card props={item} eve={cart}></Card>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
