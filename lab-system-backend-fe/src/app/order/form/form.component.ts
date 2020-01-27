import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface CustomerGroup {
  letter: string;
  names: string[];
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
  customerForm: FormGroup = this._formBuilder.group({
    customerGroup: '',
  });

  customerGroups: CustomerGroup[] = [{
    letter: 'A',
    names: ['AnyksciuSiluma']
  }, {
    letter: 'D',
    names: ['DBT']
  }];
  customerGroupOptions: Observable<CustomerGroup[]>;


  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.customerGroupOptions = this.customerForm.get('customerGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
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
}


