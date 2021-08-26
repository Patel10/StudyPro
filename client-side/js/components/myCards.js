import kidsInClassImg from '../../images/kidsinclass.jpg';
export default function myCards(Cards) {
    return `
    <div class="searchByContainerNew">   
    <h1> Click On A Title To View Cards </h1>
        </div>
        <h2>Don't See Your Cards Here?</h2>
    <h2>Click The Search By Button!</h2>

    <div class="tag_list">
    
    ${Cards.map((myCard) => {
        return `
        
        <div>
        <input type="hidden" class="tag-list-id" value="${myCard.id}"></input>
        <p class="tag-list-title">${myCard.title}</p>
        </div>
       
                      
        `
    }).join("")}
    </div>
    <div class="myCardImg">
    <img class="myCardKids" src="${kidsInClassImg}" style="width:40%">
        
    </div>
     
    
   
    `;



}