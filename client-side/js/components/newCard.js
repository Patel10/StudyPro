export default function newCard() {
    return `
   


    <div class="newCardBox">
        <div class="newCardForm">
            <div> 
            <h2>Make a new card </h2>

                <div class="inputBox">
                <input type="text" id="newTitle"name=" " required="required">
                <span> Title: </span>
                </div>

                <div class="inputBox">
                <input type="text" id="newDescription"name=" " required="required">
                <span> Description: </span>
                </div>

                <div class="inputBox">
                <input type="text" id="newCardInfo" name=" " required="required">
                <span> Card info: </span>
                </div>

                <div class="inputBox">
                <input url="text" id="newLink" name=" " required="required">
                <span> Image link/website: </span>
                </div>
            
            <div class="inputBox">
                <button id="newSubmit" name="" >Submit</button>
            </div>
            
        </div>
    </div>
    </div>



    `
}