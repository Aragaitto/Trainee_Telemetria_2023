import { Server } from 'socket.io';
import { handleBoat } from '../handlers/boat-handlers';
import { handleRaceHistory } from '../handlers/history-handlers';
import { setCoordenate } from '../utils/setCoordenates';
import { convertData } from '../utils/dataProcessing';

export function configureSockets(io: Server): void {
  let dataHistory: string [] = [];
  let record: boolean [] = [];
  let speed: string [] = ['0'];
  //criar uma função para gerar cordenadas em circulo  
  const cordenadas = setCoordenate();

  let coord = 0;
  let intervalo = setInterval(function() {
    if(coord === 100){
      coord = 0;
    }
    coord++;
    let newData = convertData(cordenadas,coord);
    io.emit("info", newData);
  }, 1000);

  io.on('connection', (socket: any) => {
    console.log('new user: ', socket.id);

    handleBoat(socket, io, speed, cordenadas);
    handleRaceHistory(socket, io, dataHistory, record, speed)

    socket.on('disconnect', () => {
      console.log('user disconnected: ', socket.id);
    });
 
  });
}
