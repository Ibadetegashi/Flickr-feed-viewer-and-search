import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  photo:any
  id: any //will have value of :id from route
 
  constructor(private searchService: SearchService, private route: ActivatedRoute, private router: Router,) {
    this.route.params.subscribe((params) => {
       this.id = params['id'];
     })
  }
  ngOnInit(): void {
    this.getPhotoWithId()
  }

  getPhotoWithId():any {
    this.searchService.getPhotoInfo(this.id).subscribe((info: any) => {
      console.log(info.photo);
       this.photo = info.photo;
      this.photo.url = this.searchService.getOriginalPhotoUrl(info.photo);
      console.log(this.photo.tags.tag);
      
    })
  }
  goBack() {
    this.router.navigate(['/']);
  }
}
