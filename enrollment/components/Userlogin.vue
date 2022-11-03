<template>
  <div class="container py-5 h-100">
  <div class="row d-flex justify-content-center align-items-center h-100">
   <div class="col-12 col-md-8 col-lg-6 col-xl-5">
     <div class="card" style="border-radius: 1rem;">
       <div class="card-body p-5 text-center">

         <div class="mb-md-5 mt-md-4 pb-5">

           <h2 class="fw-bold mb-5 ">LOG IN</h2>
           

           <div class="form-outline form-white mb-4">
             <input id="typeEmail" placeholder="Enter email address" class="form-control form-control-lg" />
      
           </div>

           <div class="form-outline form-white mb-4">
             <input id="typePassword" placeholder="Enter password" class="form-control form-control-lg" />
            
           </div>

           <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>


           <NuxtLink class="btn btn-success w-100" to="/Home">Log in</NuxtLink>
        
          
         </div>

         <div>
           <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
           </p>
         </div>

       </div>
     </div>
   </div>
 </div>
</div>
 
</template>



<style>
body {
background-color: white;
}

.btn{
border: 2px solid #574646;
color: white;
background-color: #6d5252;
}

.card{
background-color: #313131;
color: white;
}
</style>