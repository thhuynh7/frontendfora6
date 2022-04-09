// import data from '../data/NewReleasesAlbums.json';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css'],
})
export class NewReleasesComponent implements OnInit, OnDestroy {
  releases: Array<any> = [];
  releasesSubscription: Subscription | undefined;

  constructor(private ms: MusicDataService) {}

  ngOnInit(): void {
    // this.releases = data.albums.items;
    this.releasesSubscription = this.ms
    .getNewReleases()
    .subscribe(data => (this.releases = data.albums.items));
  }

  ngOnDestroy(): void {
    this.releasesSubscription?.unsubscribe();
  }
}
