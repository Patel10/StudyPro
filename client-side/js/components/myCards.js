export default function myCards(Cards){
    return `

    <ul class="tag_list">
    
    ${Cards.map((myCards) => {
        return `
        <li class="tag-list-id">${myCard.id}</li>
        <li class="tag-list-id">${myCard.title}</li>
        <li class="tag-list-id">${myCard.description}</li>
        <li class="tag-list-id">${myCard.studentName}</li>


        
        
        `
    })}
    
    
    
    
    
    
    </ul>

    `}