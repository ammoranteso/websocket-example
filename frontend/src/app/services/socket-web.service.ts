import { EventEmitter, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketWebService extends Socket {
  callback: EventEmitter<any> = new EventEmitter;
  constructor( private cookieService: CookieService) {
    super({
      url: 'http://localhost:4800',
      options: {
        query: {
          nameRoom: cookieService.get('room'),
        }
      }
    })
    this.listen();
   }

   listen = () => {
    this.ioSocket.on('event', (res: any) => this.callback.emit(res))
   }

   emitEvent = (payload = {}) => {
    this.ioSocket.emit('event', payload);
   }

}
