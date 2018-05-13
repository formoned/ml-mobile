import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ApiGetService {

  readonly rootUrl = 'https://bachelor-server.kods.lv';

  constructor(private http : HttpClient) { }

  getCountriesList() {

      let header = new HttpHeaders({
          "Accept": "application/json",
          "Authorization": "Bearer " + localStorage.getItem('token'),
          "Content-Type": "application/json",
      });

      return this.http.get(this.rootUrl + '/api/get/countries-list',{headers : header});
  }



  getUserPosts() {
      let header = new HttpHeaders({
          "Accept": "application/json",
          "Authorization": "Bearer " + localStorage.getItem('token'),
          "Content-Type": "application/json",
      });
    return this.http.get(this.rootUrl + '/api/get/user-posts',{headers : header});
  }
  getUserPost(_id : number) {
      let header = new HttpHeaders({
          "Accept": "application/json",
          "Authorization": "Bearer " + localStorage.getItem('token'),
          "Content-Type": "application/json",
      });
    return this.http.get(this.rootUrl + '/api/get/user-post/'+_id ,{headers : header});
  }

    getUserPostsMarkers() {
        let header = new HttpHeaders({
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token'),
            "Content-Type": "application/json",
        });
        return this.http.get(this.rootUrl + '/api/get/user-posts-markers',{headers : header});
    }
}
