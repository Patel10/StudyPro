import aboutUs from './components/aboutUs';
import home from './components/home';
import Header from './components/Header';
import myCards from './components/myCards';
import HashTags from './components/hashTags';
import searchBy from './components/searchBy';
import signUp from './components/signUp';
import contactUs from './components/contactUs';
import crud from './crud/crud';


buildPage();


function buildPage() {
    landHome();
    header();
    my_Cards();
    searchByBtn();
    signup();
    about();
    contact();

}



function landHome() {
    const app = document.querySelector("#app");
       app.innerHTML = home();
}

function header() {
    const nav_header = document.querySelector("#header");
    nav_header.innerHTML = Header();
}

// function hashtags() {
//     const nav_hash = document.querySelector(".nav_hashtags");
//     nav_hash.addEventListener('click', () => {
//         const app = document.querySelector("#app");
//         crud.getRequest('http://localhost:8080/api/hashtags', hashtags => {
//             console.log(hashtags);
//             app.innerHTML = HashTags(hashtags)
//         });
//     });
// }

function searchByBtn() {
    const search_by = document.querySelector(".nav_search");
    search_by.addEventListener('click', () => {
        const app = document.querySelector("#app");
        app.innerHTML = searchBy(searchBy)
        wireUpHashtagSearch();
        // crud.getRequest('http://localhost:8080/api/searchBy', searchBy => {
        //     console.log(searchBy);

        // })
    })
}

function wireUpHashtagSearch() {
    const nav_hash = document.querySelector("#searchByHashtag");
    nav_hash.addEventListener('click', () => {
        const app = document.querySelector("#app");
        crud.getRequest('http://localhost:8080/api/hashtags', hashtags => {
            console.log(hashtags);
            app.innerHTML = HashTags(hashtags)
        });
    });
}

function signup() {
    const signup = document.querySelector(".nav_sign");
    signup.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = signUp();
    })
}
function my_Cards(){
    const card = document.querySelector(".nav_myCards");
        card.addEventListener('click', () => {
            const app = document.querySelector("#app");
            crud.getRequest('http://localhost:8080/api/flashCards', Cards => {
                console.log(Cards);
                app.innerHTML = myCards(Cards);
            })
        })
}

function about() {
    const about_us = document.querySelector(".nav_about");
    about_us.addEventListener("click", () => {
        const app = document.querySelector("#app");
        app.innerHTML = aboutUs();
    })

}

function contact() {
    const contact_us = document.querySelector(".nav_contact");
        contact_us.addEventListener("click", () => {
            const app = document.querySelector("#app");
            app.innerHTML = contactUs();
        })
}
