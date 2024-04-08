import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cmTometers',
  standalone: true
})
export class CmTometersPipe implements PipeTransform {

  transform(value: any, ...args: any[]): String {
  

    const metros = value / 100;
    
    return `${metros.toFixed(2).replace(".",",")}m`;
  }

}
