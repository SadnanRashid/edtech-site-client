import "./checkout.css";

import React from "react";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/context";

export default function Checkout() {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  return (
    <div>
      <div className="container p-0">
        <div className="card px-4">
          <p className="h8 py-3">Payment Details</p>
          <div className="row gx-3">
            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Person Name: </p>
                <div className="input-checkout-text">
                  <h5 className="mt-3 mb-3 font-res-big">{user.displayName}</h5>
                </div>
                <p className="text mb-1">Course: </p>
                <div className="input-checkout-text">
                  <h5 className="mt-3  mb-3 font-res-big">{data.title}</h5>
                </div>
                <p className="text mb-1">Price :</p>
                <div className="input-checkout-text">
                  <h5 className="mt-3 mb-3 font-res-big">{data.price} taka</h5>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-12 mt-5">
              <h4>Card Details: </h4>
              <div className="d-flex flex-column">
                <p className="text mb-1">Card Number</p>
                <input
                  className="input-checkout mb-3"
                  type="text"
                  placeholder="1234 5678 435678"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <p className="text mb-1">Expiry</p>
                <input
                  className="input-checkout mb-3"
                  type="text"
                  placeholder="MM/YYYY"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <p className="text mb-1">CVV/CVC</p>
                <input
                  className="input-checkout mb-3 pt-2 "
                  type="password"
                  placeholder="***"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="btn btn-outline-dark mb-3">
                <span className="ps-3 pe-3">Pay {data.price}</span>
                <span className="fas fa-arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
