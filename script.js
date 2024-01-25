function nextPage(){
    window.location.href = "yes.html";
}

function moveButton(){
    let botaoNao = document.getElementById('noButton')

    let larguraJanela = window.innerWidth;
    let alturaJanela = window.innerHeight;

    let maxX = larguraJanela - botaoNao.offsetWidth;
    let maxY = alturaJanela - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX)
    var aleatorioY = Math.floor(Math.random() * maxY)

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
}