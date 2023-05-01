"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertData = exports.getDataAtualBrasil = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
function getDataAtualBrasil() {
    const dataAtual = (0, moment_timezone_1.default)().tz('America/Sao_Paulo');
    return dataAtual;
}
exports.getDataAtualBrasil = getDataAtualBrasil;
function convertData(coordenadas, coord) {
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
    let corMPPT = 5 + Math.floor(Math.random() * 10);
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
    };
}
exports.convertData = convertData;
