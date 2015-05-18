/**
 * Created by nurcan_oez on 14.05.15.
 */
function checkBook(){
    if (
        allowAlphabetAndNumbers(document.getElementById("buchtitel")) &&
        allowAlphabet(document.getElementById("buchauthor")) &&
        allowLegalNumbers(document.getElementById("isbn")) &&
        allowLegalNumbers(document.getElementById("kapitel")) &&
        allowLegalYears(document.getElementById("jahr")) &&
        allowLegalNum(document.getElementById("auflage")) &&
        allowAlphabet(document.getElementById("vorname"))&&
        allowAlphabet(document.getElementById("name"))) {
        return true;
    }else {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
        return false;
    }
}

// Buchtitel
function allowAlphabetAndNumbers(elem){
    var regex = /^([a-zA-Z0-9äöüÄÖÜß]+[\s]+)*[a-zA-Z0-9äöüÄÖÜß].*[\.|\?|\!|\@|\:]+$/;
    //chek if its not emty
    if (isEmpty(elem)) {
        markWrongInput(elem);
        return false;
    }
    //check for wrong signs
    if (elem.value.match(regex)) {
        return true;
    } else {
        markWrongInput(elem);
        return false;
    }
}


// Vorname,Name,Buchauthor
function allowAlphabet(elem) {
    var regex = /^([a-zA-ZäöüÄÖÜß]+[\s]+)*[a-zA-ZäöüÄÖÜß]+$/;

    //check if its not emty
    if (isEmpty(elem)) {
        markWrongInput(elem);
        return false;
    }

    //check for wrong signs
    if (elem.value.match(regex)) {
        return true;
    } else {
        markWrongInput(elem);
        return false;
    }
};

// Auflage
function allowNum(elem) {
    var regex = /^([0-9][0-9]|[0-9])+$/;

    //check if its not emty
    if (isEmpty(elem)) {
        markWrongInput(elem);
        return false;
    }

    //check for wrong signs
    if (elem.value.match(regex)) {
        return true;
    } else {
        markWrongInput(elem);
        return false;
    }
};

// isbn
function allowLegalNumbers(elem){
    var regex = /^\d{13}$/;
    //chek if its not emty
    if (isEmpty(elem)) {
        markWrongInput(elem);
        return false;
    }

    //check the length and year <= thisnumber
    if (elem.value.match(regex) && elem.value<=regex) {
        return true;
    } else {
        markWrongInput(elem);
        return false;
    }

};


// Jahr
function allowLegalYears(elem){
    var regex = /^\d{4}$/;
    var aktuellesJahr=new Date().getFullYear();

    //chek if its not emty
    if (isEmpty(elem)) {
        markWrongInput(elem);
        return false;
    }

    //check the length and year <= thisyear
    if (elem.value.match(regex) && elem.value<=aktuellesJahr) {
        return true;
    } else {
        markWrongInput(elem);
        return false;
    }

};

function markWrongInput(elem) {
    elem.setAttribute("class","wrongInput");
    elem.focus();
}


function isEmpty(elem) {
    if (elem.value=="") {
        return true;
    } else {
        return false;
    }
};