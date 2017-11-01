import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


//Admin component
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ShowtimeComponent } from './showtime/showtime.component';

//Services
import { MainService } from './services/mainservice.service';
import { UploadService } from './services/upload/upload.service';
import { PaypalComponent } from './paypal/paypal.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ViewMoreComponent } from './view-more/view-more.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ShowtimeComponent,
    PaypalComponent,
    HeaderComponent,
    MainComponent,
    ViewMoreComponent,
    FooterComponent,
    CategoriesComponent,
    AboutComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot
    ([
      {
        path:'show',
        component: ShowtimeComponent
      },
      {
       path:'admin',
       component: AdminComponent
      },
      {
       path:'index',
       component: MainComponent
      },
      {
       path: 'categories',
       component: CategoriesComponent
      }
    ])    
 ],
  providers: [MainService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
