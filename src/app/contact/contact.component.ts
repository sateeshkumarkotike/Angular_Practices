import { Posts } from './../post.model';
import { PostService } from './../post.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() name:string ;

  posts:Posts  ;

  constructor(private router:Router,private postService:PostService) {

  }

  ngOnInit() {
    this.postService.getposts().subscribe(
      ( resut:Posts) => {
         console.log(resut);
         this.posts = resut
      },
      (error) => {
          console.log(error)
      }
    );
  }

  cliked():void{
    this.router.navigate(['services'])
  }

  dataThroughtEvent(name){
    console.log(name)
  }

}
