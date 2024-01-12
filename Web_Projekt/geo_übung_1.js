
let getToggle = document.getElementById("toggle__control");

getToggle.addEventListener("click", triggeln);

function triggeln (){
    let getNav = document.getElementById("nav_content");

    if (getNav.style.display === 'none' || getNav.classList.contains("div-nav")){
        getNav.style.display = "block";
        getNav.classList.remove("div-nav");
    }else {
        getNav.style.display = 'none';
        getNav.classList.add("div-nav");
    }
}
// check aufgabe 1

let getAnswerbutton = document.getElementById("commit");
let anwortrichtig = document.getElementById("antwort-richtig");
let antwortfalsch = document.getElementById("antwort-falsch");

const geo_aufgabe1_img = [
    "/ressources/geo_europe_bilder/berlin.jpg",
    "/ressources/geo_americas_bilder/toronto-canada.jpg",
    "/ressources/geo_europe_bilder/paris.jpg",
    "/ressources/geo_americas_bilder/jamaica-beach.jpg",
    "/ressources/geo_europe_bilder/stockholm.jpg",
    "/ressources/geo_americas_bilder/cuba-havana.jpg",
    "/ressources/geo_europe_bilder/lisbon-portugal.jpg",
    "/ressources/geo_europe_bilder/luxembourg-vianden.jpg"
]

const landantwort = [
    "deutschland",
    "canada",
    "frankreich",
    "jamaica",
    "schweden",
    "cuba",
    "portugal",
    "luxemburg"
]

let get_next_question = document.getElementById("nextquestion");
let get_image = document.getElementById("aufgabe1_img");
let get_antwort_value = document.getElementById("antwort");

var bai1_next_index = 0;

// Erste Fragen beantworten
getAnswerbutton.addEventListener('click', function(){
    check(landantwort[bai1_next_index]);
});

// anzeigen, ob Antwort richtig oder nicht
function check(answer){
    let getAnswer = document.getElementById("antwort");
    let valueAnswer = getAnswer.value.toLowerCase();
    if ( valueAnswer == answer){
        anwortrichtig.style.display = 'flex';
        antwortfalsch.style.display = 'none';
    }
    else {
        antwortfalsch.style.display = "flex";
        anwortrichtig.style.display = 'none';
    } 
}
get_next_question.addEventListener('click', next);

// Hilfe Anfragen event handler

let get_hilfe_anfragen_button = document.getElementById("aufgabe1_hilfe_anfragen");
let get_antwort_hinweis = document.getElementsByClassName("aufgabe1-antwort-hinweis");

get_hilfe_anfragen_button.addEventListener("click", function(){

    get_antwort_hinweis[0].style.display === "none" ? get_antwort_hinweis[0].style.display = "block": get_antwort_hinweis[0].style.display = "none"; 
    
})
function next () {
    
    bai1_next_index += 1;

    if (bai1_next_index == landantwort.length) {
        bai1_next_index -=1;
        // get_next_question.style.display = "none";
    }
    get_image.src = geo_aufgabe1_img[bai1_next_index];
    get_antwort_value.value = "";

    antwortfalsch.style.display = 'none';
    anwortrichtig.style.display = 'none';
    
    getAnswerbutton.addEventListener('click', function(){
        check(landantwort[bai1_next_index]);
    });
    
    
    get_hilfe_anfragen_button.addEventListener("click", function(){
        
        if (get_antwort_hinweis[bai1_next_index].style.display === "none"){
            
            get_antwort_hinweis[bai1_next_index].style.display = "block";
            get_antwort_hinweis[0].style.display = "none";

        }else {
            
            get_antwort_hinweis[bai1_next_index].style.display = "none";
            get_antwort_hinweis[0].style.display = "none";

        }  
    })
    
    get_antwort_hinweis[bai1_next_index -1].style.display = "none";
}

let get_pre_question = document.getElementById("prequestion");

function prev(){
    
    if (bai1_next_index == 0) bai1_next_index = 1;
        
    bai1_next_index -= 1;

    get_image.src = geo_aufgabe1_img[bai1_next_index];

}
get_pre_question.addEventListener('click',prev);

// Geography Aufgabe2 

let get_list_question = document.getElementsByClassName("aufgabe2_question");

for (let i = 0; i < get_list_question.length;i++){

    get_list_question[i].style.display = "none";
}

let get_list_button_question = document.getElementsByClassName("box");

// Onclick auf Fragen Event
for (let i = 0; i < get_list_question.length; i++){
    get_list_button_question[i].addEventListener('click', function (){
        get_list_question[i].style.display = "flex";
    })   
}

let get_button_true = document.getElementsByClassName('button_true');
const get_racing_car = document.getElementById("racing_car");
const antwort_aufgabe2_list = ["brazil", "america", "bahamas","finnland","polan"];
const abstand_recht = [130, 225];
const abstand_bottom = [100,120];

function check_antwort(listbutton, buttoncontent, listquestion, recht, bottom){
    
    if (listbutton.innerText.toLowerCase() === buttoncontent){
        listquestion.style.display = 'none';

        let id = null;
        clearInterval(id);
        let position = 0;
        id = setInterval(aniBewegung, 10);
       
        function aniBewegung(){
            if (position == 160) clearInterval(id);  
            else {
                position++;
                get_racing_car.style.right = position + recht - 180 + "px";
                get_racing_car.style.bottom = bottom + "px";
            }
        }
    } 
}

for (let i = 0; i < get_list_question.length; i++){
    get_button_true[i].addEventListener('click', function(){
        check_antwort(get_button_true[i], antwort_aufgabe2_list[i],get_list_question[i],abstand_recht[i], abstand_bottom[i]);
    })
}
// get_button_true[0].addEventListener('click',function(){
//     if(get_button_true[0].innerText === "Brazil"){
//         get_list_question[0].style.display = 'none';
        
//         let id = null;
//         let position = 0;

//         clearInterval(id);
//         id = setInterval(aniBewegung, 4);
//         function aniBewegung(){
//             if (position == 80) clearInterval(id);
//             else{
//                 position++;
//                 get_racing_car.style.right = position + "px";
//                 get_racing_car.style.bottom = 25% + 0 + "px";
//             } 
//         }
//     }

// })

// Geography Aufgabe3
const list_antwort_karte =[
    "/ressources/geo_europe_bilder/ducketts-grove-irland.jpg",
    "/ressources/geo_europe_bilder/copenhagen.jpg",
    "/ressources/geo_europe_bilder/SantoriniGriechenLand.jpg",
    "/ressources/geo_europe_bilder/brussels.jpg",
    "/ressources/geo_americas_bilder/chichen-itza-mexico.jpg"
]

const list_frage_karte = [
    "/ressources/geo_land_flag/Flag_of_Ireland.png",
    "/ressources/geo_land_flag/Flag_of_Denmark.png",
    "/ressources/geo_land_flag/Flag_of_Greece.png",
    "/ressources/geo_land_flag/Flag_of_Belgium.png",
    "/ressources/geo_land_flag/Flag_of_Mexico.png"
]

let get_list_antwort_karte = document.getElementsByClassName("antwort_karte");
let get_fragen_karte = document.getElementById("fragen_karte");

document.getElementById("test").innerHTML = get_fragen_karte.src;

function bindenKarte(){
    if (get_fragen_karte.src === list_frage_karte[0]){
        
        let id = null;
        clearInterval(id);

        id = setInterval(dichuyen, 5);
        let posi = 0;

        function dichuyen (){
            if (posi == 50){
                clearInterval(id)
            }else{
                posi++;
                get_fragen_karte.style.right = posi + "px";
                get_fragen_karte.style.bottom = posi + "px";
            }
        }
    }
}
get_list_antwort_karte[0].addEventListener('click', function (){
    bindenKarte()
})


