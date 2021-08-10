export default function HashTags(hashTags){
    return `
    
    <ul class="tag_list">
    
    ${hashTags.map((hashTags) => {
        return `
        <li class="tag-list-id">${hashTag.id}</li>
        // do same for name and subject or something similar 
        
        `
    })}
    
    
    
    
    
    
    </ul>
    
    
    `
}