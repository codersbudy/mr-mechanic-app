import { useEffect, useState } from 'react';
import './adminHome.css'
import axios from 'axios';
import api from '../../../WebApi/api';
import { Link, useNavigate } from 'react-router-dom';
function AdminHome(){
   const [shopList,setShopList] = useState([]);
   var navigate = useNavigate();
   useEffect (()=>{
      let response = axios.get(api.ALL_SHOP);
      response.then((result)=>{
               console.log(result);
               setShopList(result.data.result);
      }).catch((err)=>{
               console.log(err)
      });
 },[]);
   
 const description = (index)=>{
//    alert(shop.shopName)
   navigate("/customerViewShop",{state:{
               index:index
   }});
 }
  return <>
<>
  {/*Main Navigation*/}
  <header>
    {/* Sidebar */}
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse bg-white"
    >
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3" />
            <span>Main dashboard</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple "
          >
            <i className="fas fa-chart-area fa-fw me-3" />
            <span>Webiste traffic</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-lock fa-fw me-3" />
            <span>Password</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-chart-line fa-fw me-3" />
            <span>Analytics</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-chart-pie fa-fw me-3" />
            <span>SEO</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-chart-bar fa-fw me-3" />
            <span>Orders</span>
          </a>
          
        </div>
      </div>
    </nav>
    {/* Sidebar */}

  </header>
  {/*Main Navigation*/}
  {/*Main layout*/}
  <div className='row'>
     <div className='col-2'></div>
     <div className='col-10'>


  <div className='main-dashboard ' >
  <div className="container mt-5 px-2">
 
  <div className="table-responsive">
    <table className="table table-responsive table-borderless">
      <thead>
        <tr className="bg-light">
         
          <th className="text-center" scope="col" width="5%">
            S.No.
          </th>
          <th className="text-center" scope="col" width="10%">
            Image
          </th>
          <th className="text-center" scope="col" width="20%">
          Shop Name
            
          </th>
          <th className="text-center" scope="col" width="25%">
          Status
          </th>
          <th className="text-start" scope="col" width="15%">
            Category
          </th>
          <th scope="col" className="text-center" width="25%">
            <span>Rating</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {shopList.map((shop,index)=><tr>
        
        <td className="text-center">{index+1}</td>
        <td className="text-center">
        <img src={shop.photo} width={50} height={50} style={{borderRadius:"50%"}} />
       </td>
        <td className="text-center">
          <Link onClick={()=>description(index)}>{shop.shopName}</Link>
        </td>
        <td className='text-center'>
        {shop.shopStatus}
        </td>
        <td className="text-start">{shop.categories}</td>
        <td className="text-center">
          <span className="fw-bolder">{shop.rating}</span>
        </td>
      </tr>)}
        

      </tbody>
    </table>
  </div>
</div>

  </div>
 </div>
 </div>

  {/*Main layout*/}
</>


  </>
}
export default AdminHome;