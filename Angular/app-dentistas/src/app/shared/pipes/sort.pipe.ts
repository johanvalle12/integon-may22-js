import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from "../interfaces/persona";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Persona[], ...args: string[]): Persona[] {
    if(value){
      return value.sort((a:Persona, b:Persona) => {
        if(a[args[0]] < b[args[0]])
          return args[1] == 'asc' ? -1 : 1;
        else if(b[args[0]] < a[args[0]])
          return args[1] == 'asc' ? 1 : -1;
        return 0
      });
    }
  }

}
