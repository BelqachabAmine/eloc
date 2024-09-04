import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http' ;
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { HomeComponent } from './Component/home/home.component';
import { SectionDownlondAppComponent } from './Component/section-downlond-app/section-downlond-app.component';
import { SectioncityandteleComponent } from './Component/sectioncityandtele/sectioncityandtele.component';
import { ChooseYourCityComponent } from './Component/choose-your-city/choose-your-city.component';
import { SectioDwoneldAppSecondComponent } from './Component/sectio-dwoneld-app-second/sectio-dwoneld-app-second.component';
import { VilleresausociauxComponent } from './Component/villeresausociaux/villeresausociaux.component';
import { FooterSectionComponent } from './Component/footer-section/footer-section.component';
import { HowitworkComponent } from './Component/how It Work/howitwork/howitwork.component';
import { HowitworkfisrtpartComponent } from './Component/howitworkfisrtpart/howitworkfisrtpart.component';
import { CustomloaderComponent } from './Component/customloader/customloader.component';
import { LocationComponent } from './Component/location/location.component';
import { HellpComponent } from './Component/hellp/hellp.component';

export function httpLoaderFactory (http:HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SectionDownlondAppComponent,
    SectioncityandteleComponent,
    ChooseYourCityComponent,
    SectioDwoneldAppSecondComponent,
    VilleresausociauxComponent,
    FooterSectionComponent,
    HowitworkComponent,
    HowitworkfisrtpartComponent,
    CustomloaderComponent,
    LocationComponent,
    HellpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
    MdbCollapseModule,
    HttpClientModule,
     TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:httpLoaderFactory,
        deps : [HttpClient]
      }
    }
    )
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
