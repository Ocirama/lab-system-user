import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ApiService} from '../../core/api.service';
import {DropdownList} from './DropdownList';
import {customerGroups} from './Customers';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material';
import {ModalComponent} from '../modal/modal.component';
import 'sweetalert2/src/sweetalert2.scss';


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
}

export interface Sample {
  id: number;
  protocolId: string;
  sampleId: string;
  sampleWeight: number;

}

export interface Customer {
  id: number;
  title: string;
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

  sampleTypes = ['Skiedros', 'Granulės', 'Atliekos', 'Ligninas', 'Briketai'];
  orders: Order = {} as Order;
  samples: Sample = {} as Sample;
  typeHasError = true;
  customerss: CustomerGroup;
  customers: Array<Customer> = [];


  SampleArray: Sample[] = [];
  sampleList: Array<Sample> = [];
  showVar = false;
  // tslint:disable-next-line:ban-types
  selectedOption: String;


  @Input() public value: number;

  dropdownList = Array<{ item_id: number; item_text: string }>();
  selectedItems = [];
  dropdownSettings = {};


  customerForm: FormGroup = this._formBuilder.group({
    customerGroup: '',
  });

  customerGroupOptions: Observable<CustomerGroup[]>;


  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder,
              private api: ApiService,
              public dialog: MatDialog
  ) {
  }

  submitted = false;

  ngOnInit() {
    this.api.get('/lei/customers')
      .subscribe((users: any) => {
        this.customers = users;
        console.log(this.customers);
        for (const entry of this.customers) {
          console.log(entry);
          const letteri = entry.title.charAt(0);
          const name = entry.title;
          const result = customerGroups.find(({letter}) => letter === letteri);
          result.names.push(name);
          console.log(result);
        }

        console.log(customerGroups);
      });


    this.selectedOption = 'Kuro rūšis';
    this.samples.sampleWeight = 0;
    // tslint:disable-next-line:no-non-null-assertion
    this.customerGroupOptions = this.customerForm.get('customerGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
    this.dropdownList = DropdownList;

    // tslint:disable-next-line:no-unused-expression
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };
  }


  onDropDownClose(items: any) {
    const strings = [];

    for (const item of items) {
      strings.push(item.item_text);
      console.log(strings);
    }
    console.log(strings);
    console.log(strings.join(', '));
    this.orders.test = strings.join(', ');

  }

  delete(titlee: string) {
    const result = this.customers.find(({title}) => title === titlee);
    this.api.delete(`/lei/customers/${result.title}`).subscribe(
      () => this.customers = this.customers.filter(item => item.title !== result.title)
    );
    customerGroups.push();
  }

  public childFunction(value) {
    if (value.orderAmount < 100) {
      for (let i = 0; i <= value.orderAmount - 1; i++) {
        // tslint:disable-next-line:new-parens
        this.sampleList[i] = new class implements Sample {
          id: number;
          protocolId: string;
          sampleId: string;
          sampleWeight: number;
        };
        this.sampleList[i].protocolId = value.protocolId;
        this.sampleList[i].sampleWeight = 0;
      }
    } else {
      console.error('Too many samples ! Try less than 15.');
    }
  }

  toggleChild() {
    this.showVar = !this.showVar;
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
      return customerGroups
        .map(group => ({
          letter: group.letter, names: _filter(group.names, value)
        }))
        .filter(group => group.names.length > 0);
    }
    return customerGroups;
  }

  onSubmit() {
    console.log('to orders', this.orders);
    this.api.post('/lei/orders', this.orders).subscribe(data => console.log('Success!', data), error => console.log('Error', error));
  }

  onSubmit2() {
    console.log('to samples', this.sampleList);
    for (const sample of this.sampleList) {
      setTimeout(() =>
        this.api.post('/lei/samples', sample).subscribe(
          (result: Sample) => {
            const row = this.sampleList.find(item => item.id === result.id);
            if (row) {
              row.protocolId = result.protocolId;
              row.sampleId = result.sampleId;
              row.sampleWeight = result.sampleWeight;
            } else {
              this.sampleList = [...this.sampleList, result];
            }
          }
        ), 1000);

      this.sampleList = [];
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.api.post('/lei/customers', data).subscribe(
          (result: Customer) => {
            const row = this.customers.find(item => item.id === result.id);
            if (row) {
              row.title = result.title;
            } else {
              this.customers = [...this.customers, result];
            }
          }
        );
      }
      this.swalCustomerAdd();
    });
  }

  public clear() {
    this.orders.sampleType = '';
    this.orders.protocolId = '';
    this.orders.test = '';
    this.orders.customer = '';
    this.orders.orderAmount = null;
    this.sampleList = [];
  }

  swalOrderRegister() {
    Swal.fire(
      'Protokolas užregistruotas!',
      '',
      'success'
    );
  }

  swalCustomerAdd() {
    Swal.fire(
      'Užsakovas pridėtas!',
      '',
      'success'
    );
  }

  swalCustomerDelete() {
    Swal.fire(
      'Užsakovas ištrintas.',
      '',
      'success'
    );
  }
}


