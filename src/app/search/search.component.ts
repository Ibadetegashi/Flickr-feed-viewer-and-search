// search.component.ts

import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { SearchStateService } from '../services/search-state.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  tag = '';
  photosWithDimensions: any[] = [];
  showMainSection = true;
  isLoading = false;
    currentPage = 1;
    photos:any

  private searchSubject = new Subject<string>();

  constructor(
    private searchService: SearchService,
    private searchStateService: SearchStateService
  ) {}

  ngOnInit() {
    const storedResults = this.searchStateService.getSearchResults();
    if (storedResults && storedResults.length > 0) {
      this.photosWithDimensions = storedResults;
      this.showMainSection = false;
    }

    this.searchSubject
      .pipe(
        debounceTime(300),
        switchMap(tag => this.searchService.searchPhotos(tag, 50, this.currentPage))
      )
      .subscribe(
        (data: any) => {
          console.log('Data received');
          this.photosWithDimensions = [];
          this.photos = data.photos.photo;

          for (const photo of this.photos) {
            this.searchService.getPhotoInfo(photo.id).subscribe(
              (info: any) => {
                console.log(info.photo);
                if (info.photo.originalsecret && info.photo.originalformat === 'jpg') {
                  const url = this.searchService.getOriginalPhotoUrl(info.photo);
                  let photo = info.photo;
                  photo.url = url;

                  const img = new Image();
                  img.src = url;
                  img.onload = () => {
                    this.photosWithDimensions.push(photo);
                    console.log(this.photosWithDimensions.length);
                  };
                }
              },
            );
          }

          // Save search results to the service for future reference
          this.searchStateService.setSearchResults(this.photosWithDimensions);
        },
        (error: any) => {
          console.error('Error in request');
          console.log(error);
        },
        () => {
          this.isLoading = false;
        }
      );
  }

  onTagInput() {
    if (this.tag.length >= 3) {
      this.showMainSection = false;
      this.isLoading = true;
      this.currentPage = 1;
      this.photosWithDimensions = [];
      this.searchSubject.next(this.tag);
    } else {
        this.showMainSection = true;
      this.isLoading = false;
      this.photosWithDimensions = [];
    }
  }

  onScroll() {
    if (!this.isLoading) {
      this.currentPage++;
      this.searchSubject.next(this.tag);
    }
  }
}
