import { Component } from '@angular/core';
import { book } from './model/book';
import { BmService } from './bm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bookmanagement';
  Book:book;
  result:string;
  BookArr:book[];
  flag:boolean

  constructor(private boo:BmService){
    this.Book=new book();
    this.result="";
    this.BookArr=[];
    this.flag=true
  }


  createuser(data:any){
    this.Book.bname=data.bname;
    this.Book.id=data.bid;
    this.Book.bprice=data.bprice;
    this.Book.bbuyer=data.bbuyer;
    this.result=this.boo.createusers(this.Book)
  }

  edituser(data:any){
    this.Book.bname=data.bname;
    this.Book.id=data.bid;
    this.Book.bprice=data.bprice;
    this.Book.bbuyer=data.bbuyer;
    this.result=this.boo.edituser(this.Book)
  }

  removeuser(data:any){
    this.result=this.boo.removeuser(data.bid)
  }

  finduser(data:any){
    this.Book=this.boo.finduser(data.bid);
    this.result=this.Book.id+" "+this.Book.bname+" "+this.Book.bprice+" "+this.Book.bbuyer
  }

  findalluser(){
    this.BookArr=this.boo.findalluser();
    this.flag=true;
  }
}
