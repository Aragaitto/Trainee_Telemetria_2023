"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBoat = void 0;
const dataProcessing_1 = require("../utils/dataProcessing");
function handleBoat(socket, io, speed, coordenadas, coord) {
    // console.log(data);
    let newData = (0, dataProcessing_1.convertData)(coordenadas, coord);
    //newData.velocidadeBarco = speed[0];
    //console.log(newData)
    io.emit("info", newData);
    socket.on("speed", (data) => {
        speed.pop();
        speed.push(data);
        // console.log(speed[0]);
    });
}
exports.handleBoat = handleBoat;
;
