document.getElementById("fars").addEventListener("click" , diri);
document.getElementById("english").addEventListener("click" , diris);


const textArea = document.getElementById('contex');
textArea.addEventListener('input', () => {
    var textLn =  textArea.value;
    document.getElementById('wordspan').innerHTML=getWordCount(textLn);
});


const textAreaa = document.getElementById('contex');
textAreaa.addEventListener('input', () => {
    var textLn =  textAreaa.value;
    document.getElementById('wordspan').innerHTML=getWordCount(textLn);
});

function diri(){
    document.getElementById("contex").style.direction="rtl";
}


function diris(){
    document.getElementById("contex").style.direction="ltr";
}



function getWordCount(str) {
    return str.trim().split(/\s+/).length; 
}
// can be split (" ")