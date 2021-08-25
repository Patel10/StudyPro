import kidSearchingImg from '../../images/kidsearching.jpg';
export default function searchBy() {
    return `
    <div class="searchByContainer">   
    <h1>Hey Kids Find Your Cards Quickly and Easily!</h1>
    </div>
    <h2>Click on the Button Below</h2>
    
    <button class="searchByStudentName">ENTER A NAME</button>
    <div class="form"></div>
    <div class="searchImg">
 <img class="searchImgKids" src="${kidSearchingImg}" style="width:40%">
     
 </div>

</div>
    
            `;

}


/* <button class="searchByFlashCardTitle">Flash Card Title</button>
    <button class="searchByGrade">Grade</button> */