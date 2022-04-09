import { Component, OnDestroy, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';

import { Subscription } from 'rxjs';

// Assignment 5
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit, OnDestroy {
  favourites: Array<any> = [];
  favouritesSubscription: Subscription | undefined;
  removalSubscription: Subscription | undefined;

  constructor(private ms: MusicDataService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.favouritesSubscription = this.ms
      .getFavourites()
      .subscribe((data) => (this.favourites = data.tracks));
  }

  removeFromFavourites(trackID: string): void {
    this.removalSubscription = this.ms
      .removeFromFavourites(trackID)
      .subscribe((data) => (this.favourites = data.tracks));
  }


  ngOnDestroy(): void {
    this.favouritesSubscription?.unsubscribe();
    this.removalSubscription?.unsubscribe();
  }
}
