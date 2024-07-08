import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from './Service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translateService : TranslateService,private loaderService: LoaderService){
    this.translateService.setDefaultLang('fr');
    this.translateService.use(localStorage.getItem('lang') || 'fr')
  }
  title = 'eloc';

  isLoading$ = this.loaderService.loading$;


  ngOnInit() {
    this.loaderService.show();
    setTimeout(() => {
      this.loaderService.hide();
    }, 3000); // Change this to your desired loading duration
  }
}
