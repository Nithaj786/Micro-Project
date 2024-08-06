import { Component } from '@angular/core';
import { Employee } from './model/Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMS';
  employee : Employee;
  result : string;
  employeeArr:Employee[];
  flag:boolean;
  // result:number=0
  constructor(private es:EmployeeService){
    this.employee=new Employee();
    this.result="";
    this.employeeArr=[];
    this.flag=false;
    // this.employee.empName=""
    // console.log(this.employee);
  }

  insertEmployee(data : any){
   this.employee.id=data.empId;
   this.employee.empName=data.empName;
   this.employee.empSalary=data.empSalary;
  //  this.es.insertEmployee(this.employee);
   this.result = this.es.insertEmployee(this.employee);
  //  this.result=data.empId+data.empName+data.empSalary;
   alert(data.empId+" "+data.empName+" "+data.empSalary);
  //  this.employee=new Employee{}
  }

  updateemployee(data : any){
    this.employee.id=data.empId;
    this.employee.empName=data.empName;
    this.employee.empSalary=data.empSalary;
   //  this.es.insertEmployee(this.employee);
    this.result = this.es.updateEmployee(this.employee);
}

deleteemployee(data : any){
  this.result=this.es.deleteemployee(data.empId);
}

findemployee(data:any){
  this.employee=this.es.findemployee(data.empId);
  this.result=this.employee.id+" " +this.employee.empName+" "+this.employee.empSalary;
}

findallemployee(){
  this.employeeArr=this.es.findallemployee();
  this.flag=true;
}
}