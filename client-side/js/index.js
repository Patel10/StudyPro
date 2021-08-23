import aboutUs from './components/aboutUs';
import home from './components/home';
import Header from './components/Header';
import HashTags from './components/hashTags';
import searchBy from './components/searchBy';
import signUp from './components/signUp';
import contactUs from './components/contactUs';
import crud from './crud/crud';
import flashCard from './components/flashCard';
import HashTagForm from './components/hashTagForm';
import StudentNameForm from './components/studentNameForm';
import newCard from './components/newCard';
import myCards from './components/myCards';
import FlashCardTitleForm from './components/flashCardTitleForm';
import gradeform from './components/gradeform';

let signInUser;

var myIndex = 0;
buildPage();


function buildPage() {

    header();
    searchByBtn();
    signup();
    about();
    contact();
    newcard();
    landHome();
    my_Cards();
    makeSignIn();

}



function landHome() {
    const homeButton = document.querySelector(".nav_home");
    homeButton.addEventListener('click', () => {
        makeHome();
    })

}
function makeSignIn() {
 const app = document.querySelector('#app');
        app.innerHTML = signUp();
        wireUpSignIn();
}

function makeHome() {
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
       // wireUpHashTagSearch();
        wireUpStudentNameSearch();
        wireUpGradeSearch();
        wireUpFlashCardTitleSearch();
        // crud.getRequest('http://localhost:8080/api/searchBy', searchBy => {
        //     console.log(searchBy);

        // })
    });
}

function wireUpHashTagSearch() {
    const nav_hashTag = document.querySelector(".searchByHashTag");
    nav_hashTag.addEventListener('click', () => {
        const app = document.querySelector("#app");
        crud.getRequest('http://localhost:8080/api/hashtags', hashtags => {
            console.log(hashtags);
            app.innerHTML = HashTags(hashtags)
        });
        const form = document.querySelector('.form');
        form.innerHTML = HashTagForm();

    });
}

function wireUpStudentNameSearch() {
    const nav_student = document.querySelector(".searchByStudentName");
    nav_student.addEventListener('click', () => {
        // const app = document.querySelector("#app");
        // crud.getRequest('http://localhost:8080/api/hashtags', hashtags => {
        //  console.log(hashtags);
        // app.innerHTML = HashTags(hashtags)
        //  });
        const form = document.querySelector('.form');
        form.innerHTML = StudentNameForm();
        doStudentNameSearch();
    });
}
function doStudentNameSearch() {
    const nameSearch = document.querySelector(".studentNameSearch");
   nameSearch.addEventListener('click', () => {
        const app = document.querySelector("#app");
        const studentName = document.querySelector('.studentNameInput')
        crud.getRequest('http://localhost:8080/api/students/name/'+studentName.value, Student => {
            console.log(Student);
            app.innerHTML = myCards(Student.flashCards);
            bind_links();
        });
       

    });

}

function wireUpFlashCardTitleSearch() {
    const nav_flashCard = document.querySelector(".searchByFlashCardTitle");
    nav_flashCard.addEventListener('click', () => {
        const form = document.querySelector('.form');
        form.innerHTML = FlashCardTitleForm();
    });
}


function wireUpGradeSearch() {
    const nav_grade = document.querySelector(".searchByGrade");
    nav_grade.addEventListener('click', () => {
        const form = document.querySelector('.form');
        form.innerHTML = gradeform();
    });
}



function signup() {
    const signup = document.querySelector(".nav_sign");
    signup.addEventListener('click', () => {
        
       makeSignIn();
    })
}

function wireUpSignIn() {
    const signInBtn = document.querySelector("#loginSubmit");
    signInBtn.addEventListener('click', () => {
        const loginName = document.querySelector("#loginName")
        crud.postRequest("http://localhost:8080/api/students/add-studentName", {
            "StudentName": loginName.value
        }, (user) => {
            signInUser = user;
            makeHome();
        })

    })
}


function newcard() {
    const signup = document.querySelector(".nav_newCard");
    signup.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = newCard();
        wireUpNewFlashCard();
    })
}

function wireUpNewFlashCard() {
    const submitBtn = document.querySelector("#newSubmit");
    submitBtn.addEventListener('click', () => {
        const title = document.querySelector("#newTitle")
        const description = document.querySelector("#newDescription")
        const info = document.querySelector("#newCardInfo")
        const image = document.querySelector("#newLink")
        crud.postRequest("http://localhost:8080/api/flashCards/add-flashCard", {
            "Title": title.value,
            "CardInfo": info.value,
            "Description": description.value,
            "CardImg": image.value,
            "StudentId": signInUser.id
        }, (FirstCard) => {
            console.log(FirstCard);
            crud.getRequest('http://localhost:8080/api/flashCards/' + FirstCard.id, Card => {
                console.log(Card);
                app.innerHTML = flashCard(Card);

            })
        })

    })
}

function my_Cards() {
    const card = document.querySelector(".nav_myCards");
    card.addEventListener('click', () => {
        const app = document.querySelector("#app");
        crud.getRequest('http://localhost:8080/api/students/'+signInUser.id, Student => {
            console.log(Student);
            app.innerHTML = myCards(Student.flashCards);
            bind_links();
        })
    })
}

function bind_links() {
    let links = document.querySelectorAll(".tag-list-title");
    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            if (event.target.classList.contains("tag-list-title")) {
                let id = event.target.parentElement.querySelector(".tag-list-id").value;
                crud.getRequest('http://localhost:8080/api/flashCards/' + id, Card => {
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
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 9000); // Change image every 2 seconds
}