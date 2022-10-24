import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import {BlogService} from '../services/blog.service'
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent{

  blog: Blog = {};
  constructor(private blogservice:BlogService) { }

  saveBlog() {
    this.blogservice.postBlog(this.blog).subscribe(data=>{
      alert("New blog added")
      this.blog = {}
    })
    
  }
}
