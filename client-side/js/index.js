import aboutUs from './components/aboutUs';
import Home from './components/Home';
import Header from './components/Header';
import HashTags from './components/hashTags';
import searchBy from './components/searchBy';
import signUp from './components/signUp';
// import ContactUs from './components/ContactUs';
import crud from './crud/crud';


buildPage();


function buildPage() {
    landHome();
    header();
    searchByBtn();
    signup();
    about();
    contact();

}



function landHome() {
    const app = document.querySelector("#app");
    app.innerHTML = Home();
}

function header() {
    const nav_header = document.querySelector("#header");
    nav_header.innerHTML = Header();
}


function searchByBtn() {
    const search_by = document.querySelector(".nav_search");
    search_by.addEventListener('click', () => {
        const app = document.querySelector("#app");
        app.innerHTML = searchBy(searchBy)
        wireUpHashTagSearch();
        wireUpStudentNameSearch();
        wireUpGradeSearch();
        wireUpFlashCardTitleSearch();
        // crud.getRequest('http://localhost:8080/api/searchBy', searchBy => {
        //     console.log(searchBy);

        // })
    });
}

function wireUpHashTagSearch() {
    const nav_hash = document.querySelector("#searchByHashTags");
    nav_hash.addEventListener('click', () => {
        const app = document.querySelector("#app");
        crud.getRequest('http://localhost:8080/api/hashtags', hashtags => {
            console.log(hashtags);
            app.innerHTML = HashTags(hashtags)
        });
    });
}



function wireUpStudentNameSearch() {
    const studentNameElem = document.querySelector("#searchByStudentName");
    studentNameElem.addEventListener('click', () => {
        const app = document.querySelector("#app");
        app.innerHTML = studentName(studentName)
    });
}

function wireUpGradeSearch() {
    const gradeElem = document.querySelector("#searchByGrade");
    gradeElem.addEventListener('click', () => {
        const app = document.querySelector("#app");
        app.innerHTML = grade(grade)
    });
}

function wireUpFlashCardTitleSearch() {
    const flashCardElem = document.querySelector("#searchByFlashCardTitle");
    flashCardElem.addEventListener('click', () => {
        const app = document.querySelector("#app");
        app.innerHTML = flashCardTitle(flashCardTitle)
    });
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