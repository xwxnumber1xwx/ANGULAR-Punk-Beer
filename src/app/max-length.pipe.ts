import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {

  transform(value: string, args?: number): string {
    if (args) {
      if (value.length > args) {
        value = value.substr(0, args);
        value = value + '...';
      }
    } else if (value.length >  100) {
      value = value.substr(0, 100);
      value = value + '...';
    }
    return value;
  }

}
