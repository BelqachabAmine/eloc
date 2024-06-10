import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  lang : any;
  constructor(private translateService : TranslateService) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'fr'
  }

  Changelang(lang:any){
    const selectedLangague = lang.target.value

    localStorage.setItem('lang',selectedLangague)

    this.translateService.use(selectedLangague);
  }

}


//ousama.Lahay24