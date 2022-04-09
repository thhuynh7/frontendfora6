import { Component, OnInit, OnDestroy } from '@angular/core';
import { MusicDataService } from '../music-data.service';

import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  results: any;

  sub: any;
  searchQuery: string = '';

  resultsSubscription: Subscription | undefined;
  constructor(private ms: MusicDataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['q'];

      this.resultsSubscription = this.ms
        .searchArtists(this.searchQuery)
        .subscribe(
          (data) => (this.results = data.artists.items.filter(
              (i) => i.images.length > 0
            ))
        );
    });
  }

  ngOnDestroy(): void {
    this.resultsSubscription?.unsubscribe();
    this.sub?.unsubscribe();
  }
}
