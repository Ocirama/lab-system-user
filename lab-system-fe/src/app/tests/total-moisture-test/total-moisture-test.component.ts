import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../core/api.service';

interface Sample {
  id: number;
  protocolId: string;
  sampleId: string;
  sampleWeight: number;
}

interface TotalMoistureSample {
  id: number;
  protocolId: string;
  sampleId: string;
  trayId: string;
  trayWeight: number;
  trayAndSampleWeightBefore: number;
  trayAndSampleWeightAfter: number;
  trayAndSampleWeightAfterPlus: number;
  // date: Date;
}

@Component({
  selector: 'app-total-moisture-test',
  templateUrl: './total-moisture-test.component.html',
  styleUrls: ['./total-moisture-test.component.css']
})

export class TotalMoistureTestComponent implements OnInit {
  samples: Sample = {} as Sample;
  tmsamples: TotalMoistureSample = {} as TotalMoistureSample;
  sampleList: Array<Sample> = [];
  public sampleArray: Sample[];
  tmsampleList:Array<TotalMoistureSample> = [];
  showVar: boolean = false;

  constructor(private api: ApiService) {

  }

  ngOnInit() {
  }

  toggleChild(){
    this.showVar = !this.showVar;
  }
  public toggleSamples(value) {
    if (value.length < 15) {
      for (var i = 0; i <= value.length - 1; i++) {
        this.toggleList(this.sampleList[i]);
      }
    } else {
      console.error("Too many samples ! Try less than 15.")
    }

  }
  toggleList(value){
    for(var i = 0; i <= 2 - i; i++){
       this.tmsampleList[i] = new class implements TotalMoistureSample {
         id: number;
         protocolId: string;
         sampleId: string;
         trayId: string;
         trayWeight: number;
         trayAndSampleWeightBefore: number;
         trayAndSampleWeightAfter: number;
         trayAndSampleWeightAfterPlus: number;
       }
     console.log(this.tmsampleList);
    }
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
