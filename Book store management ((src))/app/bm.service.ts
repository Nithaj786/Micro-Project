import { Injectable } from '@angular/core';
import { book } from './model/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BmService {
url : string;
Book:book;
BookArr:book[]

constructor(private http:HttpClient) { 
  this.url="http://localhost:3004/books";
  this.Book=new book();
  this.BookArr=[]
}

  createusers(books:book){
   this.http.post<book>(this.url,books).subscribe()
   return"Added Successfully"
  }

  edituser(books:book){
    this.http.put<book>(this.url+"/"+books.id,books).subscribe()
    return"Update Successfully"
  }

  removeuser(bid:number){
    this.http.delete<book>(this.url+"/"+bid).subscribe()
    return"delete successfully"
  }

  finduser(bid:number){
    this.http.get<book>(this.url+"/"+bid).subscribe(data => this.Book = data);
    return this.Book
  }

  findalluser(){
    this.http.get<book[]>(this.url).subscribe(data => this.BookArr=data);
      return this.BookArr;
  }
}
