import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';
@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private blogservice:BlogService) { }

  ngOnInit(): void {
    this.blogservice.getAllBlogs().subscribe({
      next:blog=>{
        this.blogs = blog
      },
      error:e=>{
        alert("Failed to add blog due to network error")
      }
    })
  }

}
