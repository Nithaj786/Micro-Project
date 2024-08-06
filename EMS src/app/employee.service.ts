import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url : string;
  employee:Employee;
  employeeArr:Employee[]


  constructor(private http:HttpClient) {
    this.url="http://localhost:3004/employee";
    this.employee=new Employee();
    this.employeeArr=[];
   }

  insertEmployee(employee:Employee){
 this.http.post<Employee>(this.url,employee).subscribe();
 return"employee Details Added";
  }

  updateEmployee(employee:Employee){
    this.http.put<Employee>(this.url+"/"+employee.id,employee).subscribe();
    return"employee Details updated";
     }

     deleteemployee(empId:number){
      this.http.delete<Employee>(this.url+"/"+empId).subscribe();
      return"Employee Detailes deleted"
     }

     findemployee(empId:number){
      this.http.get<Employee>(this.url+"/"+empId).subscribe(data => this.employee = data)
      return this.employee;
     }

     findallemployee(){
      this.http.get<Employee[]>(this.url).subscribe(data => this.employeeArr=data);
      return this.employeeArr;
     }
}
