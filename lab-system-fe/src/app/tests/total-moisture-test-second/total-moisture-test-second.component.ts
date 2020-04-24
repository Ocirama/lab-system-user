import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../core/api.service';
import Swal from 'sweetalert2';

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
  date: string;
  // date: Date;
}

export interface Tray {
  id: number;
  trayId: string;
  trayWeight: number;
}

@Component({
  selector: 'app-total-moisture-test',
  templateUrl: './total-moisture-test-second.component.html',
  styleUrls: ['./total-moisture-test-second.component.css']
})

export class TotalMoistureTestSecondComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  forms: FormGroup[];
  weight: number;

  tray: Tray = {} as Tray;
  // tmArray: Array<TotalMoistureSample> = [];
  tmArray: TotalMoistureSample[] = [];

  formGroup: FormGroup;
  form: FormArray;

  public targetInput = 'input0';
  date: string;


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
      form: this._formBuilder.array([])
    });
  }

  init() {
    return this._formBuilder.group({
      cont1: new FormControl('', [Validators.required]),
      cont2: new FormControl('', [Validators.required])
    });
  }

  addItem() {
    this.form = this.formGroup.get('form') as FormArray;
    this.form.push(this.init());
    this.tmArray.push(
      new class implements TotalMoistureSample {
        date: string;
        id: number;
        protocolId: string;
        sampleId: string;
        trayAndSampleWeightAfter: number;
        trayAndSampleWeightAfterPlus: number;
        trayAndSampleWeightBefore: number;
        trayId: string;
        trayWeight: number;
      });
  }

  sverti(sample: TotalMoistureSample) {
    this.api.get('/lei/scales')
      .subscribe((weight: any) => {
        this.weight = weight;
        sample.trayAndSampleWeightAfter = this.weight;
        sample.date = this.date;
        console.log(this.weight);
      });
  }

  action(sample: TotalMoistureSample) {
    this.api.get(`/lei/trays/${sample.trayId}`).subscribe((tray: any) => {
      this.tray = tray;
      sample.trayWeight = this.tray.trayWeight;
    });
  }

  onSubmit(tm: TotalMoistureSample[]) {
    for (const sample of this.tmArray) {
      console.log(sample);
      this.api.post('/lei/journals/second', sample).subscribe(data => console.log('Success!', data), error => console.log('Error', error));
    }
  }

  ngAfterViewInit() {
    this.setFocus();
  }

  private setFocus() {
    const targetElem = document.getElementById(this.targetInput);
    setTimeout(function waitTargetElem() {
      if (document.body.contains(targetElem)) {
        targetElem.focus();
      } else {
        setTimeout(waitTargetElem, 100);
      }
    }, 100);
  }

  onChange(event: any) {
    const index = String(event.selectedIndex);
    this.targetInput = 'input' + index;
    this.setFocus();
  }

  swalSamplesRegister() {
    if (this.tmArray !== []) {
      Swal.fire(
        ' užregistruotas!',
        '',
        'success'
      );
    } else {
      Swal.fire(
        ' Klaida',
        '',
        'error'
      );
    }

  }

  reset() {
    this.tmArray = [];
  }
}
