import orpaImg from "../../images/Orpa.png";

export default function aboutUs(){
    return `
    <div class="contain-wrapper">
            <div class="portfolio-items-wrapper">
                <div class="portfolio-item-wrapper">
                    <div class="portfolio-img-background" style="background-image:url("images/portfolio1.jpg"")"></div>
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
                    <div class="portfolio-img-background" style="background-image:url(images/portfolio2.jpg)"></div>
                    <div class="img-text-wrapper">
                        <div class="logo-wrapper">
                            <img src="images/Amina.png">
                        </div>
                        <div class="subtitle">
                            Amina is a back end coder, love coding and design.
                        </div>
                    </div>
                </div>

              
                <div class="portfolio-item-wrapper">
                    <div class="portfolio-img-background" style="background-image:url(images/portfolio4.jpg)"></div>
                    <div class="img-text-wrapper">
                        <div class="logo-wrapper">
                            <img src="images/Parth.png">
                        </div>
                        <div class="subtitle">
                            Parth is a front end coder, love coding and design. 
                        </div>
                    </div>
                </div>

                <div class="portfolio-item-wrapper">
                    <div class="portfolio-img-background" style="background-image:url("images/portfolio5.jpg")"></div>
                    <div class="img-text-wrapper">
                        <div class="logo-wrapper">
                            <img src="images/Rochelle.png">
                        </div>
                        <div class="subtitle">
                            Rochelle is a front end coder, love coding and design.
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    `
}
