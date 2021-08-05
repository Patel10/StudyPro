import Home from './components/Home';


buildPage();


function buildPage(){
    landHome();
}



function landHome(){
    const app = document.querySelector("app");
    app.innerHTML = Home();
}