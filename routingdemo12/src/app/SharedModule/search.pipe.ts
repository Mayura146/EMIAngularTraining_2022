import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Models/Employee.model';

@Pipe({
  name: 'search',
  pure:false
})
export class SearchPipe implements PipeTransform {

  transform(employeelist: Employee[],searchby: string ): Employee[] {
    return employeelist.filter((emp:Employee)=> emp.name.toLowerCase().includes(searchby)||emp.location.toLowerCase().includes(searchby)||emp.gender.toLowerCase().includes(searchby)||emp.id==+searchby );;
  }

}
