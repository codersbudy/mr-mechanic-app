import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShop } from "../../../redux-config/shopSlice";

import "./customerHome.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Loader } from "../../Loader/Loader";

function CustomerHome() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.shop);
  const { shopList } = useSelector(state => state.shop);
  // const{}=useSelector(state=>state.categories);
  const{categoryisLoading,categoryList}=useSelector(state=>state.categories)
  const navigate = useNavigate();


  var rating = (r) => {
    let count = <></>;
    for (let i = 0; i < Math.trunc(r); i++)
      count = <>{count}<i className="text-warning fa fa-star" /></>
    if (((r / 0.5) % 2))
      count = <>{count}<i className="text-warning fa fa-star-half" /></>
    return count;
  }

  function getIndex(index) {
    navigate("/customerViewShop", {
      state: {
        index: index
      }
    })
  }
  return <>
    <Navbar />
    <div className="container-fluid" style={{ marginTop: "-11vw" }}>
      <div className="container py-5">
      <div className="row my-5 " >
          <div className=" col-sm-12 col-md-3 mt-5 p-2">
            <div className="dropdown">
              <button className="btn btn dropdown-toggle category" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Vehichle Type
              </button>

              {!categoryisLoading && <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {categoryList.result.map((category, index) => <li>
                  <a className="dropdown-item dt" href="#">{category.categoryName}</a>
                </li>)} </ul>}
            </div>
          </div>
        </div>
        {!isLoading && <div className="row justify-content-around px-3">

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
                  {rating(shop.rating)}

                </li>
                <li className="text-muted text-right">{shop.rating}</li>
              </ul>
              <h6 className="card-title">{shop.shopName}</h6>
              <p className="card-text"><i className="text-warning  fa fa-phone" aria-hidden="true"></i> {shop.contact}</p>

                <button className="button-57" id="buttonID" role="button">
                  <span id="spanFirst" className="text">
                    <i className="fa fa-wrench p-1" aria-hidden="true" />
                    Get Mechanic
                  </span>
                  <span id="spanLast">
                    <i className="fa fa-paper-plane" aria-hidden="true" />
                    Send Request
                  </span>
                </button>
              
            </div>
          </div>)}

        </div>}
        {isLoading && <>
          <Loader/>
        </>
        }
      </div>
    </div>

<Footer/>
  </>

}

export default CustomerHome;
