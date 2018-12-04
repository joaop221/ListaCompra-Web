import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public menu: boolean;
  public footer: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.menu = this.route.root.firstChild.snapshot.data['menu'];
        this.footer = this.route.root.firstChild.snapshot.data['footer'];
      }
    });
  }

}
