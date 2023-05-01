import { Socket } from "socket.io";
import { convertData } from "../utils/dataProcessing";

export function handleBoat(socket: Socket, io: any, speed: string[], coordenadas:any, coord :any) : void {

    // console.log(data);
    let newData = convertData(coordenadas,coord);
    //newData.velocidadeBarco = speed[0];
    //console.log(newData)
    io.emit("info", newData);


  socket.on("speed", (data: string) => {
    speed.pop();
    speed.push(data);
    // console.log(speed[0]);
  });
};
