/*********************************************************************************
 *  WEB422 – Assignment 6
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Thai Hoa Huynh - Student ID: 114968191 - Date: 08/04/2022
 *  Angular App (Deployed) Link: https://frontendforweb4220.netlify.app/
 *  User API (Heroku) Link: https://backendfora6.herokuapp.com/api/user/favourites
 ********************************************************************************/

import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'web422-a5';
  isOpen = true;

  searchString:string = '';

  constructor( private router: Router ){}
  ngOnInit() {}

  sideNavToggler() {
    this.isOpen = !this.isOpen;
  }

  handleSearch() {
    this.router.navigate(['/search'], { queryParams: { q: this.searchString } });
    this.searchString = '';
  }

}
