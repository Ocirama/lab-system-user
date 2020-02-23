import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { TabService } from './tab.service';

declare var angular: any;
interface Sample {
  id: number;
  protocolId: string;
  sampleId: string;
  sampleWeight: number;

}

@Component({
  selector: 'app-sample-weight',
  templateUrl: './sample-weight.component.html',
  providers: [TabService],
  styleUrls: ['./sample-weight.component.css']
})


export class SampleWeightComponent implements OnInit {
  samples: Sample = {} as Sample;
  sampleList: Array<Sample> = [];
  public sampleArray: Sample[];

  showVar: boolean = false;

  constructor(private api: ApiService) {

  }

  ngOnInit() {
  }

  toggleChild(){
    this.showVar = !this.showVar;
  }

  public newProtocolWeight(value): void {

    this.api.get(`/lei/samples/list/${value}`)
    .subscribe((data) => {
      this.sampleList = <any>data
    })

  }

  public childFunction(value) {
    if (value.length < 15) {
      for (var i = 0; i <= value.length - 1; i++) {
        this.sampleList[i];
      }
    } else {
      console.error("Too many samples ! Try less than 15.")
    }

  }



  submitWeight(sampleList: Array<Sample>) {
    for (let sample of this.sampleList) {
      this.api.post('/lei/samples', sample).subscribe(
        (result: Sample) => {
          const row = this.sampleList.find(item => item.id === result.id);
          if (row) {
            row.protocolId = result.protocolId;
            row.sampleId = result.sampleId;
            row.sampleWeight = result.sampleWeight;
            // row.date = result.date;
          } else {
            this.sampleList = [...this.sampleList, result];
          }
        }
      );
    }
  }

}
