import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter( item => {
      if (item.content && item.content.toLowerCase().includes(searchText)) {
        console.log(item.content)
      }
      return item.title.toLowerCase().includes(searchText)
       || (item.content && item.content.toLowerCase().includes(searchText))
    });
   }
}
