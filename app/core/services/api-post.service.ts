import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {postForm} from "../models";

@Injectable()
export class ApiPostService {

  readonly rootUrl = 'https://bachelor-server.kods.lv';

  constructor(private http : HttpClient) { }

  saveNewPost(body : postForm) {

      let header = new HttpHeaders({
          "Accept": "application/json",
          "Authorization": "Bearer " + localStorage.getItem('token'),
          "Content-Type": "application/json",
      });

    return this.http.post(this.rootUrl + '/api/post/save-new-post', body,{headers : header});
  }

  savePostEdit(body : postForm) {

      let header = new HttpHeaders({
          "Accept": "application/json",
          "Authorization": "Bearer " + localStorage.getItem('token'),
          "Content-Type": "application/json",
      });

    return this.http.post(this.rootUrl + '/api/post/edit-post', body,{headers : header});
  }

}
