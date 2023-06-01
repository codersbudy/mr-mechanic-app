import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './shopkeeper.css';
import axios from 'axios';
import api from "../../../../WebApi/api";


function ShopkeeperList() {
  const [shopkeeperList, setShopkeeperList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  var navigate = useNavigate();

  useEffect(() => {
    let response = axios.get(api.ALL_SHOPKEEPER_LIST);
    response.then((result) => {

      console.log(result);
      setShopkeeperList(result.data.result);
      setIsLoading(false);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  console.log(shopkeeperList)
  //   const description = (index) => {
  //                alert(index)
  //                navigate("/customerViewShop", {
  //                  state: {
  //                    index: index
  //                  }
  //                });
  //              }
  return <>
    <div className='main-dashboard ' >
      <div className="row">
        {!isLoading && shopkeeperList.map((shopkeeper, index) => <div className="col-3 bg-primary">
          <div className="profilecard bg-warning ">
            <div className="card-border-top bg-success ">
              <div className="img" style={{ marginTop: "5vh", backgroundColor: "red" }}>
                <img
                  src={shopkeeper.photo}
                  alt="image"
                />
              </div></div>

            <div className="mt-3">
              <h3 className="style1">{shopkeeper.shopkeeperName}</h3>
              <h3 className="style2"> {shopkeeper.email}</h3>
              <h3 className="style2"><b>+91 </b>{shopkeeper.contact}</h3>
            </div>
            <div className="mt-4">
              <button> Shops </button>
            </div>
          </div>
        </div>
        )}
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
  </>
}
export default ShopkeeperList;