import bookstack from "../../images/books-stack.jpg";
import facebook from "../../images/fb-logo.jpg";
import address from "../../images/address.png";
import emailpng from "../../images/email.png";
import phonepng from "../../images/phone.jpg";

export default function contactUs() {
    return `
    <div class="top">
    <div class="content">
            <h2 class="contactUs">Contact Us </h2>
            <p> If you have any questions or queries don't hesitate to call us and we will happy to help. Feel free to contact us by email, phone or connect with us on social media.
            Also, you can find our product at Barnes and Noble in your area. </p>
        </div>
</div>

<div class="head">
    <div class="box">

    
    <div class="logo1">
    <a href="https://goo.gl/maps/TJSgjuizcgGXRgbv9">
        <img src="${address}" alt="addresslogo" class="logo"> Barnes & Noble</a>
</div>
<div class="logo2">
    <a href="mailto:someone@yoursite.com">
        <img src="${emailpng}" alt="emaillogo" class="logo">contactus@studypro.com</a>
</div>
<div class="logo3">
    <a href="tel:1110001010">
        <img src="${phonepng}" alt="phonelogo" class="logo"> 614-000-1010</a>
</div>
<div class="logo4">
    <a href="https://www.facebook.com/">
        <img src="${facebook}" alt="facebooklogo" class="logo">find us on facebook</a>


</div>
    </div>
    <div class="box">

              <div class="contactForm">
        <form> 
            <h2>Send Message </h2>
            <div class="inputBox">
                <input type="text" name=" " required="required">
                <span> Full Name </span>
            </div>
            <div class="inputBox">
                <input type="text" name=" " required="required">
                <span> Email </span>
            </div>
            <div class="inputBox">
                <textarea required="required"></textarea>
                <span> Type your message... </span>
            </div>
            <div class="inputBox">
                <input type="submit" name="" value="Send">
            </div>
            
        </form>
    </div>
    </div>
</div>


    `
}