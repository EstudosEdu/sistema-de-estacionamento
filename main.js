document.querySelector("#add")
.addEventListener("click", addCar);

document.querySelector("#listar")
.addEventListener("click", listarCar);

document.querySelector("#remover")
.addEventListener("click", removeCar);

document.querySelector("#modificar")
.addEventListener("click", editCar);

//Mostrar lista ao carregar a pagina
window.onload = listarCar;

//banco de dados ficticio
let banco = [
  {
   nome: "João",
   placa: "AAA1234",
   vaga: 29
  },
  {nome: "Cleber",
   placa: "BBB1240",
   vaga: 10
  },
  {nome: "Maria",
   placa: "CBA2021",
   vaga: 15
  },
];



//função addCar
function addCar(){
  let pergNome = prompt("Coloque seu Nome:")
  let pergPlaca = prompt("Coloque sua Placa:")
  let pergVaga = prompt("Coloque a vaga desejada:")
  banco.push({
    nome: pergNome,
    placa: pergPlaca,
    vaga: pergVaga
  })

  let tamanho = banco.length
  let ultimoElementoBD = banco[tamanho -1]
  let aviso = `${ultimoElementoBD.nome} foi adicionada(o) ao banco  aperte em "Listar Carros" para ver o novo conteúdo`;
  lista.innerHTML = `<li>${aviso}</li>`

  oculto()
}
  



//função listar
let lista = document.querySelector("#listaTudo")
function listarCar(){
  lista.innerHTML = "";
  for(let i of banco){
    lista.innerHTML += `<tr> <td>${i.nome}</td> <td>${i.vaga}</td> <td>${i.placa}</td> </tr>`;
  }
  visible()
}



//função removerCar
function removeCar(){
  let NumberoVaga = prompt("Qual vaga deseja remover? ")

  for(let i = 0; i < banco.length; i++){
    let valorVaga = banco[i].vaga;
      if(valorVaga == NumberoVaga){
        banco.splice(i, 1);
        listarCar()
      }
  }
}



//função de modificação
function editCar(){
  let upgradeVaga = prompt("Informe a vaga onde está o nome que você deseja modificar as informações:");
  let upNome = prompt("Informe o novo Nome que deseja colocar:")
  let upPlaca = prompt("Informe a nova Placa que deseja colocar:");
  let upVaga = prompt("Informe a Nova vaga: ");

  for(let i = 0; i < banco.length; i++){
    let editVaga = banco[i].vaga;
    if(editVaga == upgradeVaga){
      banco[i].nome = upNome
      banco[i].placa = upPlaca
      banco[i].vaga = upVaga
    }
  }
  listarCar()
}

//função esconder div
function oculto(){
  document.querySelector(".titulo-lista").style.display = "none"
}
function visible(){
  document.querySelector(".titulo-lista").style.display = "flex"
}