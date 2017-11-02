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
import { GoodsAdminComponent } from './goodsAdmin/goodsAdmin.component';
import { CategoryAdminComponent } from './categoryAdmin/categoryAdmin.component';
import { EmailspamComponent } from './emailspam/emailspam.component';
import { ZakazComponent } from './zakaz/zakaz.component';

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
    AboutComponent,
    GoodsAdminComponent,
    CategoryAdminComponent,
    EmailspamComponent,
    ZakazComponent
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
      },
      {
        path: 'pay',
        component: PaypalComponent
      },
      {
       path: 'admin/goodsAdmin',
       component: GoodsAdminComponent
      },
      {
       path: 'admin/categAdmin',
       component: CategoryAdminComponent
      },
      {
       path: 'admin/emailspam',
       component: EmailspamComponent 
      },
      {
       path: 'admin/zakazAdmin',
       component: ZakazComponent
      },
      {
       path: '',
       component: MainComponent
      }
    ])    
 ],
  providers: [MainService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
