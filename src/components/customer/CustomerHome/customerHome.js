import { useEffect } from "react";
import CustomerNavigation from "../Navigation/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchShop } from "../../../redux-config/shopSlice";
import "./customerHome.css";
import shopImg from "./shopImg.jpg";

function CustomerHome() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShop());
  }, []);

  const { shopList } = useSelector(state => state.shop);
  return <>
    <CustomerNavigation />
    <div className="container-fluid ">
      <div className="container py-5">
        <div className="row my-5">
          <div className=" col-sm-12 col-md-3  bg-success mt-5 p-2 filter">
            <span className="fw-bold px-2 text-light">Filter :</span>
            <span className="text-light"> Type </span>
          </div>
        </div>
        <div className="row justify-content-around px-3">
          {/* +++++++++++++++++++ Cart +++++++++++++++++++++++++ */}
          <div
            id="shopId1"
            className="col-sm-12 col-md-3  card mb-5 mx-2 px-0 py-0 box0"
            style={{ width: "14rem" }}
          >
            <div className="rotate">
              <div className="box-content0 bts1">
                <div className="box-front">
                  <img
                    id="cardimg"
                    src= {shopImg}
                    className="card-img-top imgzoom"
                    style={{ height: "30vh" }}
                    alt="..."
                  />
                </div>
                <div className="box-back">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                    quos debitis atque hic quam.
                  </p>
                  <a href="#">View More</a>
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
              <h6 className="card-title"> Shop Name</h6>
              <p className="card-text"> Shop Type </p>
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
            <div className="cross">
              <a className="btn btn-danger bt2">✘</a>
            </div>
          </div>


          <div
            id="shopId1"
            className="col-sm-12 col-md-3  card mb-5 mx-2 px-0 py-0 box0"
            style={{ width: "14rem" }}
          >
            <div className="rotate">
              <div className="box-content0 bts1">
                <div className="box-front">
                  <img
                    id="cardimg"
                    src= {shopImg}
                    className="card-img-top imgzoom"
                    style={{ height: "30vh" }}
                    alt="..."
                  />
                </div>
                <div className="box-back">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                    quos debitis atque hic quam.
                  </p>
                  <a href="#">View More</a>
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
              <h6 className="card-title"> Shop Name</h6>
              <p className="card-text"> Shop Type </p>
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
            <div className="cross">
              <a className="btn btn-danger bt2">✘</a>
            </div>
          </div>



          <div
            id="shopId1"
            className="col-sm-12 col-md-3  card mb-5 mx-2 px-0 py-0 box0"
            style={{ width: "14rem" }}
          >
            <div className="rotate">
              <div className="box-content0 bts1">
                <div className="box-front">
                  <img
                    id="cardimg"
                    src= {shopImg}
                    className="card-img-top imgzoom"
                    style={{ height: "30vh" }}
                    alt="..."
                  />
                </div>
                <div className="box-back">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                    quos debitis atque hic quam.
                  </p>
                  <a href="#">View More</a>
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
              <h6 className="card-title"> Shop Name</h6>
              <p className="card-text"> Shop Type </p>
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
            <div className="cross">
              <a className="btn btn-danger bt2">✘</a>
            </div>
          </div>



          <div
            id="shopId1"
            className="col-sm-12 col-md-3  card mb-5 mx-2 px-0 py-0 box0"
            style={{ width: "14rem" }}
          >
            <div className="rotate">
              <div className="box-content0 bts1">
                <div className="box-front">
                  <img
                    id="cardimg"
                    src= {shopImg}
                    className="card-img-top imgzoom"
                    style={{ height: "30vh" }}
                    alt="..."
                  />
                </div>
                <div className="box-back">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                    quos debitis atque hic quam.
                  </p>
                  <a href="#">View More</a>
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
              <h6 className="card-title"> Shop Name</h6>
              <p className="card-text"> Shop Type </p>
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
            <div className="cross">
              <a className="btn btn-danger bt2">✘</a>
            </div>
          </div>

          <div
            id="shopId1"
            className="col-sm-12 col-md-3  card mb-5 mx-2 px-0 py-0 box0"
            style={{ width: "14rem" }}
          >
            <div className="rotate">
              <div className="box-content0 bts1">
                <div className="box-front">
                  <img
                    id="cardimg"
                    src= {shopImg}
                    className="card-img-top imgzoom"
                    style={{ height: "30vh" }}
                    alt="..."
                  />
                </div>
                <div className="box-back">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                    quos debitis atque hic quam.
                  </p>
                  <a href="#">View More</a>
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
              <h6 className="card-title"> Shop Name</h6>
              <p className="card-text"> Shop Type </p>
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
            <div className="cross">
              <a className="btn btn-danger bt2">✘</a>
            </div>
          </div>

          <div
            id="shopId1"
            className="col-sm-12 col-md-3  card mb-5 mx-2 px-0 py-0 box0"
            style={{ width: "14rem" }}
          >
            <div className="rotate">
              <div className="box-content0 bts1">
                <div className="box-front">
                  <img
                    id="cardimg"
                    src= {shopImg}
                    className="card-img-top imgzoom"
                    style={{ height: "30vh" }}
                    alt="..."
                  />
                </div>
                <div className="box-back">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                    quos debitis atque hic quam.
                  </p>
                  <a href="#">View More</a>
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
              <h6 className="card-title"> Shop Name</h6>
              <p className="card-text"> Shop Type </p>
              <a href="#">
                <button className="button-57" id="buttonID" role="button">
                  <span id="spanFirst" className="text">
                    <i className="fa fa-wrench" aria-hidden="true" />
                     <big> Get Mechanic </big>
                  </span>
                  <span id="spanLast">
                    <i className="fa fa-paper-plane" aria-hidden="true" />
                    Request
                  </span>
                </button>
              </a>
            </div>
            <div className="cross">
              <a className="btn btn-danger bt2">✘</a>
            </div>
          </div>

          {/* ===================Cart End======================= */}
        </div>
      </div>
    </div>


  </>

}

export default CustomerHome;
