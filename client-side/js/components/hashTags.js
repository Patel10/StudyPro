export default function HashTags(hashTags) {
    return `
   
       <ul class="tag-list">
    
    ${hashTags.map((hashTag) => {
        return `
        <li class="tag-list__id">${hashTag.id}</li>
        <li class="tag-list__title">${hashTag.title}</li>
        <li class="tag-list__studentName">${hashTag.studentName}</li>
             
        `;
    })
    .join('')}
  </ul>
      `;
}