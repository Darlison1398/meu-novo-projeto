function abrir(){
    window.document.getElementById('about')
    window.open("./pasta02/index.html");
}
function voltar(){
    window.document.getElementById('about')
    window.open('./pasta03/index.html');
}

function ir(){
    window.document.getElementsByClassName('ho')
    window.open("./pasta03/index.html");
}

var btn = document.querySelector('back-to-top');
btn.addEventListener('Click', function(){
    window.scrollTo();
})

function goBack(){
    window.document.getElementById('botao')
    window.history.back('index.html');
}

