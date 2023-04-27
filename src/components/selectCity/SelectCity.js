function SelectCity(){
   return <>
   <div
     className="modal fade"
     id="exampleModalToggle"
     aria-hidden="true"
     aria-labelledby="exampleModalToggleLabel"
     tabIndex={-1}
   >
     <div className="modal-dialog modal-fullscreen-xxl-down modal-size">
       <div className="modal-content">
         <div className="modal-header" style={{height: "60px"}}>
           <h5 className="modal-title" id="exampleModalToggleLabel">
           <img src="./images/logo.png" style={{height: "50px"}} alt="images" />
           </h5>
           <button
             type="button"
             className="btn-close"
             data-bs-dismiss="modal"
             aria-label="Close"
           />
         </div>
         <div className="modal-body">
           <div className="row">
             <div className="col-12 text-center">
               <h3>Choose your location</h3>
               <div className="row">
                 <div className="col-3" />
                 <div className="col-6 mt-3">
                   {" "}
                   <div className="input-group rounded">
                     <input
                       type="search"
                       className="form-control rounded"
                       placeholder="Search"
                       aria-label="Search"
                       aria-describedby="search-addon"
                     />
                     <span
                       className="input-group-text border-0 bg-c"
                       id="search-addon"
                     >
                       <i className="fa fa-search" aria-hidden="true" />
                     </span>
                   </div>
                 </div>
                 <div className="col-3" />
               </div>
             </div>
           </div>
           <div className="row m-5 ">
             <h4>Populer cities</h4>
             <div className="row mt-5">
               <div className="col 1 text-center" />
               <div className="col-1">
                 <img src="./images/img3.jpg" alt="" />
                 <p>Bangalore</p>
               </div>
               <div className="col 1 text-center">
                 <img src="./images/img1.jpg" alt="" />
                 <p>chennai</p>
               </div>
               <div className="col 1 text-center">
                 <img src="./images/img2.jpg" alt="" />
                 <p>Delhi</p>
               </div>
               <div className="col 1 text-center">
                 <img src="./images/img4.jpg" alt="" />
                 <p>Indore</p>
               </div>
               <div className="col 1 text-center">
                 <img src="./images/img5.jpg" alt="" />
                 <p>Hyderabad</p>
               </div>
               <div className="col 1 text-center">
                 <img src="./images/img6.jpg" alt="" />
                 <p>Kolkata</p>
               </div>
               <div className="col 1 text-center">
                 <img src="./images/img7.jpg" alt="" />
                 <p>Mumbai</p>
               </div>
               <div className="col 1 text-center">
                 <img src="./images/img8.jpg" alt="" />
                 <p>Noida</p>
               </div>
               <div className="col 1 text-center">
                 <img src="./images/img9.jpg" alt="" />
                 <p>Pune</p>
               </div>
               <div className="col 1 text-center">
                 <img src="./images/img10.jpg" alt="" />
                 <p>Agra</p>
               </div>
               <div className="col 1" />
             </div>
           </div>
           <div className="text-center">
             <h5>View all cities</h5>
           </div>
         </div>
       </div>
     </div>
   </div>
   {/* <a
     className="btn btn-primary"
     data-bs-toggle="modal"
     href="#exampleModalToggle"
     role="button"
   >
     Open first modal
   </a> */}
 </>
 
}

export default SelectCity;