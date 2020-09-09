import {MatPaginatorIntl} from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class MatPaginatorIntlCro extends MatPaginatorIntl {
  itemsPerPageLabel = 'Įrašų kiekis per puslapį';
  nextPageLabel = 'Sekantis puslapis';
  previousPageLabel = 'Buvęs puslapis';
  lastPageLabel: string;
  // tslint:disable-next-line:only-arrow-functions
  getRangeLabel = function(page, pageSize, length) {
    if (length === 0 || pageSize === 0) {
      return '0 iš ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' iš ' + length;
  };


}
