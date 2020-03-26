import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../core/api.service';

interface Sample {
  id: number;
  protocolId: string;
  sampleId: string;
  sampleWeight: number;
}

export interface TotalMoistureSample {
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

export interface Tray {
  id: number;
  trayId: string;
  trayWeight: number;
}

@Component({
  selector: 'app-total-moisture-test',
  templateUrl: './total-moisture-test.component.html',
  styleUrls: ['./total-moisture-test.component.css']
})

export class TotalMoistureTestComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  weight: number;
  tmes: TotalMoistureSample = {} as TotalMoistureSample;
  samples: Sample[];
  tray: Tray = {} as Tray;
  tmArray: Array<{
    id: number,
    protocolId: string,
    sampleId: string,
    trayId: string,
    trayWeight: number,
    trayAndSampleWeightBefore: number,
    trayAndSampleWeightAfter: number,
    trayAndSampleWeightAfterPlus: number
  }> = [];
  formGroup: FormGroup;
  form: FormArray;
  newArray = [];

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder,
              private api: ApiService) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      primaryCtrl: ['', Validators.required],
      secondaryCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });

    this.formGroup = this._formBuilder.group({
      form: this._formBuilder.array([this.init()])
    });
    this.addItem();
  }

  init() {
    return this._formBuilder.group({
      cont: new FormControl('', [Validators.required]),
    });
  }

  addItem() {
    this.form = this.formGroup.get('form') as FormArray;
    this.form.push(this.init());
  }


  sverti(sample: TotalMoistureSample) {
    this.api.get('/lei/scales')
      .subscribe((weight: any) => {
        this.weight = weight;
        sample.trayAndSampleWeightBefore = this.weight;
        console.log(this.weight);
      });
  }

  getSamplesByProtocol(protocol: any) {
    this.api.get(`/lei/samples/list/${protocol}`).subscribe((samples: any) => {
      this.samples = samples;
      console.log(this.samples);
      for (const sample of this.samples) {
        for (let i = 1; i <= 2; i++) {
          this.tmes = new class implements TotalMoistureSample {
            id: number;
            protocolId: string;
            sampleId: string;
            trayAndSampleWeightAfter: number;
            trayAndSampleWeightAfterPlus: number;
            trayAndSampleWeightBefore: number;
            trayId: string;
            trayWeight: number;
          };
          this.tmes.sampleId = sample.sampleId;
          this.tmes.protocolId = sample.protocolId;
          this.tmArray.push(this.tmes);
        }
      }
    });
    console.log(this.tmes);
    console.log(this.tmArray);
  }

  action(sample: TotalMoistureSample) {
    this.api.get(`/lei/trays/${sample.trayId}`).subscribe((tray: any) => {
      this.tray = tray;

      sample.trayWeight = this.tray.trayWeight;
    });
  }
}
