document.getElementById("fars").addEventListener("click" , diri);
document.getElementById("english").addEventListener("click" , diris);
document.getElementById("contex").addEventListener("keyupw" , diris);
document.getElementById("contex").addEventListener("input" , letlive)
const textArea = document.getElementById('contex');
textArea.addEventListener('input', wordlive);


function diri(){
    document.getElementById("contex").style.direction="rtl";
}


function diris(){
    document.getElementById("contex").style.direction="ltr";
}



function wordlive(){
    var textLn =  textArea.value;
    var con = document.getElementById("contex")
    if(textLn == "" || textLn == null){
        document.getElementById("wordspan").innerHTML="0";
    }
    else{
        document.getElementById('wordspan').innerHTML=getWordCount(textLn);
    }
}


function getWordCount(str) {
    return str.trim().split(/\s+/).length; 
}
// can be split (" ")



function letlive(){
    var shomar = document.getElementById("contex").value.replace(/[^a-z]/gi, "").length;
    document.getElementById("letspan").innerHTML=shomar;
}


function khali(){
    var a  = document.getElementById("contex").value
    if(a == "salam"){
        document.getElementById("wordspan").innerHTML="3";
    }
}