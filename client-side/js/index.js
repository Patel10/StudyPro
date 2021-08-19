import aboutUs from './components/aboutUs';
import home from './components/home';
import Header from './components/Header';
import HashTags from './components/hashTags';
import searchBy from './components/searchBy';
import signUp from './components/signUp';
import contactUs from './components/contactUs';
import crud from './crud/crud';
import myCards from './components/myCards';
import flashCard from './components/flashCard';

var myIndex = 0;
buildPage();


function buildPage() {
    
    header();
    searchByBtn();
    signup();
    about();
    contact();
    landHome();
    makeHome();
    my_Cards();

}



function landHome() {
    const homeButton = document.querySelector(".nav_home");
        homeButton.addEventListener('click', () => {
            makeHome();
        })
       
}
function makeHome(){
    const app = document.querySelector("#app");
            app.innerHTML = home();
            carousel();
}
function contact() {
    const app = document.querySelector("#app");
       app.innerHTML = contactUs();
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
function my_Cards(){
    const card = document.querySelector(".nav_myCards");
        card.addEventListener('click', () => {
            const app = document.querySelector("#app");
            crud.getRequest('http://localhost:8080/api/flashCards', Cards => {
                console.log(Cards);
                app.innerHTML = myCards(Cards);
                bind_links();
            })
        })
}
function bind_links(){
    let links = document.querySelectorAll(".tag-list-title");
    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            if(event.target.classList.contains("tag-list-title")){
               let id= event.target.parentElement.querySelector(".tag-list-id").value;
               crud.getRequest('http://localhost:8080/api/flashCards/'+id, Card => {
                console.log(Card);
                app.innerHTML = flashCard(Card);

            })
            }
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

// let slider = function() {
//     let slider = document.getElementById("slider");
//     let sliderWidth = slider.offsetWidth;
//     let slideList = document.getElementById("slideWrap");
//     let count = 1;
//     let items = slideList.querySelectorAll('li').length;
    
//     window.addEventListener('resize', function() {
//         sliderWidth = slider.offsetWidth;
//     })
// }




function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000); // Change image every 2 seconds
}