import { Server } from 'socket.io';
import { handleBoat } from '../handlers/boat-handlers';
import { handleRaceHistory } from '../handlers/history-handlers';
import { setCoordenate } from '../utils/setCoordenates';

export function configureSockets(io: Server): void {
  let dataHistory: string [] = [];
  let record: boolean [] = [];
  let speed: string [] = ['0'];
  //criar uma função para gerar cordenadas em circulo  
  const cordenadas = setCoordenate();
  let coord = 0;

  io.on('connection', (socket: any) => {
    console.log('new user: ', socket.id);

    let intervalo = setInterval(function() {
      if(coord === 100){
        coord = 0;
      }
      handleBoat(socket, io, speed, cordenadas, coord);
      handleRaceHistory(socket, io, dataHistory, record, speed)
      coord++;
    }, 1000);

    socket.on('disconnect', () => {
      clearInterval(intervalo);
      console.log('user disconnected: ', socket.id);
    });
 
  });
}
