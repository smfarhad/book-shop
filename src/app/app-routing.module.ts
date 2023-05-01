import { Component, NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ForgotComponent } from "./auth/forgot/forgot.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
    {path:'', component:BooksComponent},
    {path:'cart', component:CartComponent,canActivate:[AuthGuard]},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'forgot', component:ForgotComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})

export class AppRoutingModule{

}