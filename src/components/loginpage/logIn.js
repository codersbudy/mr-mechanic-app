import { Link } from "react-router-dom";

function LogIn(){

    return <>

     <link rel="stylesheet" href="logIn.css" />
     <meta charSet="utf-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <link
       href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
       rel="stylesheet"
     />
       <div
         className="modal-dialog modal-lg modal-content rounded-0"
         style={{ borderRadius: "100%" }}
       >
         <div className="row">
           <div className="col-md-4 col-sm-12 " id="firstside">
             <div style={{ marginTop: "2vw" }}>
               <div className="container-fluid" id="h2">
                 Login/Signup
               </div>
             </div>
             <div style={{ marginTop: 200 }}>
               <img
                 src="./Image/LoginImage.svg"
                 className="img-fluid"
                 alt="Responsive image"
               />
             </div>
           </div>
           <div className="col-md-8 col-sm-12" style={{ paddingRight: 25 }}>
             <div className="close">
               <button
                 type="button"
                 id="closebutoon"
                 className="btn-close"
                 data-bs-dismiss="modal"
                 aria-label="Close"
               />
             </div>
             <div className="form-group" style={{ marginTop: "2vw" }}>
               <div style={{ marginLeft: "1.5vw" }}>
                 <label className="form-label">Enter your mobile number</label>
                 <div style={{ fontSize: 16, marginTop: 15 }}>
                   {/* <span class="form-text">+91</span> */}
                   <input
                     type="text"
                     required=""
                     onkeyup="validation(value)"
                     id="input"
                     placeholder={+91}
                     minLength={10}
                     maxLength={10}
                   />
                   <div style={{ height: "1vw" }}>
                     <small id="invalid" style={{ color: "red" }} />
                   </div>
                   {/* <input aria-invalid="false" autocomplete="off" id="mobile-no" placeholder="Enter your Mobile" type="tel" maxlength="10" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart mui-style-mnn31" value="">     </div> */}
                 </div>
                 <div style={{ fontSize: 16, marginTop: 20 }}>
                   <label className="form-label">Enter your password</label>
                 </div>
                 <div style={{ fontSize: 16, marginTop: 15 }}>
                   <input
                     type="password"
                     style={{ width: "99%" }}
                     id="input"
                     placeholder="Enter password"
                   />
                 </div>
                 <div style={{ fontSize: 16, marginTop: 15 }}>
                   <a href="" className="link">
                     {" "}
                     <Link to="forgetPass">forgot Password?</Link>
                   </a>
                 </div>
                 <div style={{ fontSize: 16, marginTop: "8vw" }}>
                   <span style={{ marginTop: "2vw" }}>
                     {" "}
                     <input
                       type="checkbox"
                       id="checkbox"
                       onclick="termcondition()"
                     />
                   </span>
                   <span id="checkboxcontaint">I agree to the</span>
                   <span>
                     <a href="" id="termcondition">
                       Term and condition
                     </a>
                   </span>
                 </div>
                 <div
                   style={{ fontSize: 16, marginTop: "3vw" }}
                   aria-disabled="true"
                 >
                
                 
                 <Link to="Homepage" className="btn" id="signinBtn" disabled="true">
                     CONTINUE
                   </Link>
                
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
   </>
    }
    export default LogIn;
   
   