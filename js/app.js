//  sortear os nomes ao clicar no botao sortear
// mostrar quem foi os sorteados
// reiniciar ao clicar em reiniciar

let sorteador = [];
function adicionar(nomes) {
  let amigo = document.getElementById("nome-amigo");
  if (amigo.value == " ") {
    alert("Escreva um nome para ser adicionado:");
    return;
  }  
    if (sorteador.includes(amigo.value)) {
        alert('Nome já adicionado!');
        return;
    }
   
  let lista = document.getElementById("lista-amigos");
  sorteador.push(amigo.value);
  if (lista.textContent == "") {
    lista.textContent = amigo.value;
  } else {
    lista.textContent = lista.textContent + ", " + amigo.value;
  }
  amigo.value = " ";
}

function sortear() {
  embaralhar(sorteador);
  let sorteio = document.getElementById("lista-sorteio");
  sorteador = sorteador.filter((nome) => nome.trim() !== "");
  if (sorteador.length < 1) {
    alert("Adicione 3 nomes para sortear!");
  } else {
    if (sorteador.length < 3) {
      let contar;
      contar = 3 - sorteador.length;
      let palavras = sorteador.length === 1 ? "nomes" : "nome";
      alert(`Adicione ${contar} ${palavras} para sortear!`);
    } else {
      for (let i = 0; i < sorteador.length; i++) {
        if (i == sorteador.length - 1) {
          sorteio.innerHTML =
            sorteio.innerHTML + sorteador[i] + " --> " + sorteador[0] + "<br/>";
        } else {
          sorteio.innerHTML =
            sorteio.innerHTML +
            sorteador[i] +
            " --> " +
            sorteador[i + 1] +
            "<br/>";
        }
      }
    }
  }
}

function embaralhar(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

function reiniciar() {
  sorteador = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}
