import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { TabService } from '../tab.service';


interface Tray {
  id: number
  trayId: string
  trayWeight: number
}

@Component({
  selector: 'app-tray',
  templateUrl: './tray.component.html',
  providers: [TabService],
  styleUrls: ['./tray.component.css']
})
export class TrayComponent implements OnInit {
  trays: Tray = {} as Tray;

  constructor(private api: ApiService) {
  }


  selectedOption: boolean = false;
  selectedOption2: boolean = false;

  ngOnInit() {
  }

  onSubmit(value) {
    this.api.post("/lei/trays", value).subscribe(data => console.log('Success!', data), error => console.log('Error', error))
  }


  public childFunction(value): void {
    this.api.get(`/lei/trays/${value.trayId}`)
    .subscribe((data) => {
      this.trays = <any>data
    })

  }

}
