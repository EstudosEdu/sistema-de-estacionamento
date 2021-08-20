document.querySelector("#addConfirme")
  .addEventListener("click", addCar);

document.querySelector("#removeConfirm")
  .addEventListener("click", removeCar);

document.querySelector("#editConfirm")
  .addEventListener("click", alteraEdit);


//Variaveis
let lista = document.querySelector("#listaTudo")
let pergNome = '';
let pergPlaca = '';
let pergVaga = null;

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

//função listar
function listarCar(){
  lista.innerHTML = "";
  for(let i of banco){
    lista.innerHTML += `<tr> <td>${i.nome}</td> <td>${i.placa}</td><td>${i.vaga}</td> </tr>`;
  }
}

//função Adicionar Carro
function addCar() {
  let addNome = document.querySelector('#addNome').value
  let addPlaca = document.querySelector('#addPlaca').value
  let addVaga = document.querySelector('#addVaga').value

  if(addNome && addPlaca && addVaga != '' || null){
  banco.push({
    nome: addNome,
    placa: addPlaca,
    vaga: Number(addVaga),
    });
  }else{
    alert('Coloque todos os valores')
  }
  listarCar()
  
  document.querySelector('#addNome').value = '';
  document.querySelector('#addPlaca').value = '';
  document.querySelector('#addVaga').value = null;
}

//função de modificação

let editAtualizar = document.querySelector('#editAtualizar')
  .addEventListener("click", testeEdit)

function testeEdit(){
  let vagaEdit = document.querySelector('#editValorVaga').value

  for(let i = 0; i < banco.length; i++){
  let editVaga = banco[i].vaga;
    if(editVaga == vagaEdit){
      document.querySelector('#editNome').value = banco[i].nome
      document.querySelector('#editPlaca').value = banco[i].placa
      document.querySelector('#editVaga').value = banco[i].vaga
    }
  }

}

//ao confirmar chama essa função que altera os dados lá no banco
function alteraEdit(){
  let editNome = document.querySelector('#editNome').value
  let editPlaca = document.querySelector('#editPlaca').value
  let editVaga = document.querySelector('#editVaga').value
  let vagaEdit = document.querySelector('#editValorVaga').value

  if(vagaEdit != '' || null){
    for(let i = 0; i < banco.length; i++){
    let editVaga = banco[i].vaga;
      if(editVaga == vagaEdit){
        banco[i].nome = editNome,
        banco[i].placa = editPlaca,
        banco[i].vaga = editVaga
      }
    }
  }else{
    alert('Valor indefinido ao Vaga, por favor preencha esse campo!')
  }
  listarCar()
}


function editCar(){
  editUpgradeVaga();
  alert("Veiculo Modificado com sucesso.")
  listarCar()
}

function editUpgradeVaga(){
  let upgradeVaga = prompt('Informe a vaga onde está o "Veiculo" que você deseja modificar as informações:');

  if(upgradeVaga !== '' || null){
    editVerifcNome(upgradeVaga)
  }else{
    alert('Campo não preenchido preencha por favor!')
    editUpgradeVaga()
  }
}

function editVerifcNome(upgradeVaga){
  let upNome = prompt("Informe o novo Nome que deseja colocar:")

  if(upNome !== '' || null){
    editVerifcPlaca(upgradeVaga, upNome)
  }else{
    alert('Campo não preenchido preencha por favor!')
    editVerifcNome()
  }
}

function editVerifcPlaca(upgradeVaga, upNome){
  let upPlaca = prompt("Informe a nova Placa que deseja colocar:");

  if(upPlaca !== '' || null){
    editVerifcVaga(upgradeVaga, upNome, upPlaca)
  }else{
    alert('Campo não preenchido preencha por favor!')
    editVerifcPlaca()
  }
}

function editVerifcVaga(upgradeVaga, upNome, upPlaca){
  let upVaga = prompt("Informe a Nova vaga: ");

  if(upVaga !== '' || null){
    editForData(upgradeVaga, upNome, upPlaca, upVaga)
  }else{
    alert('Campo não preenchido preencha por favor!')
    editVerifcVaga()
  }
}

function editForData(upgradeVaga, upNome, upPlaca, upVaga){
  if (upgradeVaga && upNome && upPlaca && upVaga != '' || null) {
    addEditDataBase(upgradeVaga, upNome, upPlaca, upVaga);
  }
}

function addEditDataBase(upgradeVaga, upNome, upPlaca, upVaga){
  for(let i = 0; i < banco.length; i++){
    let editVaga = banco[i].vaga;
    if(editVaga == upgradeVaga){
      banco[i].nome = upNome,
      banco[i].placa = upPlaca,
      banco[i].vaga = upVaga
    }
  }
}

//função removerCar
function removeCar(){
  let removeCar = document.querySelector('#removeVaga').value

  if(removeCar != '' || null){
    for(let i = 0; i < banco.length; i++){
      let valorVaga = banco[i].vaga;
        if(valorVaga == removeCar){
          banco.splice(i, 1);
          listarCar();
        }
    }
  }else{
    alert("Coloque todos os valores")
  }
  document.querySelector('#removeVaga').value = null;
}
