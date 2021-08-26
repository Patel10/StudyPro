import puzzle2 from "../../images/puzzle.png";
import puzzle from "../../images/contribution.png";
import lovetolearn from "../../images/lovetolearn.jpg";
import booksapple from "../../images/booksapple.jpg";
import kidsjumping from "../../images/kidsjumping.jpg";


export default function home() {
    return `
    <div>
    <h1> WELCOME TO STUDYPRO! </h1>
   
    <h2>Rated the best!</h2>

<h3> Our learning platform is developed by the best developers with backgrounds in education and management. StudyPRO provides an engaging learning experience in varies topics.
</h3>
</div>

<div class="testing">
<h2 class="testing1">Become your most unstoppable self</h2>
<div class=testing2">
<h3>Master any subject, one success at a time.</h3>


<div id="slideshow">
 <img class="mySlides" src="${puzzle2}" style="width:50%">
 <img class="mySlides" src="${puzzle}" style="width:50%">
 <img class="mySlides" src="${lovetolearn}" style="width:50%">
 <img class="mySlides" src="${booksapple}" style="width:50%">
 <img class="mySlides" src="${kidsjumping}" style="width:50%">
</div>

    `;
}