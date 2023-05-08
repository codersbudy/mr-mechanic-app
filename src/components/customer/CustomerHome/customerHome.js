import { useEffect } from "react";
import CustomerNavigation from "../Navigation/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchShop } from "../../../redux-config/shopSlice";

import "./customerHome.css";
import shopImg from "./shopImg.jpg";
import { useNavigate } from "react-router-dom";

function CustomerHome() {
  const dispatch = useDispatch();
  const { shopList } = useSelector(state => state.shop);
  const navigate = useNavigate();
  function getIndex(index) {
    navigate("/customerViewShop", {
      state: {
        index: index
      }
    })
  }
  return <>
    <CustomerNavigation />
    <div className="container-fluid" style={{ marginTop: "-11vw" }}>
      <div className="container py-5">
        <div className="row my-5">
          <div className=" col-sm-12 col-md-3  bg-success mt-5 p-2 filter">
            <span className="fw-bold px-2 text-light">Filter :</span>
            <span className="text-light"> Type </span>
          </div>
        </div>
        <div className="row justify-content-around px-3">

          {shopList.shop.map((shop, index) => <div
            id="shopId1"
            className="col-sm-12 col-md-3  card mb-5 mx-2 px-0 py-0 box0"
            style={{ width: "14rem" }}
          >
            <div className="rotate">
              <div className="box-content0 bts1">
                <div className="box-front">
                  <img
                    id="cardimg"
                    src={shop.photo}
                    className="card-img-top imgzoom"
                    style={{ height: "30vh" }}
                    alt="..."
                  />
                </div>
                <div className="box-back">
                  <p>
                    {shop.address.slice(0, 70)}
                  </p>
                  <a className="index" onClick={() => getIndex(index)}>View More</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <ul className="list-unstyled d-flex justify-content-between ratings">
                <li>
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star-half" />
                </li>
                <li className="text-muted text-right">4.5</li>
              </ul>
              <h6 className="card-title">{shop.shopName}</h6>
              <p className="card-text"> Shop Type </p>
              <p className="card-text"><i class="fa fa-mobile" aria-hidden="true"></i> {shop.contact}  </p>
              <a href="#">
                <button className="button-57" id="buttonID" role="button">
                  <span id="spanFirst" className="text">
                    <i className="fa fa-wrench" aria-hidden="true" />
                    Get Mechanic
                  </span>
                  <span id="spanLast">
                    <i className="fa fa-paper-plane" aria-hidden="true" />
                    Send Request
                  </span>
                </button>
              </a>
            </div>
             </div>)}
        </div>
      </div>
    </div>


  </>

}

export default CustomerHome;
