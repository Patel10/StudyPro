import aboutUs from './components/aboutUs';
import Home from './components/Home';
;


buildPage();


function buildPage(){
    landHome();
    
    

}



function landHome(){
    const app = document.querySelector("#app");
   app.innerHTML = Home();
   //app.innerHTML = aboutUs();
}

