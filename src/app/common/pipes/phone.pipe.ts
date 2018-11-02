import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phonepipe' })
export class Phonepipe implements PipeTransform {
  transform(size: string) {
    return size.replace(/\./g, '-');
  }
}

