import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 419.9px)']).subscribe(state => {
      this.isMobile = state.matches;
    });
  }

  isActive(url: string): boolean {
    if (!this.router.url.includes(url)) {
      return false;
    }

    return true;
  }
}
