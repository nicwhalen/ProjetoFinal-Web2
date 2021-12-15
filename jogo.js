const jogador1 = "Jogador 1";
const jogador2 = "Jogador 2";

var vez = jogador1;
var terminado = false;

atualiza_vez();
inicializar_espaços();

function atualiza_vez(){
    if (terminado) {
        return;
    }
    let jogador;

    if (vez == jogador1){
        jogador = document.querySelector("#nome1");
    }else{
        jogador = document.querySelector("#nome2");
    }
    var vez_p = document.getElementById("vez");
    vez_p.textContent = jogador.value;   
}

function inicializar_espaços(){
    var espaços = document.getElementsByClassName("espaço");
    for (var i = 0; i < espaços.length; i++) {
        espaços[i].addEventListener("click", function(){
            if (terminado) {
                return;
            }

            let jogador;

            if (this.getElementsByTagName("img").length == 0){
                if (vez == jogador1){
                    jogador = document.querySelector("#nome1").value;
                    this.innerHTML = jogador;
                    this.setAttribute("jogada", jogador1);
                    vez = jogador2;
                }else{
                    jogador = document.querySelector("#nome2").value;
                    this.innerHTML = jogador;
                    this.setAttribute("jogada", jogador2);
                    vez = jogador1;
                    }
            atualiza_vez();
            verificar_vencedor();
            }
        });
    }
}

async function verificar_vencedor(){
    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var vencedor = "";

    if(((a1 == b1 && a1 == c1) || (a1 == a2 && a1 == a3) || (a1 == b2 && a1 == c3)) && a1 != ""){
        vencedor = a1;
    }
    else if(((b2 == b1 && b2 == b3) || (b2 == a2 && b2 == c2) || (b2 == a3 && b2 == c1)) && b2 != ""){
        vencedor = b2;
    }
    else if(((c3 == c2 && c3 == c1) || (c3 == b3 && c3 == a3)) && c3 != ""){
        vencedor = c3;
    }

    if (vencedor != ""){
        terminado = true;
        await sleep(50);
        alert("O vencedor foi o: " + vencedor + "");
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function botao(){
    window.location.reload();
} 

function button(){
    jogador = document.querySelector("#nome1");
    var vez_p = document.getElementById("vez");
    vez_p.textContent = jogador.value;
}