import { Component, OnInit } from '@angular/core';
import quoteData from '../assets/offline_quotes.json';
import platformData from '../assets/coding_platforms.json';
import bgImgData from '../assets/bg_img/bg_img.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  quotesArr:{quote:string,author:string}[]=[]
  displayQuote:{quote:string,author:string}={quote:"",author:""};
  color: string | undefined;
  displayBasic: boolean =false;
  platforms:any[]=[];
  ngOnInit(): void {
    this.platforms=platformData;
    this.quotesArr=quoteData;
    this.showRandomQuote();
  }

  showRandomQuote(){
    const randomIndex=Math.floor(Math.random()*this.quotesArr.length);
    this.displayQuote=this.quotesArr[randomIndex];
  }
  
}
