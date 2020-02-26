function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    // console.log(data);
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);



















// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia);

// const data = new Date(2019, 3, 20); //ano, mes, dia, hora, minuto, segundo e milesimo de segundo

// const data = new Date('2020-01-29 21:32:59.300');
// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Ms', data.getMilliseconds());
// console.log('Dia da semana', data.getDay());
// console.log(data.toString());
// console.log(Date.now());
