import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charLimit'
})
export class CharLimitPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (value.length <= limit) {
      return value;
    } else {
      return value.slice(0, limit) + '...';
    }
  }
}
