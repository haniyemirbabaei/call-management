import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showAdminUsers',
  pure: false
})
export class ShowAdminUsersPipe implements PipeTransform {

  transform(items: any[], filter: { role }): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.role.indexOf(filter.role) !== -1);
  }

}
