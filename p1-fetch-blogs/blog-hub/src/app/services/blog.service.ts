import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Blog } from '../models/blog';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http : HttpClient) { }
  getAllBlogs():Observable<Blog[]>{
    return this.http.get<Blog[]>("http://localhost:3000/blogs")
  }
  postBlog(Blog :Blog){
return this.http.post<Blog>("http://localhost:3000/blogs",Blog)
  }
}
