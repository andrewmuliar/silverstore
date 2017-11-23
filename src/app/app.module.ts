import { BrowserModule } from '@angular/platform-browser';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
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
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { GoodsAdminComponent } from './goodsAdmin/goodsAdmin.component';
import { CategoryAdminComponent } from './categoryAdmin/categoryAdmin.component';
import { EmailspamComponent } from './emailspam/emailspam.component';
import { ZakazComponent } from './zakaz/zakaz.component';
import { FixedButtonsComponent } from './fixedButtons/fixedButtons.component';

//import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { GoodComponent } from './good/good.component';
import { GoodItemComponent } from './goodItem/goodItem.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ShowtimeComponent,
    PaypalComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CategoriesComponent,
    AboutComponent,
    GoodsAdminComponent,
    CategoryAdminComponent,
    EmailspamComponent,
    ZakazComponent,
    FixedButtonsComponent,
    ShopComponent,
    GoodComponent,
    GoodItemComponent
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
       path:'shop',
       component: MainComponent
      },
      {
       path: 'categories',
       component: CategoriesComponent
      },
      {
        path: 'categories/:category',
        component: CategoriesComponent
       },      
      {
       path: 'goodsAdmin',
       component: GoodsAdminComponent
      },
      {
       path: 'categAdmin',
       component: CategoryAdminComponent
      },
      {
       path: 'emailspam',
       component: EmailspamComponent 
      },
      {
       path: 'zakazAdmin',
       component: ZakazComponent
      },
      {
       path: 'good/:goodID',
       component: GoodComponent
      },
      {
       path: 'card',
       component: ShopComponent
      },
      {
        path:'pay',
        component: PaypalComponent
      },
      {
       path: '',
       component: AboutComponent
      }
    ])    
 ],
  providers: [MainService, UploadService
    //, {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
