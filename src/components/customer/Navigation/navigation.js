import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import './navigation.css'
import axios from "axios";
import api from "../../../WebApi/ApiEndPoint";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { setCustomer } from "../../../redux-config/customerSlice";

function CustomerNavigation() {
    const dispatch=useDispatch();
    var photochange=true;
    var image="http://localhost:3001/images/"
    const { currentCustomer } = useSelector((state) => state.customer);
    const [customerName, setCustomerName] = useState(currentCustomer.customerName);
    const [email, setemail] = useState(currentCustomer.email);
    const [photo,setPhoto]=useState([]);
    const [imagesrc,setImagesrc]=useState(image+currentCustomer.photo);
    const [imageShow,setImageShow]=useState(image+currentCustomer.photo);
    const navigete = useNavigate();
    getLocation();
    function getLocation() {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(showPosition);
    }
    function showPosition(position) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://api.opencagedata.com/geocode/v1/json?q=" + position.coords.latitude + "+" + position.coords.longitude + "&key=87f70e732bbd44d984f351fc57d3e4cc", true);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                var citySpan = document.getElementById("city");
                let data = JSON.parse(xhttp.responseText);
                citySpan.innerHTML = data.results[0].components.city;
            }
        }
    }
    var profileshow = ()=>{
        document.getElementById("save").disabled="true"
        let viewProfile = document.getElementById("viewProfile")
        let email = document.getElementById("email")
        viewProfile.style.display = "block";
        email.style.color = currentCustomer.email? "#3CB0A2" :"red";
        
    }

    var nameEdit = () => {
        let name = document.getElementById("name")
        name.readOnly = false;
        name.style.border = "1px solid #3CB0A2"
        name.style.color = "#3CB0A2"
        name.focus();
        saveEnable();
    }
    var nameOnblur = () => {
        let name = document.getElementById("name")
        name.readOnly = true;
        name.style.border = "none";
    }
    var photoEdit = () => {
        let name = document.getElementById("profileImg")
        name.readOnly = false;
        name.style.border = "1px solid #3CB0A2"
        name.style.color = "#3CB0A2"
        name.focus();
    }
    var emailEdit = () => {
        let email = document.getElementById("email")
        email.readOnly = false;
        email.style.border = "1px solid #3CB0A2"
        email.focus();
        saveEnable();
    }
    var emailOnblur = () => {
        let email = document.getElementById("email")
        email.readOnly = true;
        email.style.border = "none";
    }
    var saveEnable = () => {
        let saveEle = document.getElementById("save");
        saveEle.disabled = false;
    }
    var closeBtnOnclick = () => {
          setImagesrc(imageShow);

        let viewProfile = document.getElementById("viewProfile");
        document.getElementById("save").disabled="true";
        viewProfile.style.display = "none";
    }

  
    const profilePic=(e)=>{
        var preview = document.getElementById('profileImg');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
          setImagesrc(reader.result);
        }
  
        if (file) 
          reader.readAsDataURL(file);
            setPhoto(e.target.files[0]);

        photochange=false;
        saveEnable();
        
    }
    function saveData(){
        setImageShow(imagesrc)
        let contact=currentCustomer.contact;
        const formdata=new FormData();
        formdata.append('photo',photo);
        console.log(photo);
        formdata.set('customerName',customerName);  
        formdata.set('email',email);
        formdata.set('contact',contact);   
        let response=axios.post(api.CUSTOMER_UPDATE_PROFILE,formdata);
    // const [customerName, setCustomerName] = useState(currentCustomer.customerName);
        let customer={...currentCustomer,customerName,email,photo};
        // window.alert(response.data.result);
        dispatch(setCustomer(customer));
        toast.success("Profile successfully update..");
        navigete("/customerHome");
    }


    return <>
    <ToastContainer/>
        <div className="container-fluid m-0 p-0">
            {/* ----------------------------------navBar start-------------------------------------------------------- */}
            <div className="container-fluid border-bottom">
                <nav className="navbar navbar-expand-lg nav ">
                    <div className="container-fluid a">
                        <img className="navbar-brand logo" src="./images/logo.png" />
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse navRight"
                            id="navbarNavDropdown"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item ">
                                    <Link className="nav-link navOption" aria-current="page" to="/customerHome">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link navOption" to="/customerBookingHistory">
                                        History
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link navOption dropdown-toggle" href="#">
                                        {" "}
                                        <i className="fa fa-map-marker fs-1" aria-hidden="true" />{" "}
                                        &nbsp;<span id="city">Select City</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link navOption user " id="userProfile" onClick={profileshow}>
                                        {" "}
                                        <i className="fa fa-user fs-5 " aria-hidden="true" />
                                        &nbsp;&nbsp;<span className="fw-bold ">{currentCustomer.customerName}</span>
                                    </a>
                                </li>
                                {/* _______view_profile________ */}
                                {/* <div className="viewProfile" id="viewProfile">
                                    
                                        <div className="closeBtn" id="closeBtn" onClick={closeButton}>
                                            <i style={{ fontSize: 17 }} className="fa">
                                                
                                            </i>
                                        </div>
                                        <div className="text-center">
                                            <h4>Profile</h4>
                                            <div className="file">
                                                <img
                                                    id="profileImg"
                                                    src="./images/customerImg.png"
                                                    alt="profile photo"
                                                    className="profileImg"
                                                />
                                                
                                                <input
                                                    id="file"
                                                   

                                                    onChange={previewFile}
                                                    type="file"
                                                    name="photo"
                                                    className="userphoto"
                                                    accept="image/png, image/gif, image/jpeg"
                                                />
                                            </div>
                                            <div className="nameDiv">
                                                <span>Name : </span> 
                                                <input
                                                    id="name"
                                                    onChange={(event) => setCustomerName(event.target.value)}
                                                    type="text"
                                                    name="username"
                                                    className="username"
                                                    readOnly="true"
                                                    defaultValue={currentCustomer.customerName}
                                                />
                                                <button
                                                    className="btn edit"
                                                    onclick="saveEnable()"
                                                    id="nameEdit"
                                                    onClick={nameEdit}
                                                >
                                                    <i className="fa fa-pencil fs-5" aria-hidden="true" />
                                                </button>
                                            </div>
                                            <div className="">
                                                <span>Email :</span>
                                                <input
                                                    id="email"
                                                   
                                                    type="text"
                                                    name="email"
                                                    className="useremail"
                                                    readOnly=""
                                                    defaultValue={currentCustomer.customerEmail}
                                                />
                                                <button className="btn edit" id="emailEdit" onClick={emailEdit}>
                                                    <i className="fa fa-pencil fs-5" aria-hidden="true" />
                                                </button>
                                            </div>
                                            <div className="">
                                                <span>Contact :</span>
                                                <input
                                                    type="text"
                                                    name="contact"
                                                    className="usercontact "
                                                    readOnly=""
                                                    defaultValue={currentCustomer.customerContact}
                                                />
                                                <button className=" btn edit">
                                                    <i
                                                        className="fa fa-pencil fs-5 contectBtn"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="  px-3 mt-3 text-center">
                                            <button className="btn btn-danger" id="signout">
                                                Sign Out
                                            </button>
                                            <button className="btn btn-success" id="save" disabled onClick={saveData} >
                                                Save
                                            </button>
                                        </div>
                                </div> */}

                                
                                {/* _______view_profile________ */}
                                {/* <form onSubmit={saveData}> */}
                                <div className="viewProfile"  id="viewProfile">
                                    <div className="closeBtn" id="closeBtn" onClick={closeBtnOnclick}><i style={{ fontSize: '17px' }} className="fa"></i></div>
                                    <div className="text-center">
                                        <h4>Profile</h4>
                                        <div className="file">
                                            {/* onchange="previewFile()" */}
                                            {/* src={photochange?image+currentCustomer.photo:photo} */}
                                            <img id="profileImg" src={imagesrc}  onClick={photoEdit} alt="profile photo" className="profileImg" />
                                            <input id="file"  onChange={profilePic}   type="file" name="photo" className="userphoto" accept="image/png, image/gif, image/jpeg" />
                                        </div>

                                        <div className="nameDiv">
                                            <span className="pe-2">Name :</span>
                                            <input id="name" type="text" name="username" className="username"  onChange={(event) => setCustomerName(event.target.value)} onBlur={nameOnblur}  readOnly defaultValue={currentCustomer.customerName} />
                                            <button className="btn edit" onClick={nameEdit} id="nameEdit"><i className="fa fa-pencil fs-5" aria-hidden="true" /></button>
                                        </div>
                                        <div >
                                            <span className="pe-2">Email :</span>
                                            <input id="email" type="text" name="email" className="useremail"  onChange={(event) => setemail(event.target.value)} onBlur={emailOnblur} readOnly defaultValue= {currentCustomer.email?currentCustomer.email:"Update Your Email"}   />
                                            <button className="btn edit" onClick={emailEdit} id="emailEdit"><i className="fa fa-pencil fs-5" aria-hidden="true" /></button>
                                        </div>
                                        <div >
                                            <span className="pe-2">Contact :</span>
                                            <input type="text" name="contact" className="usercontact " readOnly Value={currentCustomer.contact} />
                                            <button className=" btn edit"><i className="fa fa-pencil fs-5 contectBtn" aria-hidden="true" /></button>
                                        </div>
                                    </div>
                                    <div className="  px-3 mt-3 text-center">
                                        <Link to="/" className="btn btn-danger" id="signout">Sign Out</Link>
                                        <button className="btn btn-success" type="submit" id="save" onClick={saveData}>Save</button>
                                    </div>
                                </div>
                                {/* </form> */}
                                {/* _______view_profile_end________ */}


                                {/* _______view_profile_end________ */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    </>
}

export default CustomerNavigation;









// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// function CustomerNavigation() {
//     const {currentLocation}=useSelector(state=>state.customer);
//     //  document.getElementById("city").innerHTML=currentLocation;
//     return <>
//         <div className="container-fluid border-bottom">
//             <nav className="navbar navbar-expand-lg nav ">
//                 <div className="container-fluid a">
//                     <img className="navbar-brand logo" src="./images/logo.png"></img>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
//                         aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse navRight" id="navbarNavDropdown">
//                         <ul className="navbar-nav">
//                             <li className="nav-item ">
//                                 <Link className="nav-link navOption" aria-current="page" to="/customerHome">Home</Link>
//                             </li>
//                             <li class="nav-item ">
//                                 <a class="nav-link navOption dropdown-toggle" href="#"> <i class="fa fa-map-marker fs-1"
//                                     aria-hidden="true"></i> &nbsp;<span id="city">Select City</span></a>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link navOption" to="/cusotmerProfile">My Profile</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/customerBookingHistory" className="nav-link navOption">View History</Link>
//                             </li>

//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>

//     </>
// }

// export default CustomerNavigation;