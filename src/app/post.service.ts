import { Posts } from './post.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { 

  }

  getposts():Observable<Posts>{
   return  this.httpClient.get<Posts>("https://jsonplaceholder.typicode.com/posts",);
  }

}
