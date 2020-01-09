import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '../api/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  newsList:any;
  constructor(private UserService:UserService) { }

  ngOnInit() {
    this.UserService.news().subscribe(rsp =>{
      this.newsList =rsp;
      console.log(rsp)
    })  
  }

}