export default function myCards(Cards){
    return `

    <ul class="tag_list">
    
    ${Cards.map((myCard) => {
        return `
        <p class="tag-list-id">${myCard.id}</p>
        <p class="tag-list-id">${myCard.title}</p>
        <p class="tag-list-id">${myCard.description}</p>
        <p class="tag-list-id">${myCard.studentName}</p>


        
        
        `
    })}
    
    
    
    
    
    
    </ul>

    `}