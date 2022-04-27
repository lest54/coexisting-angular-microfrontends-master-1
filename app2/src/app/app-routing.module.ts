import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
  EmptyRouteComponent
} from "./empty-route/empty-route.component";
import { APP_BASE_HREF } from "@angular/common";
import { CanActivateTeam } from "./guard";

const routes: Routes = [
  { path: "**", component: EmptyRouteComponent, canActivate: [CanActivateTeam] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule {}
