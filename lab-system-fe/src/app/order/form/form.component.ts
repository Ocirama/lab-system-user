import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiService } from '../../core/api.service';


export interface CustomerGroup {
  letter: string;
  names: string[];
}

interface Order {
  id: number;
  protocolId: string;
  customer: string;
  test: string;
  sampleType: string;
  orderAmount: number;
  // date: Date;
}

export interface Sample {
  id: number;
  protocolId: string;
  sampleId: string;
  sampleWeight: number;

}

// tslint:disable-next-line:variable-name
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  words2 = [{value: 'word1'}, {value: 'word2'}, {value: 'word3'}, {value: ''}];

  sampleTypes = ['Skiedros', 'Granulės', 'Atliekos', 'Ligninas', 'Briketai'];
  orders: Order = {} as Order;
  samples: Sample = {} as Sample;
  typeHasError = true;

  SampleArray: Sample[] = [];
  sampleList:Array<Sample> = [];

  @Input() public value: number;


  customerForm: FormGroup = this._formBuilder.group({
    customerGroup: '',
  });

  model: Order[];
  customerGroups: CustomerGroup[] = [{
    letter: 'A',
    names: ['AnyksciuSiluma']
  }, {
    letter: 'D',
    names: ['DBT']
  }];
  customerGroupOptions: Observable<CustomerGroup[]>;


  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder,
              private api: ApiService,
  ) {
  }

  submitted = false;

  ngOnInit() {
    this.samples.sampleWeight = 0;
    // tslint:disable-next-line:no-non-null-assertion
    this.customerGroupOptions = this.customerForm.get('customerGroup')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    );
  }

  public childFunction(value) {
    if (value.orderAmount  < 15) {
      for (var i = 0; i <= value.orderAmount - 1; i++) {
        this.sampleList[i] = new class implements Sample {
          id: number;
          protocolId: string;
          sampleId: string;
          sampleWeight: number;
        }
        this.sampleList[i].protocolId = value.protocolId;
        this.sampleList[i].sampleWeight = 0;
      }
    }else{
      console.error("Too many samples ! Try less than 15.")
    }

  }

  public protocolChange(value) {
    this.samples.protocolId = value;

  }


  validateType(value) {
    if (value === 'default') {
      this.typeHasError = true;
    } else {
      this.typeHasError = false;
    }
  }

  private _filterGroup(value: string): CustomerGroup[] {
    if (value) {
      return this.customerGroups
      .map(group => ({
        letter: group.letter, names: _filter(group.names, value)
      }))
      .filter(group => group.names.length > 0);
    }
    return this.customerGroups;

  }

  onSubmit() {
    this.api.post("/lei/orders", this.orders).subscribe(data => console.log('Success!', data), error => console.log('Error', error))
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

      this.SampleArray = [];
    }
  }

  public clear() {
    this.orders.sampleType = "";
    this.orders.protocolId = "";
    this.orders.test = "";
    this.orders.customer = "";
    this.orders.orderAmount = null;
    this.sampleList = [];
  }
}


