function zeroEsquerda(num){
  return num >=10 ? num:`0${num}`
}
function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() +1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getMonth());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data = new Date();
const dataBrasil = formataData(data);



const printdate = document.querySelector('.container h1');
function mostrarhtml(){
    return `Hoje é ${dataBrasil}`
}

//AQUI VOU PEGAR O DIA DA SEMANA
function dia(){
  const diaSemana = data.getDay();
  if (diaSemana == 1){
      return 'Segunda-feira'
  }else if (diaSemana == 1){
      return 'Terça-feira'
  }else if (diaSemana == 3){
      return 'Quarta-feira'
  }else if (diaSemana == 4){
      return 'Quinta-feira'
  }else if (diaSemana == 5){
      return 'Sexta-feira'
  }else if (diaSemana == 6){
      return 'Sábado'
  }else if (diaSemana == 0){
      return 'Domingo'
  }
}
//Aqui eu vou pegar o dia da semana
function pegaDiaNumero(){
  const diaNumero = zeroEsquerda(data.getDate());
  return diaNumero
}
//Aqui eu vou pegar o Mês
function pegaMes(){
  const numeroMes = data.getMonth() + 1
  if (numeroMes == 1) {
    return 'Janeiro'
  }else if (numeroMes == 2) {
    return 'Fevereiro'
  }else if (numeroMes == 3) {
    return 'Março'
  }else if (numeroMes == 4) {
    return 'Abril'
  }else if (numeroMes == 5) {
    return 'Maio'
  }else if (numeroMes == 6) {
    return 'Junho'
  }else if (numeroMes == 7) {
    return 'Julho'
  }else if (numeroMes == 8) {
    return 'Agosto'
  }else if (numeroMes == 9) {
    return 'Setembro'
  }else if (numeroMes == 10) {
    return 'Outubro'
  }else if (numeroMes == 11) {
    return 'Novembro'
  }else if (numeroMes == 12) {
    return 'Dezembro'
  }

}
//AQUI EU VOU PEGAR O ANO
function pegaAno(){
  const ano = data.getFullYear()
  return ano

}

//AGORA VOU PEGAR A HORA
function pegaHora(){
  const hora = zeroEsquerda(data.getHours());
  return hora
}
//E POR ULTIMO OS MINUTOS
function pegaMinutos(){
  const minutos = zeroEsquerda(data.getMinutes())
  return minutos
}

printdate.innerHTML =`${dia()}, ${pegaDiaNumero()} de ${pegaMes()} de ${pegaAno()} <br> ${pegaHora()}:${pegaMinutos()}`



