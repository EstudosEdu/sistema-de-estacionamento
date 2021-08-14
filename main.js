window.onload = listarCar;

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
  
  oculto()
  close_RM_Car()
  }
  
//função listar
  let lista = document.querySelector("#listaTudo")

  
  function listarCar(){
    lista.innerHTML = "";
    for(let i of banco){
     lista.innerHTML += `<tr> <td>${i.nome}</td> <td>${i.vaga}</td> </tr>`;
      }

    visible()
    close_RM_Car()
  }

//função removerCar

  //form que abre ao apertar em remover



  function removeCar(){
    // let NumberoVaga = prompt("Qual vaga deseja remover? ")
    open_RM_Car()

    for(let i = 0; i < banco.length; i++){
      let valorVaga = banco[i].vaga;
       if(valorVaga == NumberoVaga){
         banco.splice(i, 1);

         listarCar()
       }

     }
  }

  const inputRemoverCar = document.querySelector("#campo_1").value;
  document.querySelector(".cp_2_Enviar")
    .addEventListener("click", avisoRemoverCar);

  function avisoRemoverCar(e){
    inputRemoverCar.value = "";//faz com que remova o valor digitado anteriormente e deixando em branco
    close_RM_Car()

    e.preventDefault();
  }


  function close_RM_Car(){
    document.querySelector(".form_RM_Car").style.display = "none"
  }
  function open_RM_Car(){
    document.querySelector(".form_RM_Car").style.display = "flex"
  }


  //função esconder div
  function oculto(){
    document.querySelector(".titulo-lista").style.display = "none"
  }
  function visible(){
    document.querySelector(".titulo-lista").style.display = "flex"
  }







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



