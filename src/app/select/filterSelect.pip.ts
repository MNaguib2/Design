import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterSelectEasy'
})
export class FilterSelectEasy implements PipeTransform {
     transform(value: string[], filterString: string): string[] {
      if (value.length === 0 || filterString.length === 0) {
        return value;
      }
      const resultArray = [];
      for (const item of value) {
        if (item.slice(0, filterString.length).toLowerCase() === filterString.toLowerCase()) {
          resultArray.push(item);
        }
      }
      return resultArray;
      }
 }