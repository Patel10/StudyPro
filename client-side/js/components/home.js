import puzzle2 from "../../images/puzzle.png";
import puzzle from "../../images/contribution.png";
export default function home()
{
    return `
    <div>
    <h1> WELCOME TO STUDYPRO! </h1>
   
    <p>Rated the best!</p>

<p> Our learning platform is developed by the best developers with backgrounds in education and management. StudyPRO provides an engaging learning experience in varies topics.
</p>
</div>

<div class="testing">
<h1 class="testing1">Become your most unstoppable self</h1>
<div class=testing2">
<p>Master any subject, one success at a time.</p>


<div id="slideshow">
 <img class="mySlides" src="${puzzle2}" style="width:50%">
 <img class="mySlides" src="${puzzle}" style="width:50%">
</div>

    `;
}