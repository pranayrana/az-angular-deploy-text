import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimAndUpperPipe implements PipeTransform {

  transform(value?: string, isupper?: boolean): string {
    if(!value)
      return '';
    if(isupper)
     value = value.toUpperCase();
    return value.trim();
  }

}
