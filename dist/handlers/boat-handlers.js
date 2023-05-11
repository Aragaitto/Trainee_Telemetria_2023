"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBoat = void 0;
function handleBoat(socket, io, speed, coordenadas) {
    socket.on("speed", (data) => {
        speed.pop();
        speed.push(data);
        // console.log(speed[0]);
    });
}
exports.handleBoat = handleBoat;
;
