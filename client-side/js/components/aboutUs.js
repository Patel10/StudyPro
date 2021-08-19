import orpaImg from "../../images/Orpa.png";
import orpaImg1 from "../../images/orpa.jpg";
import aminajpg from "../../images/amina.jpg";
import aminapng from "../../images/amina.png";
import rochellepng from "../../images/rochelle.png";
import rochellejpg from "../../images/rochelle.jpg";
import parthpng from "../../images/parth.png";
import parthjpg from "../../images/parth.jpg";



export default function aboutUs() {
    return `
    <div class="top">
    <div class="content">
            <h2 class="contactUs">About us </h2>
            
        </div>
</div>
    <div class="nav-link-wrapper">
            <div class="nav-link-wrapper1">
                    <h2 class="visionMission">VISION</h2>
                    <p> Our vision is to empower students to acquire, demonstrate, articulate and value knowledge and skills that will support them, as life-long learners.</p>

                </div>
                <div class="nav-link-wrapper2">
                    <h2 class="visionMission" >MISSION</h2>
                    <p> To bring inspiration and innovation to every student.</p>

                </div>
    <div class="nav-link-wrapper3">
        <h2 class="visionMission"> OUR DEVELOPERS</h2>
     </div>
     </div>

    <div class="contain-wrapper">
            <div class="portfolio-items-wrapper">
                <div class="portfolio-item-wrapper">
                    <div class="portfolio-img-background" style="background-image:url(${orpaImg1})"></div>
                    <div class="img-text-wrapper">
                        <div class="logo-wrapper">
                            <img src="${orpaImg}">
                        </div>
                        <div class="subtitle">
                        Passionate Software Developer who enjoys working on both front end and back end. Adept at
                        contributing to a collaborative team environment and finding solutions.
                        </div>
                    </div>
                </div>

                <div class="portfolio-item-wrapper">
                    <div class="portfolio-img-background" style="background-image:url(${aminajpg})"></div>
                    <div class="img-text-wrapper">
                        <div class="logo-wrapper">
                            <img src="${aminapng}">
                        </div>
                        <div class="subtitle">
                        Creative Software Developer , with strong skills in programming and passionate about problem solving.Eager to use my skills to support IT field, in delivering programming excellence and clean code.
                        </div>
                    </div>
                </div>

              
                <div class="portfolio-item-wrapper">
                    <div class="portfolio-img-background" style="background-image:url(${parthjpg})"></div>
                    <div class="img-text-wrapper">
                        <div class="logo-wrapper">
                            <img src="${parthpng}">
                        </div>
                        <div class="subtitle">
                        A Software Developer looking to start a new career in IT. A dedicated team player with strong analytical skills focused on problem solving 
                        </div>
                    </div>
                </div>

                <div class="portfolio-item-wrapper">
                    <div class="portfolio-img-background" style="background-image:url(${rochellejpg})"></div>
                    <div class="img-text-wrapper">
                        <div class="logo-wrapper">
                            <img src="${rochellepng}">
                        </div>
                        <div class="subtitle">
                        A Software Developer dedicated to working with backend technology. Extremely detailed orientated with strong analytical skills and experienced in creating management databases and maintaining billing systems.
                        </div>
                    </div>
                </div>
    
            </div>
        </div>

    `
}