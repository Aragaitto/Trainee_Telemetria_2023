import { Socket } from "socket.io";
import { convertData } from "../utils/dataProcessing";

export function handleBoat(socket: Socket, io: any, speed: string[], coordenadas:any) : void {
  socket.on("speed", (data: string) => {
    speed.pop();
    speed.push(data);
    // console.log(speed[0]);
  });
};
