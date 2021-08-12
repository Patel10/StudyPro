import aboutUs from './components/aboutUs';
import Home from './components/Home';
import Header from './components/Header';
import HashTags from './components/hashTags';
// import searchBy from './components/searchBy';
import signUp from './components/signUp';
// import ContactUs from './components/ContactUs';
import crud from './crud/crud';
import flashCard from './components/flashCard';


buildPage();


function buildPage() {
    landHome();
    header();
    hashtags();
    searchBy();
    signup();
    about();
    contact();
    FlashCard();

}



function landHome() {
    const app = document.querySelector("#app");
    app.innerHTML = Home();
}

function header() {
    const nav_header = document.querySelector("#header");
    nav_header.innerHTML = Header();
}

function hashtags() {
    const nav_hash = document.querySelector(".nav_hashtags");
    nav_hash.addEventListener('click', () => {
        const app = document.querySelector("#app");
        crud.getRequest('http://localhost:8080/api/hashtags', hashtags => {
            console.log(hashtags);
            app.innerHTML = HashTags(hashtags)
        });
    });
}

function searchBy() {
    const search_by = document.querySelector(".nav_search");
    search_by.addEventListener('click', () => {
        const app = document.querySelector("#app");
        crud.getRequest('http://localhost:8080/api/searchBy', searchBy => {
            console.log(searchBy);
            app.innerHTML = searchByPage(searchBy)
        })
    })
}

function signup() {
    const signup = document.querySelector(".nav_sign");
    signup.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = signUp();
    })
}


function about() {
    const about_us = document.querySelector(".nav_about");
    about_us.addEventListener("click", () => {
        const app = document.querySelector("#app");
        app.innerHTML = AboutUs();
    })

}

function contact() {
    const contact_us = document.querySelector(".nav_contact");
    contact_us.addEventListener("click", () => {
        const app = document.querySelector("#app");
        app.innerHTML = ContactUs();
    })
}

function FlashCard() {
    const card = document.querySelector(".nav_home");
    card.addEventListener("click", () => {

        const app = document.querySelector("#app");
        crud.getRequest(`http://localhost:8080/api/flashCards/1`, currentCard => {
            console.log(currentCard);
            app.innerHTML = flashCard(currentCard)
        })
    })

}