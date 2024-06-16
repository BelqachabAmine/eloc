import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss']
})
export class FooterSectionComponent implements OnInit {

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
