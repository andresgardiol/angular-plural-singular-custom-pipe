import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listSeparator'
})
export class ListSeparatorPipe implements PipeTransform {

  transform(list: Array<string>, separator: string = null): string {
    return list.join(separator ? separator : ', ');
  }

}
