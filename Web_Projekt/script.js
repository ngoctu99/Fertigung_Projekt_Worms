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

if(get_preButton != null){
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
}


// ============ Asian Ubung Lernseite ==================
// Pre und Next Button Event Handler
let getListofUbung = document.getElementsByClassName('geo_article__kurzubung__layout');
var quizz_asian_count = 0;

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

let getAsian_nextbutton = document.getElementById("asian_next");
if(getAsian_nextbutton != null){
    getAsian_nextbutton.addEventListener('click', function(){
        asianNextbutton(quizz_asian_count, getListofUbung);
    });
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

let getAsian_prebutton = document.getElementById("asian_pre");
if (getAsian_prebutton != null){
    
    getAsian_prebutton.addEventListener('click', function(){
        asianPrebutton(quizz_asian_count, getListofUbung);
    }); 
     
}


// Asian Ubung Event Handler
let getAntwort1 = document.getElementsByClassName("button1");
let getAntwort2 = document.getElementsByClassName("button2");
let getAntwort3 = document.getElementsByClassName("button3");
const answerlist = ["vietnam", "japan", "katar"]


// ========== check the answer of quizz and show them in monitor ==========

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


// ============= Kleine Quizz in Europe Kontinent Lektion umgehen =========== 

const europe_quizz_answerSignal = document.getElementsByClassName("answer_signal");
// get List of Radio Input
const europe_quizz_radioInput = document.getElementsByName("question_one");

// check choose answer of user if they are correct or not
function checkAnswerRadiobutton (){
    

    let selectedAnswer;
    // check the correct answer
    for ( let index = 0; index < europe_quizz_radioInput.length; index++){

        if(europe_quizz_radioInput[index].checked){

            selectedAnswer = europe_quizz_radioInput[index].value;
            europe_quizz_answerSignal[index].style.color = (selectedAnswer == 'luxemburg') ? "blue": "red";
            break;

        }
    }
}

let europe_quizz_antwortSignal = document.getElementsByClassName("antwort_signal");


// get list of checkbox in Geography Lernseite
const europe_quizz_checkboxInput = document.getElementsByName("question_two");

// check choose answer of user if they are correct or not
function checkAnswerCheckbox(){

    
    let selectedAnswer;
    
    for ( let index = 0; index < europe_quizz_checkboxInput.length; index++){

        if(europe_quizz_checkboxInput[index].checked){

            selectedAnswer = europe_quizz_checkboxInput[index].value;
            europe_quizz_antwortSignal[index].style.color = (selectedAnswer == 'richtig_answer') ? 'blue' : 'red';

        }
    }
}


// remove checked Box status if user click reset button
function removeCheckstatus (listCheckInput){

    for (let index = 0; index < listCheckInput.length; index++){

        if(listCheckInput[index].checked) listCheckInput[index].checked = false;

    }
}


// change letter color in black if user click reset button
function resetContentInputform(listAnswersignal){
    
    for ( let index = 0; index < listAnswersignal.length; index++){
        listAnswersignal[index].style.color = 'black';
    }
}


let europe_quizz_radiobutton_commit = document.getElementById("europe_quizz_commit");
if(europe_quizz_radiobutton_commit != null){

    europe_quizz_radiobutton_commit.addEventListener('click', function (){
        checkAnswerRadiobutton();
    })
}


let europe_quizz_radiobutton_reset = document.getElementsByClassName("europe_quizz_reset");
if(europe_quizz_radiobutton_reset != null){

    if(europe_quizz_radiobutton_reset[0] != null){

        europe_quizz_radiobutton_reset[0].addEventListener('click', function(){
            resetContentInputform(europe_quizz_answerSignal);
            removeCheckstatus(europe_quizz_radioInput)
        })

    }
    
    if(europe_quizz_radiobutton_reset[1] != null){

        europe_quizz_radiobutton_reset[1].addEventListener('click', function(){

            resetContentInputform(europe_quizz_antwortSignal);
            removeCheckstatus(europe_quizz_checkboxInput);
    
        })
    }
}


let europe_quizz_checkboxbutton_commit = document.getElementById("europe_quizz_commit_checkbox");
if(europe_quizz_checkboxbutton_commit != null){

    europe_quizz_checkboxbutton_commit.addEventListener('click', function(){
        checkAnswerCheckbox();
    })
}

// Americas Bilder umgehen
// Bilder Quelle pixabay.com

const imageArr = [
    "../ressources/geo_americas_bilder/toronto-canada.jpg",
    "../ressources/geo_americas_bilder/tikal-guatemala.jpg",
    "../ressources/geo_americas_bilder/rio-brazil.jpg",
    "../ressources/geo_americas_bilder/panama.jpg",
    "../ressources/geo_americas_bilder/major-cay-bahamas.jpg",
    "../ressources/geo_americas_bilder/jamaica-beach.jpg",
    "../ressources/geo_americas_bilder/freedom_america.jpg",
    "../ressources/geo_americas_bilder/cuba-havana.jpg",
    "../ressources/geo_americas_bilder/costa-rica-kirsch.jpg",
    "../ressources/geo_americas_bilder/chichen-itza-mexico.jpg",
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

if(americas_iconnext != null){

    americas_iconnext.onclick= function(){

        if (imageArr_index  == imageArr.length - 1 ) imageArr_index = -1;
    
        imageArr_index++;
        document.getElementById("americas_bilder").src= imageArr[imageArr_index];
        americas_absatz.innerHTML = americas_absatzinfor[imageArr_index];
        
    }

}

if(americas_iconpre != null){

    americas_iconpre.onclick=function(){
    
        if(imageArr_index == 0) imageArr_index = imageArr.length;
            
        imageArr_index--;
        document.getElementById("americas_bilder").src= imageArr[imageArr_index];
        americas_absatz.innerHTML = americas_absatzinfor[imageArr_index];

    }
}

// ==================== Event handler für Geo Übungseite ==================

let anwortrichtig = document.getElementById("antwort-richtig");
let antwortfalsch = document.getElementById("antwort-falsch");

const geo_aufgabe1_img = [
    "../ressources/geo_europe_bilder/berlin.jpg",
    "../ressources/geo_americas_bilder/toronto-canada.jpg",
    "../ressources/geo_europe_bilder/paris.jpg",
    "../ressources/geo_americas_bilder/jamaica-beach.jpg",
    "../ressources/geo_europe_bilder/stockholm.jpg",
    "../ressources/geo_americas_bilder/cuba-havana.jpg",
    "../ressources/geo_europe_bilder/lisbon-portugal.jpg",
    "../ressources/geo_europe_bilder/luxembourg-vianden.jpg"
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

let get_image = document.getElementById("aufgabe1_img");
let get_antwort_value = document.getElementById("antwort");

var geoUebung_aufgabe1_next_index = 0;

let getAnswerbutton = document.getElementById("commit");

if (getAnswerbutton != null){
        // Erste Fragen beantworten
    getAnswerbutton.addEventListener('click', function(){
        check(landantwort[geoUebung_aufgabe1_next_index]);
    });
}

 // anzeigen, ob Antwort in input feld bei Geo Uebungsaufgabe1 richtig oder nicht
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

let get_next_question = document.getElementById("nextquestion");
if(get_next_question != null){
    get_next_question.addEventListener('click', next);

    // ================== Nextquestion button in Geo Uebungsaufgabe1 umgehen ==================
    function next () {
    
        geoUebung_aufgabe1_next_index += 1;
    
        if (geoUebung_aufgabe1_next_index == landantwort.length) {
            geoUebung_aufgabe1_next_index -=1;
            // get_next_question.style.display = "none";
        }
        get_image.src = geo_aufgabe1_img[geoUebung_aufgabe1_next_index];
        get_antwort_value.value = "";
    
        antwortfalsch.style.display = 'none';
        anwortrichtig.style.display = 'none';
        
        getAnswerbutton.addEventListener('click', function(){
            check(landantwort[geoUebung_aufgabe1_next_index]);
        });
        
        
        get_hilfe_anfragen_button.addEventListener("click", function(){
            
            if (get_antwort_hinweis[geoUebung_aufgabe1_next_index].style.display === "none"){
                
                get_antwort_hinweis[geoUebung_aufgabe1_next_index].style.display = "block";
                get_antwort_hinweis[0].style.display = "none";
    
            }else {
                
                get_antwort_hinweis[geoUebung_aufgabe1_next_index].style.display = "none";
                get_antwort_hinweis[0].style.display = "none";
    
            }  
        })
        
        get_antwort_hinweis[geoUebung_aufgabe1_next_index - 1].style.display = "none";
    }
}


// =========== Hilfe Anfragen event handler bei Geo Übungseite Aufgabe 1 ==========

let get_antwort_hinweis = document.getElementsByClassName("aufgabe1-antwort-hinweis");
let get_hilfe_anfragen_button = document.getElementById("aufgabe1_hilfe_anfragen");

if (get_hilfe_anfragen_button != null){

    get_hilfe_anfragen_button.addEventListener("click", function(){

        get_antwort_hinweis[0].style.display === "none" ? get_antwort_hinweis[0].style.display = "block": get_antwort_hinweis[0].style.display = "none"; 
        
    })

}

let geoUebung_aufgabe1_resetQuestion = document.getElementById("resetquestion");

// ================== Resetbutton in Geo Uebungsaufgabe1 umgehen ==================
function reset(){
    get_antwort_hinweis[geoUebung_aufgabe1_next_index].style.display = "none";
    
    get_hilfe_anfragen_button.addEventListener("click", function(){
                
        get_antwort_hinweis[0].style.display = "block";     
          
    })
    geoUebung_aufgabe1_next_index = 0;
    get_image.src = geo_aufgabe1_img[geoUebung_aufgabe1_next_index];
    get_antwort_value.value = "";
    
    antwortfalsch.style.display = 'none';
    anwortrichtig.style.display = 'none';

}

if(geoUebung_aufgabe1_resetQuestion) geoUebung_aufgabe1_resetQuestion.addEventListener('click',reset);

// ================= Geographie Uebungseite Aufgabe2 ==================

const geoÜbungseite_aufgabe2_startgameButton = document.getElementById('game_Buttonsteuerung__start');
let get_list_button_question = document.getElementsByClassName("box");

if(geoÜbungseite_aufgabe2_startgameButton != null){

    geoÜbungseite_aufgabe2_startgameButton.addEventListener('click', function(){

        // show the first question und startgame button will be hidded
        get_list_button_question[0].style.display = 'flex';
        geoÜbungseite_aufgabe2_startgameButton.style.display = 'none';

    })
}


const geoÜbungseite_aufgabe2_resetgameButton = document.getElementById('game_Buttonsteuerung__reset');

if(geoÜbungseite_aufgabe2_resetgameButton != null){

    geoÜbungseite_aufgabe2_resetgameButton.addEventListener('click', function(){

        // set position of bicyle as original
        const bicycle_icon = document.getElementById("racing_car");
        bicycle_icon.style.top = 0;
        bicycle_icon.style.right = '165px';

        // All of answer button hidded except answer one
        for (let index = 1; index < get_list_button_question.length; index++){
            get_list_button_question[index].style.display = 'none';
        }
        get_list_button_question[0].style.display = 'flex';
        geoÜbungseite_aufgabe2_showWinner.style.display = 'none';
        geoÜbungseite_aufgabe2_startgameButton.disabled = false;
        geoÜbungseite_aufgabe2_startgameButton.style.backgroundColor = 'brown';

    })
}

let get_list_question = document.getElementsByClassName("aufgabe2_question");

for (let i = 0; i < get_list_question.length;i++){

    get_list_question[i].style.display = "none";
}

// get_list_question.forEach(question => question.style.display = 'none');

// Onclick auf Fragen Event
for (let i = 0; i < get_list_question.length; i++){
    get_list_button_question[i].addEventListener('click', function (){
        get_list_question[i].style.display = "flex";
    })   
}

let get_button_true = document.getElementsByClassName('button_true');
const get_racing_car = document.getElementById("racing_car");
const antwort_aufgabe2_list = ["brazil", "america", "bahamas","finnland","polan"];
const abstand_bottom = [0,90,180,270,360];
const get_box_button = document.getElementsByClassName('box');
const geoÜbungseite_aufgabe2_showWinner = document.getElementById('game_show_winner');
if(geoÜbungseite_aufgabe2_showWinner != null) geoÜbungseite_aufgabe2_showWinner.style.display = 'none';

function check_antwort(listbutton, buttoncontent, listquestion, top){
    
    if (listbutton.innerText.toLowerCase() === buttoncontent){
        listquestion.style.display = 'none';

        let id = null;
        clearInterval(id);
        let position = 0;
        id = setInterval(aniBewegung, 10);
       
        function aniBewegung(){

            if (position == 90) clearInterval(id);  
            else {
                position++;
                get_racing_car.style.top = top + position + "px";
            }

        }
    } 
}

for (let i = 0; i < get_list_question.length; i++){
    get_button_true[i].addEventListener('click', function(){

        check_antwort(get_button_true[i], antwort_aufgabe2_list[i],get_list_question[i], abstand_bottom[i]);
        get_box_button[i].style.display = 'none';

        // show the following question symbol, if this ist the last question then show the winner banner
        if(i + 1 < get_box_button.length) get_box_button[i + 1].style.display = 'flex';
        else geoÜbungseite_aufgabe2_showWinner.style.display = 'flex';

    })
}

const geoÜbungseite_aufgabe2_buttonFalse = document.getElementsByClassName('button_false');
for (let index = 0; index < geoÜbungseite_aufgabe2_buttonFalse.length; index++){

    geoÜbungseite_aufgabe2_buttonFalse[index].addEventListener('click', function(){
        geoÜbungseite_aufgabe2_buttonFalse[index].style.backgroundColor = 'red';
    })
    
}