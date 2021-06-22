import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'shotern',
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit: any) {
    if (value.length > limit) return value.substr(0, limit) + '....';
    else return value;
  }
}
