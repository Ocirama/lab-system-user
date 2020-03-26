import {Component, OnInit} from '@angular/core';
import {ApiService} from '../core/api.service';
import {TabService} from '../tab.service';
import Swal from 'sweetalert2';


interface Tray {
  id: number;
  trayId: string;
  trayWeight: number;
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


  selectedOption = false;
  selectedOption2 = false;

  ngOnInit() {
  }

  swalCalibration() {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2']
    }).queue([
      'Skenuokite padėklą',
      {title: 'Sverkitę padėklą',
        text: ''},
    ]).then((result) => {
      if (result.value) {
        const answers = JSON.stringify(result.value)
        Swal.fire({
          title: 'All done!',
          html: `
        Your answers:
        <pre><code>${answers}</code></pre>
      `,
          confirmButtonText: 'Baigta'
        });
      }
    });
  }

  onSubmit(value) {
    this.api.post('/lei/trays', value).subscribe(data => console.log('Success!', data), error => console.log('Error', error));
  }


  public childFunction(value): void {
    this.api.get(`/lei/trays/${value.trayId}`)
      .subscribe((data) => {
        this.trays = data as any;
      });

  }

}
