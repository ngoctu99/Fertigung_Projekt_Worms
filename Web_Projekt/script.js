function onMouseover (objekt) {
    objekt.style.color = "green";
}

function onMouseout (objekt) {
    objekt.style.color = "white";
}

let getToggle = document.getElementById("toggle__control");

getToggle.addEventListener("click", triggeln);

function triggeln (){
    let getNav = document.getElementById("nav_content");

    if (getNav.style.display === 'none' || getNav.classList.contains("div-nav")){
        getNav.style.display = "flex";
        getNav.style.justifyContent = "center";
        getNav.style.alignItems = "center";
        getNav.classList.remove("div-nav");
    }else {
        getNav.style.display = 'none';
        getNav.classList.add("div-nav");
    }
}

let getKontinent_content = document.getElementsByClassName("kontinente_content");
let get_button = document.getElementById("next");
let get_preButton = document.getElementById("pre");

get_preButton.addEventListener('click', gobackthepage);
get_button.addEventListener('click', gotothenext);

var pageCount = 0;
function gotothenext(){

    pageCount += 1;

    getKontinent_content[pageCount - 1].style.display = 'none';
    if (pageCount > getKontinent_content.length - 1) pageCount = getKontinent_content.length - 1;
    getKontinent_content[pageCount].style.display = 'block';

}

function gobackthepage(){
    if (pageCount <= 0){

        pageCount = 0;
        getKontinent_content[pageCount].style.display = 'block';

    }else {

        pageCount -= 1;
        getKontinent_content[pageCount + 1].style.display = 'none';
        getKontinent_content[pageCount].style.display = 'block';

    }
}

// ============ Asian Ubung Lernseite ==================
// Pre und Next Button Event Handler
let getListofUbung = document.getElementsByClassName('geo_article__kurzubung__layout');
let getAsian_prebutton = document.getElementById("asian_pre");
let getAsian_nextbutton = document.getElementById("asian_next");
var quizz_asian_count = 0;

getAsian_nextbutton.addEventListener('click', function(){
    asianNextbutton(quizz_asian_count, getListofUbung);
});

getAsian_prebutton.addEventListener('click', function(){
    asianPrebutton(quizz_asian_count, getListofUbung);
});

function asianNextbutton (pagecount, next){
    
    if (quizz_asian_count == next.length - 1){

        quizz_asian_count = next.length - 1;
        next[pagecount].style.display = "block";
        next[pagecount - 1].style.display = "none";
        
    }else{

        next[pagecount].style.display = 'none';
        next[pagecount + 1].style.display = 'block';

    } 
    
    quizz_asian_count += 1;
}

function asianPrebutton (pagecount, pre){
    
    if (quizz_asian_count == 0){

        quizz_asian_count = 0;
        next[pagecount].style.display = "block";
        next[pagecount + 1].style.display = "none";

    }else{

        pre[pagecount - 1].style.display = "block";
        pre[pagecount].style.display = "none";

    }
    quizz_asian_count -= 1;
}

// Asian Ubung Event Handler
let getAntwort1 = document.getElementsByClassName("button1");
let getAntwort2 = document.getElementsByClassName("button2");
let getAntwort3 = document.getElementsByClassName("button3");
const answerlist = ["vietnam", "japan", "katar"]

// Check the Answer of Quizz and show them in Monitor
function getLosung(listofAttribute, index, position, stringLosung){
        
    if (listofAttribute[index].textContent.toLowerCase() == stringLosung){

        document.getElementsByClassName('richtig')[position].style.display = 'block';
        document.getElementsByClassName('falsch')[position].style.display = 'none';

    }else {

        document.getElementsByClassName('richtig')[position].style.display = 'none';
        document.getElementsByClassName('falsch')[position].style.display = 'block';

    }
}

for (let index = 0; index < getAntwort1.length; index++){

    getAntwort1[index].addEventListener('click', function(){
        getLosung(getAntwort1,index,0,answerlist[0]);
    });

}

for (let index1 = 0; index1 < getAntwort2.length; index1++){

    getAntwort2[index1].addEventListener('click', function(){
        getLosung(getAntwort2, index1, 1, answerlist[1]);
    });

}

for (let index2 = 0; index2 < getAntwort3.length; index2++){

    getAntwort3[index2].addEventListener('click', function(){
        getLosung(getAntwort3, index2, 2, answerlist[2]);
    });

}

// Americas Bilder umgehen
// Bilder Quelle pixabay.com
const imageArr = [
    "/ressources/geo_americas_bilder/toronto-canada.jpg",
    "/ressources/geo_americas_bilder/tikal-guatemala.jpg",
    "/ressources/geo_americas_bilder/rio-brazil.jpg",
    "/ressources/geo_americas_bilder/panama.jpg",
    "/ressources/geo_americas_bilder/major-cay-bahamas.jpg",
    "/ressources/geo_americas_bilder/jamaica-beach.jpg",
    "/ressources/geo_americas_bilder/freedom_america.jpg",
    "/ressources/geo_americas_bilder/cuba-havana.jpg",
    "/ressources/geo_americas_bilder/costa-rica-kirsch.jpg",
    "/ressources/geo_americas_bilder/chichen-itza-mexico.jpg",
];

const americas_absatzinfor = [
    "Toronto in Kanada ist eine Stadt im Süden von Ontario, " +
    "die bevölkerungsreichste Stadt in Kanada  und die Hauptstadt der Provinz Ontario.",
    "Tikal ist eine Ruinenstadt einer antiken Zivilisation, " +
    "die in einem Regenwaldgebiet in Guatemala gefunden wurde.",
    "Rio de Janeiro, oder einfach Rio, ist eine Stadt im gleichnamigen " +
    "Bundesstaat im Süden Brasiliens mit einer Fläche von 1260 km² und " +
    "einer registrierten Bevölkerung von 5.940.224 Menschen. Die Stadt " +
    "war von 1763 bis 1960 die Hauptstadt Brasiliens und von 1808 bis " +
    "1821 die Hauptstadt des Portugiesischen Königreichs.",
    "Der Panamakanal ist eine 82 km lange künstliche Wasserstraße " +
    "in Panama, die den Atlantischen Ozean mit dem Pazifischen Ozean " +
    "verbindet und Nord- und Südamerika trennt. Der Kanal durchquert " +
    "die Landenge von Panama und ist eine wichtige Handelsroute für den Seeverkehr.",
    "Der Pig Beach auf Big Major Cay ist ein Strand auf einer unbewohnten " +
    "Insel in den Exuma, Bahamas. Die Insel erhielt ihren informellen Namen, " +
    "da sie tatsächlich eine Herde wild lebender Schweine beherbergt. Sie ist " +
    "zu einer beliebten Touristenattraktion in der modernen Zeit geworden.",
    "Die Strände in Jamaika sind touristische Anziehungspunkte und ziehen jedes " +
    "Jahr viele Touristen an.",
    "Die Freiheitsstatue ist ein klassisches bronzenes Skulpturenwerk im " +
    "neoklassizistischen Stil, das sich auf der Liberty Island im Hafen von " +
    "New York City, USA, befindet.",
    "La Habana ist die größte Stadt, die Hauptstadt und eine der 14 Provinzen Kubas. " + 
    "Es ist das politische, kulturelle und wirtschaftliche Zentrum Kubas.",
    "Die Kirche in Costa Rica ist ein bekannter Ort, den viele Menschen besuchen.",
    "El Castillo, auch als Tempel Kukulcan bekannt, ist eine mittelamerikanische " +
    "Pyramide, die das Zentrum der archäologischen Stätte Chichen Itza im Bundesstaat " +
    "Yucatán, Mexiko, beherrscht.",
];

let americas_iconpre = document.getElementById("icon-pre");
let americas_iconnext = document.getElementById("icon-next");
let americas_absatz = document.getElementById("americas_absatz");
var imageArr_index = 0;

americas_iconnext.onclick= function(){
    if (imageArr_index  == imageArr.length - 1 ) imageArr_index = -1;

    imageArr_index++;
    document.getElementById("americas_bilder").src= imageArr[imageArr_index];
    americas_absatz.innerHTML = americas_absatzinfor[imageArr_index];
    
}

americas_iconpre.onclick=function(){
    
    if(imageArr_index == 0) imageArr_index = imageArr.length;
        
    imageArr_index--;
    document.getElementById("americas_bilder").src= imageArr[imageArr_index];
    americas_absatz.innerHTML = americas_absatzinfor[imageArr_index];
}

// JS for example side

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