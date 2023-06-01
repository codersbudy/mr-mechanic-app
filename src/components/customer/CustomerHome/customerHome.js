import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShop } from "../../../redux-config/shopSlice";

import "./customerHome.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Footer from "../../Footer/Footer";
import api from "../../../WebApi/api";
import axios from "axios";
import { toast } from "react-toastify";

function CustomerHome() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.shop);
  const { shopList } = useSelector(state => state.shop);
  const { currentCustomer } = useSelector(state => state.customer);
  // const{}=useSelector(state=>state.categories);
  const { categoryisLoading, categoryList } = useSelector(state => state.categories)
  const [problem, setProblem] = useState("");
  const [location, setLocation] = useState("");
  const [vehicleName, setVehicalName] = useState("");
  const [shopId, setShopId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();
  // --------------------timer------------------------------------------
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        let cart = document.getElementById(shopId);
        let span = document.getElementById("span" + shopId);

        cart.style.background = "black"
        // span.innerHTML = 
        setTimer(prevTimer => {

          if ((prevTimer - 1) == 0) {
            span.innerHTML = "Rejected"
            cart.style.background = "red"
          }
          else {
            let latest = prevTimer - 1;
            const minutes = Math.floor(latest / 60);
            const seconds = latest % 60;
            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedSeconds = String(seconds).padStart(2, '0');
            span.innerHTML = `${formattedMinutes}:${formattedSeconds}`;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  // const formatTime = (time) => {
  //   const minutes = Math.floor(time / 60);
  //   const seconds = time % 60;
  //   const formattedMinutes = String(minutes).padStart(2, '0');
  //   const formattedSeconds = String(seconds).padStart(2, '0');
  //   return `${formattedMinutes}:${formattedSeconds}`;
  // };

  // -----------------------------------------------------------------------------
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

  // __________________________for Date___________________________________
  var currentDate = () => {
    var dateObj = new Date();
    var day = dateObj.getDate();
    var month = dateObj.getMonth() + 1;
    var year = dateObj.getFullYear();

    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    var formattedDate = day + "/" + month + "/" + year;
    return formattedDate;
  }
  // __________________________for Time___________________________________
  var currentTime = () => {
    var dateObj = new Date();
    var hours = dateObj.getHours();
    var minutes = dateObj.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    var formattedTime = hours + ":" + minutes + " " + ampm;
    return formattedTime;
  }
  // __________________________for current Location_______________________
  var currentLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      } else {
        reject("Geolocation is not supported by your browser.");
      }
      function successCallback(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        resolve(latitude + "," + longitude);
      }
      function errorCallback(error) {
        reject("Error occurred while retrieving your location: " + error.message);
      }
    });
  };
  // Usage


  //  console.log(currentLocation());

  // ------------------------------------------------------------------------


  // ------------------------------getMechanic-------------------------------------------
  const getMechanic = async () => {

    //  let cart =  document.getElementById(shopId);
    //  let span =  document.getElementById("span"+shopId);

    //   cart.style.background = "black"
    //   span.innerHTML = formatTime(120);
    console.log(shopId);
    try {
      var latlong = await currentLocation();
      const response = await axios.post(api.GET_MECHANIC, { customerId: currentCustomer._id, shopId: shopId, problem: problem, location: location, vehicleName: vehicleName, date: currentDate(), time: currentTime(), latlong: latlong });
      if (response.data.status) {
        setTimer(120);
        toast.success("Request Send successfully...");
      }
      
    }
    catch (err) {
      if (err.response.status == 400)
        toast.error("Bad request : 400");
      else if (err.response.status == 500)
        toast.error("Server Error : 500");
    }
  }
  // -------------------------------------------------------------------------


  return <>
    <Navbar />
    <div className="container-fluid" style={{ marginTop: "-11vw" }}>
      <div className="container py-5">
        <div className="row my-5 " >
          <div className=" col-sm-12 col-md-3 mt-5 p-2">
            {/* <h1>Timer: {formatTime(timer)}</h1> */}
            <div class="dropdown">
              <button class="btn btn dropdown-toggle category" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Vehichle Type
              </button>

              {!categoryisLoading && <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {categoryList.result.map((category, index) => <li>
                  <a class="dropdown-item dt" href="#">{category.categoryName}</a>
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
              <p className="card-text"><i class="text-warning  fa fa-phone" aria-hidden="true"></i> {shop.contact}</p>

              {/* onClick={()=>{getMechanic(shop._id)}} */}
              <button className="button-57" id={shop._id} role="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => { setShopId(shop._id) }}>
                <span id={"span" + shop._id} className="text" >
                  <i className="fa fa-wrench p-1" aria-hidden="true" />
                  Get Mechanic
                </span>
                <span id="spanLast">
                  <i className="fa fa-paper-plane" aria-hidden="true" />
                  <>Send Request</>
                </span>
              </button>


            </div>
          </div>)}

        </div>}
        {/* ___________________Modal___________________ */}
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Details</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div className="px-4 py-2">

                  <div className="div1">
                    <input className="input1" type="text" name="problem" id="input" placeholder="Describe Here" onChange={(event) => setProblem(event.target.value)} />
                    <label className="form-label label1">Describe Your Vehichle Problem</label>
                  </div>

                  <div className="div1 mt-3">
                    <input className="input1" type="text" name="vehicalName" id="input" placeholder="Enter Vehical Name" onChange={(event) => setVehicalName(event.target.value)} />
                    <label className="form-label label1">Enter Your Vehical Name</label>
                  </div>

                  <div className="div1 mt-3">
                    <input className="input1" type="text" name="location" id="input" placeholder="Enter Your Location" onChange={(event) => setLocation(event.target.value)} />
                    <label className="form-label label1">Enter Your current Location</label>
                  </div>

                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-info" onClick={() => { getMechanic() }}>Submit</button>
              </div>
            </div>
          </div>
        </div>
        {/* ______________________________________ */}
        {isLoading && <>
          <center>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{ margin: "auto", background: "#fff", display: "block" }}
              width="200px"
              height="200px"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
            >
              <g transform="translate(50 50)">
                {" "}
                <g transform="translate(-19 -19) scale(0.6)">
                  {" "}
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0;45"
                      keyTimes="0;1"
                      dur="0.34843205574912894s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                    <path
                      d="M31.35997276079435 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 L37.3496987939662 -6.999999999999995 L47.3496987939662 -6.999999999999997 L47.349698793966205 6.999999999999973 L37.349698793966205 6.999999999999976 A38 38 0 0 1 31.359972760794346 21.460477824182682 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23"
                      fill="#080808"
                    />
                  </g>
                </g>{" "}
                <g transform="translate(19 19) scale(0.6)">
                  {" "}
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="45;0"
                      keyTimes="0;1"
                      dur="0.34843205574912894s"
                      begin="-0.17421602787456447s"
                      repeatCount="indefinite"
                    />
                    <path
                      d="M-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 L37.3496987939662 -6.999999999999995 L47.3496987939662 -6.999999999999997 L47.349698793966205 6.999999999999973 L37.349698793966205 6.999999999999976 A38 38 0 0 1 31.359972760794346 21.460477824182682 L31.359972760794346 21.460477824182682 L38.431040572659825 28.531545636048154 L28.531545636048183 38.4310405726598 L21.460477824182703 31.35997276079433 A38 38 0 0 1 6.9999999999999964 37.3496987939662 L6.9999999999999964 37.3496987939662 L6.999999999999995 47.3496987939662 L-7.000000000000009 47.3496987939662 L-7.000000000000007 37.3496987939662 A38 38 0 0 1 -21.46047782418263 31.359972760794385 L-21.46047782418263 31.359972760794385 L-28.531545636048094 38.43104057265987 L-38.431040572659796 28.531545636048186 L-31.359972760794328 21.460477824182703 A38 38 0 0 1 -37.34969879396619 7.000000000000032 L-37.34969879396619 7.000000000000032 L-47.34969879396619 7.0000000000000355 L-47.3496987939662 -7.000000000000002 L-37.3496987939662 -7.000000000000005 A38 38 0 0 1 -31.359972760794346 -21.460477824182682 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23"
                      fill="#3cb0a2"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </center>
        </>
        }
      </div>
    </div>

    <Footer />
  </>

}

export default CustomerHome;
