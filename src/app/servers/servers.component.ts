import type { OnInit } from '@angular/core'
import { Component } from '@angular/core'

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {

    public allowNewServer = false
    public serverCreationStatus = 'No server was created!'
    public serverName = 'Testserver'

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true
        }, 2000)
    }

    ngOnInit(): void {
    }

    public onCreateServer(): void {
        this.serverCreationStatus = `Server was created! Name is ${this.serverName}`
    }

    public onUpdateServerName(event: Event): void {
        this.serverName = (event.target as HTMLInputElement).value
    }
}
