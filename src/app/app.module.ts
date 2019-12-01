import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserComponent } from "./component/user/user.component";
import { UsersComponent } from "./component/users/users.component";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { ParticlesModule } from "angular-particle";

@NgModule({
  declarations: [AppComponent, UserComponent, UsersComponent, NavbarComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ParticlesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
