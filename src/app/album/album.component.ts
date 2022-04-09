// import albumData from '../data/SearchResultsAlbum.json';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';

import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

// Assignment 5
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit, OnDestroy {
  album: any;

  sub: any;
  albumId: any;

  albumSubscription: Subscription | undefined;
  constructor(
    private ms: MusicDataService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // this.album = albumData;
    this.sub = this.route.params.subscribe((params) => {
      this.albumId = params['idAlbum'];

      this.albumSubscription = this.ms
        .getAlbumById(this.albumId)
        .subscribe((data) => (this.album = data));
    });
  }

  addToFavourites(trackID: string): void {
    //this.ms.addToFavourites(trackID);
    if (this.ms.addToFavourites(trackID)) {
      this.snackBar.open('Adding to Favourites...', 'Done', { duration: 1500 });
    }
  }

  ngOnDestroy(): void {
    this.albumSubscription?.unsubscribe();
    this.sub?.unsubscribe();
  }
}
