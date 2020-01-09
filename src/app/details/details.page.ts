import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { ActivatedRoute } from "@angular/router"; 


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

    loadNews : any;
    data:[];
    
  constructor(private UserService:UserService, private actRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    
    this.actRoute.paramMap.subscribe(
      (paramMap)=>{
          const id = paramMap.get('id');
          this.UserService.news().subscribe(rsp =>{
            this.loadNews= rsp;
          
          this.data = this.loadNews.articles[id]
          console.log(this.data)
        })
      }   
    )
  }
}