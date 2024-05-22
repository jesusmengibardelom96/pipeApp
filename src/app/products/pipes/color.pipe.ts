import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})

export class ColorPipe implements PipeTransform {

  private colors : string[] = ['red', 'black', 'blue', 'green']

  transform(value: any): any {
    return this.colors[value]
  }
}
