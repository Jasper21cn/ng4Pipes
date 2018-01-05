import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, limit: number) {
    // ES5
    // if (value.length > 10) {
    //   return value.substr(0, 10) + ' ...';
    // }
    // return value;

    // ES6
    return (value.length > limit) ? value.substr(0, limit) + ' ...' : value;
  }

}
