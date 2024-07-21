// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return Object.keys(it).some(key => {
        return it[key] && it[key].toString().toLowerCase().includes(searchText);
      });
    });
  }

}
