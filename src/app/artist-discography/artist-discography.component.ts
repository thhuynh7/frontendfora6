// import albumData from '../data/SearchResultsAlbums.json';
// import artistData from '../data/SearchResultsArtist.json';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';

import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css'],
})
export class ArtistDiscographyComponent implements OnInit, OnDestroy {
  albums: Array<any> = [];
  artist: any = {};

  sub: any;
  artistId: any;

  artistSubscription: Subscription | undefined;
  albumsSubscription: Subscription | undefined;
  constructor(private ms: MusicDataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.artist = artistData;

    this.sub = this.route.params.subscribe((params) => {
      this.artistId = params['idArtist'];

      this.artistSubscription = this.ms
        // .getArtistById('25uiPmTg16RbhZWAqwLBy5')
        .getArtistById(this.artistId)
        .subscribe((data) => (this.artist = data));

      this.albumsSubscription = this.ms
        // .getAlbumsByArtistId('25uiPmTg16RbhZWAqwLBy5')
        .getAlbumsByArtistId(this.artistId)
        .subscribe(
          (data) =>
            (this.albums = data.items.filter(
              (curValue, index, self) =>
                self.findIndex(
                  (t) => t.name.toUpperCase() === curValue.name.toUpperCase()
                ) === index
            ))
        );
    });
  }

  ngOnDestroy(): void {
    this.artistSubscription?.unsubscribe();
    this.albumsSubscription?.unsubscribe();
    this.sub?.unsubscribe();
  }
}
