function Signup(){
   return<>
           <div class="container-fluid border-bottom">
           <nav class="navbar navbar-expand-lg nav ">
           <div class="container-fluid a">
             <img  class="navbar-brand logo" src="./Image/logo.png"></img>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse navRight" id="navbarNavDropdown">
               <ul class="navbar-nav">
                 <li class="nav-item ">
                   <a class="nav-link navOption" aria-current="page" href="#">Home</a>
                 </li>
                 <li class="nav-item">
                   <a class="nav-link navOption" href="#">Features </a>
                 </li>
                 <li class="nav-item">
                   <a class="nav-link navOption" href="#">About</a>
                 </li>
                 <li class="nav-item ">
                   <a class="nav-link navOption dropdown-toggle" href="#"> <i class="fa fa-map-marker" aria-hidden="true"></i> <span id="city">Select City</span></a>
                 </li>
       
                  <li class="nav-item ">
                   <a class="nav-link navOption btn btn-info loginBtn " href="#"><span id="city">Login</span></a>
                 </li>

                  <li class="nav-item dropdown ">
                   <a class="nav-link dropdown-toggle navOption  text-light btn btn-info loginBtn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Login
                   </a>
                   <ul class="dropdown-menu ">
                     <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Customer</a></li>
                     <li><a class="dropdown-item" href="#">Shopkeeper</a></li>
                     <li><a class="dropdown-item" href="#">Mechanic</a></li>
                     <li><a class="dropdown-item" href="#">Admin</a></li>
                   </ul>
                 </li> 
                     <li class="nav-item dropdown ">
                   <a class="nav-link dropdown-toggle navOption text-light btn btn-info loginBtn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Sign-Up
                   </a>
                   <ul class="dropdown-menu ">
                     <li><a class="dropdown-item" href="#">Action</a></li>
                     <li><a class="dropdown-item" href="#">Another action</a></li>
                     <li><a class="dropdown-item" href="#">Something else here</a></li>
                   </ul>
                 </li> 
              </ul>    
             </div>
           </div>
         </nav>
    </div> 

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
   Launch demo modal
</button>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
   aria-labelledby="staticBackdropLabel" aria-hidden="true">
   <div class="modal-dialog modal-lg modal-content rounded-0" style="border-radius: 100%;">
       <div class="row" >
           <div class="col-md-4 col-sm-12 " id="firstside">
               <div style="margin-top: 2vw;">
                   <div class="container-fluid" id="h2">Login/Signup</div>
               </div>
               <div style="margin-top: 200px;">
                   <img src="./Image/LoginImage.svg" class="img-fluid" alt="Responsive image"/>
              </div>
           </div>
           <div class="col-md-8 col-sm-12" style="padding-right: 25px;">
               <div class="close">
                   <button type="button" id="closebutoon" class="btn-close" data-bs-dismiss="modal"
                       aria-label="Close"></button>
               </div>
               <div class="form-group" style="margin-top: 2vw;">
                   <div style="margin-left: 1.5vw;">
                       <label class="form-label">Enter your mobile number</label>
                       <div style="font-size: 16px; margin-top: 15px;">
                            <span class="form-text">+91</span> 
                          <input type="text" required onkeyup="validation(value)" id="input"
                                   placeholder="+91" minlength="10" maxlength="10"/>
                           <div style="height:1vw;">
                               <small id="invalid" style="color: red;"></small>
                           </div>
                            <input aria-invalid="false" autocomplete="off" id="mobile-no" placeholder="Enter your Mobile" type="tel" maxlength="10" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart mui-style-mnn31" value=""/>     </div>
                       </div>
                       <div style="font-size: 16px; margin-top: 20px;">
                           <label class="form-label">Enter your password</label>
                       </div>
                       <div style="font-size: 16px; margin-top: 15px;">
                           <input type="password" style="width:99%" id="input" placeholder="Enter password"/>
                       </div>
                       <div style="font-size: 16px; margin-top: 15px;">
                           <a href="" class="link"> <small>forgot Password?</small></a>
                       </div>
                       <div style="font-size: 16px; margin-top: 8vw;">
                           <span style="margin-top: 2vw;"> <input type="checkbox" id="checkbox"
                                   onclick="termcondition()"/></span>
                           <span id="checkboxcontaint">I agree to the</span>
                           <span><a href="" id="termcondition">Term and condition</a></span>
                       </div>
                       <div style="font-size: 16px; margin-top: 3vw;" aria-disabled="true">
                           <div class="flwidth relative mar-t4"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium flwidth mui-style-14qchf7" tabindex="0" type="button"><div class="MuiTypography-root MuiTypography-h3 mui-style-dbe8lu"><div class="relative">CONTINUE</div></div><span class="MuiTouchRipple-root mui-style-w0pj6f"></span></button></div> 
                           <button class="btn" id="signinBtn" disabled="true">CONTINUE</button>
                       </div>
                   </div>
               </div>
          </div>
      </div>
 </div>
     </>
}
export default Signup;