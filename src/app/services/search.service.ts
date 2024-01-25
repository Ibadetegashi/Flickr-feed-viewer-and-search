import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  url = 'https://www.flickr.com/services/rest/'
  apiKey =  environment.key
  

  constructor(private http: HttpClient) { }
  
   searchPhotos(tags: string, per_page:number,page:number): any{
    const searchUrl = `${this.url}?method=flickr.photos.search&api_key=${this.apiKey}&tags=${tags}&format=json&nojsoncallback=1&per_page=${per_page}&page=${page}`;
    return this.http.get(searchUrl);
  }

  getPhotoInfo(photoId: string): any {
    const getInfoUrl = `${this.url}?method=flickr.photos.getInfo&api_key=${this.apiKey}&photo_id=${photoId}&format=json&nojsoncallback=1`;
    return this.http.get(getInfoUrl);
  }

  getOriginalPhotoUrl(photo: any) {
    const { farm, server, id, originalsecret, originalformat } = photo;
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${originalsecret}_o.${originalformat}`;
  }
  
  
}
