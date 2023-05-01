import { Data } from "../interfaces/Data";
import moment from 'moment-timezone';

export function getDataAtualBrasil(): moment.Moment {
  const dataAtual = moment().tz('America/Sao_Paulo');
  return dataAtual;
}

export function convertData(coordenadas: any, coord: any) : any {

  let i = 0; // índice para percorrer os pontos do círculo

  // atualizar dados aleatórios
  let corMotor = 60 + Math.floor(Math.random() * 20);
  let corBaterias = 70 + Math.floor(Math.random() * 20);
  let temp = 25 + Math.floor(Math.random() * 5);
  let umi = Math.floor(Math.random() * 100);
  let tAlimentacaoPCB = 12 + Math.floor(Math.random() * 2);
  let stateStringSolar1 = Math.floor(Math.random() * 2);
  let stateStringSolar2 = Math.floor(Math.random() * 2);
  let tSaidaMPPT = 48 + Math.floor(Math.random() * 3);
  let tEntradaMPPT = 60 + Math.floor(Math.random() * 15);
  let corMPPT =  5 + Math.floor(Math.random() * 10);
  //let updtAt = new Date().toLocaleString();
  let spd = 15 + Math.floor(Math.random() * 5);


return {
    correnteMotor: String(corMotor),
    correnteBaterias: String(corBaterias),
    temperatura: String(temp),
    umidade: String(umi),
    tensaoAlimentacaoPCB: String(tAlimentacaoPCB),
    estadoStringSolar1: String(stateStringSolar1),
    estadoStringSolar2: String(stateStringSolar2),
    tensaoSaidaMPPT: String(tSaidaMPPT),
    tensaoEntradaMPPT: String(tEntradaMPPT),
    correnteMPPT: String(corMPPT),
    velocidadeBarco: String(spd),
    latitude: String(coordenadas[coord].lat),
    longitude: String(coordenadas[coord].lon),
    updateAt: getDataAtualBrasil().format('DD/MM/YYYY HH:mm:ss')
  }  
}
