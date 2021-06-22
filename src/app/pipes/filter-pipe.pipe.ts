import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  pure:false
})
export class FilterPipePipe implements PipeTransform {
  transform(value: string, filterString: string, propName: any): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArry = [];
    for (const item of value) {
      if (item.match(filterString)) {
        resultArry.push(item);
      }
    }
    return resultArry;
  }
}
