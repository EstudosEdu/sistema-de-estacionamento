//banco de dados
let banco = [
  {
    nome: 'João',
    placa: 'AAA1234',
    vaga: 29
  },
  {
    nome: 'Cleber',
    placa: 'BBB1240',
    vaga: 10
  },
  {
    nome: 'Maria',
    placa: 'CBA2021',
    vaga: 15
  }
]

window.onload = listarCar

//função listar veiculos
function listarCar() {
  let lista = document.querySelector('#listaTudo')

  lista.innerHTML = ''
  for (let i of banco) {
    lista.innerHTML += `
      <tr>
        <td>${i.nome}</td>
        <td>${i.placa}</td>
        <td>${i.vaga}</td>
        <td>
          <label 
            style="cursor: pointer;"
            onclick="preparaEdicao(${i.vaga})"
          >
          <img src="assets/img/pencil-square_white.svg" alt="Remover" width="20px">
          </label>
          -
          <label 
            style="cursor: pointer;"
            onclick="removeCar(${i.vaga})"
          >
          <img src="assets/img/trash_white.svg" alt="Remover" width="20px">
          </label>
        </td>
      </tr>`
  }

  document.querySelector('#ConfirmeEdit').style.display = 'none'
  document.querySelector('#ConfirmeAdd').style.display = 'inline'
}

function limpaTudo(){
  document.querySelector('#addNome').value = ''
  document.querySelector('#addPlaca').value = ''
  document.querySelector('#addVaga').value = ''
}

//função Adicionar veiculo
function addCar() {
  let addNome = document.querySelector('#addNome').value
  let addPlaca = document.querySelector('#addPlaca').value
  let addVaga = document.querySelector('#addVaga').value
  let jaExiste = false
  
  verifcPlaca(addNome, addPlaca, addVaga, jaExiste)
}

function verifcPlaca(addNome, addPlaca, addVaga, jaExiste){
  let regexPlaca1 = /([A-Z]{3})([0-9]{4})/gi;
  let regexPlaca2 = /([A-Z]{3})([0-9]{1})([A-Z]{1})([0-9]{2})/gi;

  let resul1 = regexPlaca1.test(addPlaca);
  let resul2 = regexPlaca2.test(addPlaca);

  if(resul1){
    adicionaCar(addNome, addPlaca, addVaga, jaExiste);

  }else if(resul2){
    adicionaCar(addNome, addPlaca, addVaga, jaExiste);

  }else{
    alert('Modelo de Placa INVALIDA!!!')
  }
} 

function adicionaCar(addNome, addPlaca, addVaga, jaExiste){
  for (let i = 0; i < banco.length; i++) {
    let vaga = banco[i].vaga

    if (vaga == addVaga) {
      jaExiste = true 
    } else if (jaExiste) {
      break
    }
  }

  if (jaExiste) {
    alert('Já existem veículos nesta "VAGA"...')
  } else {
    if ((addNome && addPlaca && addVaga != '') || null) {
      banco.push({
        nome: addNome,
        placa: addPlaca.toUpperCase(),
        vaga: Number(addVaga)
      })
      limpaTudo()
    } else {
      alert('Coloque todos os valores')
    }
  }

  listarCar()
}

//função que prepara para modificação
function preparaEdicao(vaga) {
  let vagaEdit = vaga

  for (let i = 0; i < banco.length; i++) {
    let editVaga = banco[i].vaga
    if (editVaga == vagaEdit) {
      document.querySelector('#addNome').value = banco[i].nome
      document.querySelector('#addPlaca').value = banco[i].placa
      document.querySelector('#addVaga').value = banco[i].vaga
      document.querySelector('#addVaga').setAttribute('disabled', true)
    }

    document.querySelector('#titleForm').innerHTML = 'Editar Veiculo'

    document.querySelector('#ConfirmeEdit').style.display = 'inline'
    document.querySelector('#ConfirmeAdd').style.display = 'none'
  }
}

//função que conclui a modificação
function concluirEdicao() {
  let editNome = document.querySelector('#addNome').value
  let editPlaca = document.querySelector('#addPlaca').value
  let editVaga = document.querySelector('#addVaga').value

  if (editVaga != '' || null) {
    for (let i = 0; i < banco.length; i++) {
      let editaVaga = banco[i].vaga
      if (editaVaga == editVaga) {
        ;(banco[i].nome = editNome),
          (banco[i].placa = editPlaca),
          (banco[i].vaga = editVaga)
      }
    }
  } else {
    alert('Valor indefinido ao Vaga, por favor preencha esse campo!')
  }
  listarCar()
  limpaTudo()

  document.querySelector('#titleForm').innerHTML = 'Adicionar veiculo'
}

//função para remover um veiculo
function removeCar(vaga) {
  let removeCar = vaga
  if(confirm('Deseja deletar?')){
    for (let i = 0; i < banco.length; i++) {
      let valorVaga = banco[i].vaga
      if (valorVaga == removeCar) {
        banco.splice(i, 1)
        listarCar()
        limpaTudo()
      }
    }
  }
}
