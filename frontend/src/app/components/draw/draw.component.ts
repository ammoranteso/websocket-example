import { Component, OnInit } from '@angular/core';
import { SocketWebService } from 'src/app/services/socket-web.service';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {

  constructor(private socketWebService: SocketWebService) {
    socketWebService.callback.subscribe( res => {
    })
   }

  ngOnInit(): void {
    this.socketWebService.emitEvent({})
  }

}
