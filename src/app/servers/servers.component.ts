import type { OnInit } from '@angular/core'
import { Component } from '@angular/core'

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
    public allowNewServer = false

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true
        }, 2000)
    }

    ngOnInit(): void {
    }

}
