import flashCard1 from "../../images/flashCard1.jpg";
export default function flashCard(card){
    return `
    <div class="contain-wrapper">
    <h1> ${card.title}</h1> 
    <h2> ${card.description}</h2> 
    <h2> ${card.studentName}</h2> 
    <h2> ${card.cardContents[0].info}</h2> 
    <div class="logo-wrapper">
                    <img src="${card.image}">
                </div>
                <div class="subtitle">
                Flash cards are an easy and interesting way for your childen recognize the world around them. Approved worldwide by child psychologists teachers and parents themselves flashcards are ideal for very young children and those up to 7 years of age.
                </div>       
    
        </div>
      
    `
}