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
        getNav.style.display = "block";
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