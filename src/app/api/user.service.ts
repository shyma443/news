import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  allNews: any;
  newsDetails = [];

  constructor(private http: HttpClient) { }
    config_url='https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-09&sortBy=publishedAt&apiKey=118dae6060514df8b46c3ac1a6a90887';
    
    news(){
      return this.http.get(this.config_url)
    }

getNews(id){
 this.http.get(this.config_url).subscribe(rsp =>{
   this.allNews =rsp;
 
 this.newsDetails = this.allNews.articles[id];
})
}
}
