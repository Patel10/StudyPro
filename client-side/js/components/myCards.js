export default function myCards(Cards) {
    return `

    <div class="tag_list">
    
    ${Cards.map((myCard) => {
        return `
        <div>
        <input type="hidden" class="tag-list-id" value="${myCard.id}"></input>
        <p class="tag-list-title">${myCard.title}</p>
        </div>
       
       


        
        
<<<<<<< HEAD
        `;
    })}
=======
        `
    }).join("")}
>>>>>>> main
    
    
    
    
    
    
    </div>

    `
}