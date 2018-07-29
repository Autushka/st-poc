import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    (<any>window).timeToBootstrap = performance.now() - (<any>window).loadingAnimationStartedAt;
  }
}
