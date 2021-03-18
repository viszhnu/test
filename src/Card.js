import React from "react"
import Cartmani from "./Cartmani.js";
import Cart from"./Cart.js";
import App from "./App.js"
function Card(props){
    return(
        <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <img
            className="card-img-top"
            src="http://placehold.it/700x400"
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">{props.props.name}</h4>
            <h5>{props.props.price}</h5>
            <p className="card-text">
             {props.props.description}
            </p>
          </div>
          <div class="card-footer">
            <button type="button" className="btn btn-primary" onClick={()=>{
              console.log("aaaa")
              props.eve(props.props);
            }}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
}
export default Card;