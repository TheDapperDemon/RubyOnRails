import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: [ './servers.component.css' ]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Created!';
  serverName = 'TestServer';
  serverCreated = false;
  Servers = [ 'TestServer', 'TestServer2' ];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.Servers.push(this.serverName);
    this.serverCreationStatus = 'Server Created! Name of server: ' + this.serverName
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
