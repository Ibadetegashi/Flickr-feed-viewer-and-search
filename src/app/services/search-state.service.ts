// search-state.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchStateService {
  private searchResults: any[] = [];

  getSearchResults(): any[] {
    return this.searchResults;
  }

  setSearchResults(results: any[]): void {
    this.searchResults = results;
  }
}
