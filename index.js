
/*GLOBAL PARAMETERS*/
var pole = [{en:"antelope",cz:"antilopa"},
			{en:"armadillo",cz:"pasovecccccccc"},
			{en:"baboon",cz:"pavian"},
			{en:"bat",cz:"netopyr"},
			{en:"boar",cz:"divocak"},
			{en:"beaver",cz:"bobr"},
			{en:"buffalo",cz:"bizon"},
			{en:"calf",cz:"tele"},
			{en:"camel",cz:"velbloud"},
            {en:"donkey",cz:"osel"},
			{en:"foal",cz:"blazen"},
			{en:"gnu",cz:"pakun"},
			{en:"guinea pig",cz:"morce"},
			{en:"hamster",cz:"krecek"},
			{en:"hedgehog",cz:"jezek"},
			{en:"cheetah",cz:"gepard"},
            {en:"lamb",cz: "jehne›"},
            {en:"lioness",cz: "lvice"},
            {en:"mole",cz: "krtek"},
            {en:"moose",cz: "los"},
            {en:"platypus",cz: "ptakopysk"},
            {en:"polar bear",cz: "ledni medved"},
            {en:"porcupine",cz: "dikobraz"},
            {en:"raccoon",cz: "myval"},
            {en:"ram",cz: "beran"},
            {en:"reindeer",cz: "sob"},
            {en:"rhinoceros",cz: "nosorozec"},
            {en:"skunk",cz: "tchor" },
            {en:"squirrel",cz:"veverka" },
            {en:"walrus",cz:"mroz" },
            {en:"may",cz:"kveten" },
            {en:"june",cz:"cerven" },
            {en:"july",cz:"cervenec" },
            {en:"october",cz:"rijen" },
            {en:"november",cz:"listopad" },
            {en:"dip",cz:"namocit" },
            {en:"float",cz:"plout" },
            {en:"ripple",cz:"vlnka" },
            {en:"shallow",cz:"melky" },
            {en:"splash",cz:"splouchat" },
            {en:"stroke",cz:"zaber pri veslovani" },
            {en:"sink",cz:"potopit" },
            {en:"water surface",cz:"hladina vody" },
            {en:"wade",cz:"brodit se" },
            {en:"answer the phone",cz:"zvednout telefon" },
            {en:"answering machine",cz:"telefonni zaznamnik" },
            {en:"area code",cz:"telefonni predvolba" },
            {en:"dial",cz:"vytocit (telefon)" },
            {en:"hang up",cz:"zavesit (telefon)" },
            {en:"payphone",cz:"telefonni budka" },
            {en:"voicemail",cz:"hlasova schranka" },
            {en:"anthem",cz:"hymna" },
            {en:"fool",cz:"blazen" },
            {en:"kneel",cz:"klecet" },
            {en:"play it cool",cz:"nedat na sobe znat" },
            {en:"wise",cz:"moudry" },
            {en:"breed",cz:"plemeno" },
            {en:"collar",cz:"obojek" },
            {en:"fetch",cz:"aportovat" },
            {en:"growl",cz:"vrcet (pes)" },
            {en:"kennel",cz:"bouda (pes)" },
            {en:"leash",cz:"voditko (pes)" },
            {en:"muzzle",cz:"nahubek (pes)" },
            {en:"obey",cz:"poslouchat (e.g. rodice)" },
            {en:"paw",cz:"tlapka" },
            {en:"sniff",cz:"cichat, cenichat" },
            {en:"track",cz:"stopovat" },
            {en:"wag",cz:"vrtet ocasem" },
            {en:"headless",cz:"bezhlave" },
            {en:"chorus",cz:"refren" },
            {en:"release",cz:"vydani"},
            {en:"tracklist",cz:"seznam skladeb" },
            {en:"approach",cz:"pristup (k necemu jako postoj)" },
            {en:"fill in", cz: "vyplnit" },
            {en:"lobby",cz: "vstupni hala" },
            {en:"realize",cz: "uvedomit si" },
            {en:"receive",cz: "obdrzet" },
            {en:"captivity",cz: "zajeti" },
            {en:"curse",cz: "kletba" },
            {en:"drown",cz: "utopit se" },
            {en:"establish",cz: "zalozit" },
            {en:"advantage",cz: "vyhoda" },
            {en:"colonel",cz: "plukovnik" },
            {en:"cone-shaped",cz: "kuzelovity" },
            {en:"detestable",cz: "odporny" },
            {en:"egg-shaped",cz: "ve tvaru vejce" },
            {en:"high society",cz: "vyssi spolecnost" },
            {en:"undoubtedly",cz: "bezpochyb" },
            {en:"pride",cz: "pycha" },
            {en:"modest",cz: "skromny" },
            {en:"allergy",cz: "alergie" },
            {en:"diarrhoea",cz: "prujem" },
            {en:"flu",cz: "chripka" },
            {en:"digital signature",cz: "digitalni podpis" },
            {en:"hay fever",cz: "senna ryma" },
            {en:"painkiller",cz: "lek proti bolesti" },
            {en:"rash",cz: "vyrazka (kozni)" },
            {en:"sneeze",cz: "kychat" },
            {en:"sore throat",cz: "bolest v krku" },
            {en:"throw up",cz: "zvracet" },
            {en:"several",cz: "nekolik" },
            {en:"capacity",cz: "kapacita" },
            {en:"cooling",cz: "chlazeni" },
            {en:"armchair",cz: "kreslo" },
            {en:"cooker",cz: "varici sporak" },
            {en:"double bed",cz: "dvojluzko" },
            {en:"furniture",cz: "nabytek" },
            {en:"sink",cz: "drez" },
            {en:"sofa",cz: "pohovka" },
            {en:"washbasin",cz: "umyvadlo" },
            {en:"estate",cz: "majetek" },
            {en:"childhood",cz: "detstvi" },
            {en:"nearby",cz: "nedaleky" },
            {en:"discern",cz: "rozeznat" },
            {en:"distance",cz: "vzdalenost" },
            {en:"distract",cz: "rozptylovat" },
            {en:"doubt",cz: "pochyba" },
            {en:"pack of wolves",cz: "secka vlku" },
            {en:"rag",cz: "hadr" },
            {en:"rip",cz: "roztrhnout" },
            {en:"car track",cz: "stopa od auta" },
            {en:"appendix",cz: "slepe strevo" },
            {en:"bladder",cz: "mocovy mechyr" },
            {en:"gallbladder",cz: "zlucnik" },
            {en:"kidney",cz: "ledvina" },
            {en:"large intestine",cz: "tluste strevo" },
            {en:"liver",cz: "jatra" },
            {en:"lungs",cz: "plice" },
            {en:"ovary",cz: "vajecniky" },
            {en:"pancreas",cz: "slinivka brisni" },
            {en:"prostate",cz: "prostata" },
            {en:"small intestine",cz: "tenke strevo" },
            {en:"spinal cord",cz: "micha" },
            {en:"cord",cz: "kabel, snura" },
            {en:"spleen",cz: "slezina" },
            {en:"testicle",cz: "varle" },
            {en:"uterus",cz: "deloha" },
            {en:"backbone",cz: "pater" },
            {en:"hip bone",cz: "panevni kost" },
            {en:"jaw bone",cz: "celist" },
            {en:"kneecap",cz: "ceska" },
            {en:"rib",cz: "zebro" },
            {en:"rib cage",cz: "hrudni kost" },
            {en:"shoulder blade",cz: "lopatka (kost)" },
            {en:"tailbone",cz: "kostrc" },
            {en:"aerial skiing",cz: "akrobaticke lyzovani" },
            {en:"cross-country skiing",cz: "bezecke lyzovani" },
            {en:"downhill skiing",cz: "sjezdove lyzovani" },
            {en:"figure skating",cz: "krasobrusleni" },
            {en:"concede",cz: "priznat se" },
            {en:"embark on a journey",cz: "vydat se na cestu" },
            {en:"gossips",cz: "drby" },
            {en:"kidnapper",cz: "unosce" },
            {en:"rapist",cz: "sexualni nasilnik" },
            {en:"undeniable",cz: "nepopiratelny" },
            {en:"stay out of this",cz: "neplet se do toho" },
            {en:"post office",cz: "posta" },
            {en:"recipient",cz: "prijemce" },
            {en:"envelope",cz: "obalka" },
            {en:"cash on delivery",cz: "dobirka" },
            {en:"stamp",cz: "znamka (postovni)" },
            {en:"postman",cz: "postak" },
            {en:"junk mail",cz: "nevyzadana posta" },
            {en:"wrapping paper",cz: "balici papir" },
            {en:"gash",cz: "sram (na tele)" },
            {en:"sneeze",cz: "kychnuti" },
            {en:"blisters",cz: "puchyre" },
            {en:"treatment",cz: "lecba" },
            {en:"misdemeanour",cz: "prestupek" },
            {en:"crime rate",cz: "kriminalita" },
            {en:"pickpocketing",cz: "kapesni kradeze" },
            {en:"shoplifting",cz: "drobne kradeze (v obchodech)" },
            {en:"arson",cz: "zharstvi" },
            {en:"burglary",cz: "vloupani" },
            {en:"assault",cz: "napadeni" },
            {en:"homicide",cz: "zabiti, vrazda" },
            {en:"hijacking",cz: "unos (letadla)" },
            {en:"fraud",cz: "podvod" },
            {en:"extortion",cz: "vydirani" },
            {en:"tax evasion",cz: "danovy unik" },
            {en:"smuggling",cz: "pasovani" },
            {en:"copyright infringement",cz: "porusovani autorskych prav" },
            {en:"trial",cz: "soudni proces" },
            {en:"court",cz: "soud (instituce)" },
            {en:"lawyer",cz: "pravnik" },
            {en:"victim",cz: "obet" },
            {en:"judgment",cz: "rozsudek" },
            {en:"fine",cz: "pokuta" },
            {en:"imprisonment",cz: "odneti svobody" },
            {en:"death penalty",cz: "trest smrti" },
            {en:"handy",cz: "prakticky, sikovny" },
            {en:"rust",cz: "rez" },
            {en:"oxygen mask",cz: "kyslikova maska" },
            {en:"one-way ticket",cz: "jednosmerna jizenka" },
            {en:"lavatory",cz: "zachod" },
            {en:"itinerary",cz: "itinerar" },
            {en:"duty-free",cz: "bezcelni" },
            {en:"aisle",cz: "ulicka (v letadle)" },
            { en: "tabby cat", cz: "mourovata kocka" },
            { en: "grin", cz: "usmev" },
            { en: "act oddly", cz: "chovat se divne›" },
            { en: "downpour", cz: "lijak (silny dest)" },
            { en: "cloak", cz: "plateny habit" },
            { en: "mumble", cz: "mumlat" },
            { en: "sip", cz: "srkat" },
            { en: "dare", cz: "odvazit se, troufnout si" },
            { en: "suppose", cz: "predpokladat" },
            { en: "yawn", cz: "zivnout" },
            { en: "sign of sleepiness", cz: "znamka ospalosti" },
            { en: "bun", cz: "drdol" },
            { en: "blush", cz: "cervenat se" },
            { en: "handkerchief", cz: "kapesnik" },
            { en: "sleeve", cz: "rukav" },
            { en: "hedge", cz: "zivy plot" },
            { en: "brass", cz: "mosaz" },
            { en: "mantelpiece", cz: "krbova rimsa" },
            { en: "fireplace", cz: "krb" },
            { en: "wig", cz: "paruka" },
            { en: "feast", cz: "hostina" },
            { en: "noble", cz: "uslechtily" },
            { en: "limp", cz: "kulhat" },
            { en: "out of earshot", cz: "pryc z doslechu" },
            { en: "and that's saying something", cz: "a to o necem vypovida" },
            { en: "squint", cz: "silhat" },
            { en: "handle", cz: "klika (na dverich)" },
            { en: "reveal", cz: "odhalit, prozradit" },
            { en: "bishop", cz: "biskup, strelec (sachy)" },
            { en: "castle", cz: "vez (sachy)" },
            { en: "knight", cz: "kun (sachy)" },
            { en: "pawn", cz: "pesec (sachy)" },
            { en: "watering eyes", cz: "slzeni oci" },
            { en: "gulp", cz: "dousek, lok" },
            { en: "hooting", cz: "houkani" },
            { en: "measurement", cz: "mereni" },
            { en: "concerned", cz: "znepokojena, ustarana" },
            { en: "padlock", cz: "visaci zamek" },
            { en: "perch", cz: "bidlo" },
            { en: "shrink", cz: "smrsknout se, zcvrknout se" },
            { en: "haggle", cz: "smlouvat" },
            { en: "soot", cz: "saze" },
            { en: "dung", cz: "hnuj" },
            { en: "stride", cz: "velky krok" },
            { en: "axis", cz: "osa (osa x)" },
            { en: "breakneck", cz: "krkolomny" },
            { en: "quill", cz: "brk (na psani)" },
            { en: "winding staircase", cz: "tocite schodiste" },
            { en: "cobbled street", cz: "ulice z kocicich hlav" },
            { en: "gaze", cz: "hledet, zirat" },
            { en: "forget-me-not", cz: "pomnenka" },
            { en: "shrink", cz: "smrsknout se, zcvrknout se" },
            { en: "shrink", cz: "smrsknout se, zcvrknout se" },
            { en: "shrink", cz: "smrsknout se, zcvrknout se" }
]
//hold random integer 
var random = 0;
/*LANGUAGE SELECTION*/
//inicialization of the global variable SELECTION
//if holds 0, there is no option selected
//if holds 1 there is selected option czech to english
//if holds 2 there is selected option english to czech
var SELECTION = 0;
var languageSelection = "";//this variable holds cz or en, based on what user choose
var languageSelection2 = "";//this variable is support for what user choose



function CZtoEN(){
    SELECTION = 1;
    sessionStorage.setItem('languageSelection', 'cz');
    sessionStorage.setItem('languageSelection2', 'en');
}
function ENtoCZ(){
    SELECTION = 2;
    sessionStorage.setItem('languageSelection', 'en');
    sessionStorage.setItem('languageSelection2', 'cz');
}


//this will check the field by pressing enter
document.addEventListener("keydown", EnterCheckField, false);
function EnterCheckField(e) {
    var keyCode = e.keyCode;
    if (keyCode == 13) {
        check();
    }
}

/*CORE*/
function newWord() {
    random = Math.floor(Math.random() * pole.length) + 1; 
    document.getElementById("newWord").innerHTML = pole[random][sessionStorage.getItem('languageSelection')];
    document.getElementById("result").value = "";
    document.getElementById("result").placeholder = "";
    document.getElementById("result").AUTOFOCUS = true;
}


function smallHint() {
    document.getElementById("result").value = pole[random][sessionStorage.getItem('languageSelection2')][0];
    document.getElementById("result").AUTOFOCUS = true;
}

function biggerHint() {
    if (pole[random][sessionStorage.getItem('languageSelection2')][2] == " ") {
        document.getElementById("result").value = pole[random][sessionStorage.getItem('languageSelection2')][0] + pole[random][sessionStorage.getItem('languageSelection2')][1] + pole[random][sessionStorage.getItem('languageSelection2')][2] + pole[random][sessionStorage.getItem('languageSelection2')][3];
    } else {
        document.getElementById("result").value = pole[random][sessionStorage.getItem('languageSelection2')][0] + pole[random][sessionStorage.getItem('languageSelection2')][1];
    }
}

function check() {

    var inputContent = document.getElementById("result").value;
    
    //if CZ to EN is selected
    if (sessionStorage.getItem('languageSelection') == 'cz') {
        if (inputContent == pole[random][sessionStorage.getItem('languageSelection2')]) {
            document.getElementById("result").style.borderColor = "#00ff00";
            document.getElementById("result").style.borderWidth = "4px";
            newWord();
            document.getElementById("result").value = "";
            /*adding score*/
            var currentScore = document.getElementById("scoreCount").innerHTML;
            var currentScoreI = parseInt(currentScore);
            currentScoreI += 2;
            document.getElementById("scoreCount").innerHTML = currentScoreI;
            /*ADD CLASS AUTOFOCUS!*/
            var greeting = greet();
            document.getElementById("result").placeholder = greeting;
        } else {
            document.getElementById("result").style.borderColor = "red";
            document.getElementById("result").style.borderWidth = "4px";
            /*decrease score*/
            var currentScore2 = document.getElementById("scoreCount").innerHTML;
            var currentScoreI2 = parseInt(currentScore2);
            currentScoreI2 -= 1;
            document.getElementById("scoreCount").innerHTML = currentScoreI2;
            var el = document.getElementById("result");
            el.classList.add("shakeit");
            setTimeout(delay, 1000);
            /*document.getElementById("result").className = "shakeit"*/
        }
    }


    //if EN to CZ is selected
    if (sessionStorage.getItem('languageSelection') == 'en') {
        if (pole[random][sessionStorage.getItem('languageSelection2')].indexOf(inputContent) !== -1) {
            document.getElementById("result").style.borderColor = "#00ff00";
            document.getElementById("result").style.borderWidth = "4px";
            newWord();
            document.getElementById("result").value = "";
            /*adding score*/
            var currentScore = document.getElementById("scoreCount").innerHTML;
            var currentScoreI = parseInt(currentScore);
            currentScoreI += 2;
            document.getElementById("scoreCount").innerHTML = currentScoreI;
            /*ADD CLASS AUTOFOCUS!*/
            var greeting = greet();
            document.getElementById("result").placeholder = greeting;
        } else {
            document.getElementById("result").style.borderColor = "red";
            document.getElementById("result").style.borderWidth = "4px";
            /*decrease score*/
            var currentScore2 = document.getElementById("scoreCount").innerHTML;
            var currentScoreI2 = parseInt(currentScore2);
            currentScoreI2 -= 1;
            document.getElementById("scoreCount").innerHTML = currentScoreI2;
            var el = document.getElementById("result");
            el.classList.add("shakeit");
            setTimeout(delay, 1000);
			}
	}
}

function showMe() {
    document.getElementById("result").value = pole[random][sessionStorage.getItem('languageSelection2')];
}

/*HELP FUNCTIONS*/
function delay() {
    var el = document.getElementById("result");
		el.classList.remove("shakeit");
}

function greet() {
	rannam = 0;
    array = ["Great!", "Awesome!", "Fantastic!", "Amazing!", "Cool!", "Unbelievable!", "Way to go!", "Breathtaking!", "Keep it up!", "Great answer!", "Remarkable!", "Very brave!", "Magnificent!", "Phenomenal!", "Terrific!", "Wonderful!", "Bravo!", "Well done!", "Super!", "Excellent!", "Incredible!", "High five!"];
    rannam = Math.floor(Math.random() * array.length);
	return array[rannam];
}
