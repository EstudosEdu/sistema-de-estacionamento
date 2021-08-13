let banco = [
  {
   nome: "João",
   placa: "AAA1234",
   vaga: 29,
  },
  {
   nome: "Cleber",
   placa: "BBB1240",
   vaga: 10,
  },
  {
   nome: "Maria",
   placa: "CBA2021",
   vaga: 15,
  }
 ];
  
//função add car
  function addCar(){
   banco.push({
    nome: "clara",
    placa: "BLZ1221",
    vaga: 20})
  
     let tamanho = banco.length
  let ultimoElementoBD = banco[tamanho -1]
  
  let aviso = `${ultimoElementoBD.nome} foi adicionada ao banco  aperte em "Listar Carros" para ver o novo conteúdo`;
  lista.innerHTML = `<li>${aviso}</li>`
     }
  
//função listar
  let lista = document.querySelector("#listaTudo")

  
  function listarCar(){
    lista.innerHTML = "";
    for(let i of banco){
     lista.innerHTML += `<tr> <td>${i.nome}</td> <td>${i.vaga}</td> </tr>`;
      }
  }

//função removerCar

  function removeCar(){
    let NumberoVaga = prompt("escreva qual a vaga em que está o carro que deseja apagar:")

    for(let i = 0; i < banco.length; i++){
      let valorVaga = banco[i].vaga;
       if(valorVaga == NumberoVaga){
         banco.splice(i, 1);

          lista.innerHTML = "";
          for(let j of banco){
            lista.innerHTML += `<tr> <td>${j.nome}</td> <td>${j.vaga}</td> </tr>`;
          }
       }
     }
  }




  window.onload = listarCar;


  document.querySelector("#add")
      .addEventListener("click", addCar);
  
   document.querySelector("#listar")
     .addEventListener("click", listarCar);
  
  document.querySelector("#remover")
     .addEventListener("click", removeCar);
  
  document.querySelector("#modificar")
     .addEventListener("click", ()=>{
       confirm("Deseja Modificar?")
  })