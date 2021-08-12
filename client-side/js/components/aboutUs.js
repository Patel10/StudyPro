import orpaImg from "../../images/Orpa.png";
import orpaImg1 from "../../images/orpa.jpg";
import aminajpg from "../../images/amina.jpg";
import aminapng from "../../images/amina.png";
import rochellepng from "../../images/rochelle.png";
import rochellejpg from "../../images/rochelle.jpg";
import parthpng from "../../images/parth.png";
import parthjpg from "../../images/parth.jpg";



export default function aboutUs(){
    return `
    
    <div class="contain-wrapper">
            <div class="portfolio-items-wrapper">
                <div class="portfolio-item-wrapper">
                    <div class="portfolio-img-background" style="background-image:url(${orpaImg1})"></div>
                    <div class="img-text-wrapper">
                        <div class="logo-wrapper">
                            <img src="${orpaImg}">
                        </div>
                        <div class="subtitle">
                            Orpa is a front end coder, love coding and design.
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
                            Amina is a back end coder, love coding and design.
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
                        A software developer looking to start a new career in IT. A dedicated team player with strong analytical skills focused on problem solving 
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
                        A software developer dedicated to working with backend technology. Extremely detailed orientated with strong analytical skills and experienced in creating management databases and maintaining billing systems.
                        </div>
                    </div>
                </div>
    
            </div>
        </div>

    
   

    `
}