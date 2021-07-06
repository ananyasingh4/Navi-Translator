var txtInput = document.querySelector(".text-input");
var btnTranslate = document.querySelector(".button");
var outputDiv = document.querySelector(".text-output");

var serverURL ="https://api.funtranslations.com/translate/navi.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again later")
}

function clickHandler() {
    var inputText = txtInput.value;


fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json =>{
    var transltedText = json.contents.translated;
    outputDiv.innerText = transltedText;
})
.catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)