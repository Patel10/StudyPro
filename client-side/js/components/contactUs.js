import bookstack from "../../images/books-stack.jpg";
import facebook from "../../images/fb-logo.jpg";
import address from "../../images/address.png";
import emailpng from "../../images/email.png";
import phonepng from "../../images/phone.jpg";

export default function contactUs(){
    return `
    <div class="top">
    <div class="top1">
        <p class="pClass">Contact Us</p>
        <div class="home">
           
        </div>
    </div>
</div>

<div class="head">
    <div class="box">
        <img src="${bookstack}" alt="contactdesign" style="width:100%">
    </div>
    <div class="box">

        <div class="box1">
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
                    <img src="${address}" alt="phonelogo" class="logo"> 614-000-1010</a>
            </div>

            <div class="logo4">
                <a href="https://www.facebook.com/">
                    <img src="${facebook}" alt="facebooklogo" class="logo">find us on facebook</a>


            </div>
        </div>
    </div>
</div>


    `}