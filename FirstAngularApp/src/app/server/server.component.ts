import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [ '.online { color: white; }' ]
})
export class ServerComponent {
    serverID = 19; 
    serverStatus = 'offline';
    @Input() serverName: string

    contructor() {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getServerStatus() {
      return this.serverStatus;
    }

    getColor() {
      return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
