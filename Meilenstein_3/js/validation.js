/**
 * Created by nurcan_oez on 15.05.15.
 */

var regexAlphaAndNumber = /^([a-zA-Z0-9äöüÄÖÜß]+[\s]+)*[a-zA-Z0-9äöüÄÖÜß]+$/;
var regexAlpha = /^([a-zA-ZäöüÄÖÜß]+[\s]+)*[a-zA-ZäöüÄÖÜß]+$/;
var regexLegalNumbers = /^\d{13}$/;
var regexLegalNum= /^([0-9][0-9]|[0-9])+$/;
var regexYear = /^\d{4}$/;
var wrongElem = undefined;


function test(elem, regex, validate, actionWrong)
{
    if(actionWrong != undefined && typeof(actionWrong) == 'function') // action when validation failed
    {
        if(validate != undefined && typeof(validate) == 'function') // extra validate function
        {
            if(elem.value.match(regex) && validate(elem))
                return true;
            else
            {
                actionWrong(elem);
                return false;
            }
        }
        else
        {
            if(elem.value.match(regex))
                return true;
            else
            {
                actionWrong(elem);
                return false;
            }
        }
    }
    else
    {
        if(validate != undefined && typeof(validate) == 'function')
            return elem.value.match(regex) && validate(elem);
        else
            return elem.value.match(regex);
    }
}

function validateYear(elem)
{
    var curYear=new Date().getFullYear();
    return elem.value <= curYear;
}

function markAsWrong(elem)
{
    elem.classList.add("wrongInput");

    if(wrongElem == undefined)
        wrongElem = elem;
}

function removeAllMarkings()
{
    var elements = document.getElementsByClassName("wrongInput");

    for(var elem = 0; elem < elements.length; elem++)
        removeMarking(elements[elem]);
}

function removeMarking(elem)
{
    elem.classList.remove("wrongInput");
    wrongElem = undefined;
}

function checkBook()
{
    removeAllMarkings();

    var buchtitel = document.getElementById("buchtitel");
    var buchauthor = document.getElementById("buchautor");
    var isbn = document.getElementById("isbn");
    var kapitel = document.getElementById("kapitel");
    var year = document.getElementById("year");
    var auflage = document.getElementById("auflage");
    var vorname = document.getElementById("vorname");
    var name = document.getElementById("name");


    var flag = test(buchtitel, regexAlphaAndNumber, null, markAsWrong) &
        test(buchauthor, regexAlpha, null, markAsWrong) &
        test(isbn, regexLegalNumbers, null, markAsWrong) &
        test(kapitel, regexLegalNumbers, null, markAsWrong) &
        test(year, regexYear, validateYear, markAsWrong) &
        test(auflage, regexLegalNum, null, markAsWrong) &
        test(vorname, regexAlpha, null, markAsWrong) &
        test(name, regexAlpha, null, markAsWrong) ;


    if(!flag)
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");

    if(wrongElem != undefined)
        wrongElem.focus();

    return flag ? true : false;
}
