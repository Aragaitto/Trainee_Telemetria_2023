"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureSockets = void 0;
const boat_handlers_1 = require("../handlers/boat-handlers");
const history_handlers_1 = require("../handlers/history-handlers");
const setCoordenates_1 = require("../utils/setCoordenates");
const dataProcessing_1 = require("../utils/dataProcessing");
function configureSockets(io) {
    let dataHistory = [];
    let record = [];
    let speed = ['0'];
    //criar uma função para gerar cordenadas em circulo  
    const cordenadas = (0, setCoordenates_1.setCoordenate)();
    let coord = 0;
    let intervalo = setInterval(function () {
        if (coord === 100) {
            coord = 0;
        }
        coord++;
        let newData = (0, dataProcessing_1.convertData)(cordenadas, coord);
        io.emit("info", newData);
    }, 1000);
    io.on('connection', (socket) => {
        console.log('new user: ', socket.id);
        (0, boat_handlers_1.handleBoat)(socket, io, speed, cordenadas);
        (0, history_handlers_1.handleRaceHistory)(socket, io, dataHistory, record, speed);
        socket.on('disconnect', () => {
            console.log('user disconnected: ', socket.id);
        });
    });
}
exports.configureSockets = configureSockets;
