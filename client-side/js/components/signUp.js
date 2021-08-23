export default function signUp() {
    return `
       <div class="container">
    <input type="checkbox" id="flip">
    <div class="cover">
      <div class="front">   
      </div>
      <div class="back">
  
             </div>
    </div>
    <div class="forms">
        < class="form-content">
          <div class="login-form">
            <div class="title">Login</div>
          <div>
            <div class="input-boxes">

              <div class="input-box">
                <i class="fas fa-user"></i>
                <input type="text" id="loginName" placeholder="Enter your username" required>
              </div>
                            
              <div class="button input-box">
                <button  id="loginSubmit" >Submit </button>
              </div>

              <div class="text sign-up-text">Don't have an account? <label for="flip">Sigup now</label></div>
            </div>

        </div>
      </div>

        
    
    </div>
    </div>
  </div>


    `
}