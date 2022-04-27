import { Component } from '@angular/core';

@Component({
  selector: 'app1-empty-route',
  template: '<a routerLink="/route/1">app 1 - route 1</a><br/><a routerLink="/route/2">app 1 - route 2</a><br/><br/>'
})
export class EmptyRouteComponent {
}
