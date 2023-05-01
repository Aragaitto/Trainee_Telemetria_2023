"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureSockets = void 0;
const boat_handlers_1 = require("../handlers/boat-handlers");
const history_handlers_1 = require("../handlers/history-handlers");
const setCoordenates_1 = require("../utils/setCoordenates");
function configureSockets(io) {
    let dataHistory = [];
    let record = [];
    let speed = ['0'];
    //criar uma função para gerar cordenadas em circulo  
    const cordenadas = (0, setCoordenates_1.setCoordenate)();
    let coord = 0;
    io.on('connection', (socket) => {
        console.log('new user: ', socket.id);
        let intervalo = setInterval(function () {
            if (coord === 100) {
                coord = 0;
            }
            (0, boat_handlers_1.handleBoat)(socket, io, speed, cordenadas, coord);
            (0, history_handlers_1.handleRaceHistory)(socket, io, dataHistory, record, speed);
            coord++;
        }, 1000);
        socket.on('disconnect', () => {
            clearInterval(intervalo);
            console.log('user disconnected: ', socket.id);
        });
    });
}
exports.configureSockets = configureSockets;
