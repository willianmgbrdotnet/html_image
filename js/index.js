/* DOM Document Object Model 
 inclui todos os elementos HTML do documento
 Esta linha de código serve para garantir que o javaScript só será executado 
 quando todos os elementos HTML forem carregados. Impedindo que o JavaScript acesse os 
 elementos antes de estarem disponíveis no DOM*/
//document.addEventListener("DOMContentLoaded", function(){

    /*Primeiro armazena o som mp3 na variável 'audio' */
    let audio = document.getElementById("somMotor");
    /*Segundo, armazena a imagem na variável 'fotoCarro' */
    let fotoCarro = document.getElementById("carro");
    /*Quando ocorrer o evento do mouse passar por cima da imagem, ativará a função de tocar o audio. */
    fotoCarro.addEventListener("mouseover", () => audio.play());

//})
