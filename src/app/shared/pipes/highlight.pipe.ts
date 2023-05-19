import { Pipe, PipeTransform } from '@angular/core';
import hljs from 'highlight.js';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const clean = value.replaceAll(/ {4}/g, " ").replaceAll(/\t/g, " ");
    return hljs.highlightAuto(clean).value;
  }

}
