import bookstack from "../../images/books-stack.jpg";
import facebook from "../../images/fb-logo.jpg";
import address from "../../images/address.png";
import emailpng from "../../images/email.png";
import phonepng from "../../images/phone.jpg";

export default function signUp() {
    return `
   

<div class="head">
    <div class="box">
        <div class="contactForm">
            <form> 
            <h2>Log in </h2>
                <div class="inputBox">
                <input type="text" name=" " required="required">
                <span> Enter your name </span>
                </div>
                
            <div class="inputBox">
            <input type="submit" name="" value="Submit">
            </div>
                         </form>
    
    </div>
    </div>
    <div class="box">

              <div class="contactForm">
        <form> 
            <h2>Sign up </h2>
            <div class="inputBox">
                <input type="text" name=" " required="required">
                <span> Enter your name: </span>
            </div>
            <div class="inputBox">
                <input type="text" name=" " required="required">
                <span> Enter your grade: </span>
            </div>
            
            <div class="inputBox">
                <input type="submit" name="" value="Submit">
            </div>
            
        </form>
    </div>
    </div>
</div>


    `
}