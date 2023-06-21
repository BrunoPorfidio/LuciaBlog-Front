import { formatCurrency } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultadoPost = [];
    const lowercaseArg = arg.toLowerCase();

    for( const dato of value){
      const lowercaseTitulo = dato.titulo.toLowerCase();
      if (lowercaseTitulo.indexOf(lowercaseArg) > -1){
        resultadoPost.push(dato);
      };
    };
    return resultadoPost;
  }

}
