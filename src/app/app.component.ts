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
  BgImgList:any[]=[];
  currentBg:any;
  currentBgInd=0;
  platforms:any[]=[];
  ngOnInit(): void {
    this.platforms=platformData;
    this.quotesArr=quoteData;
    this.BgImgList=bgImgData;
    this.currentBg=this.BgImgList[0];
    this.currentBgInd=0;
    this.showRandomQuote();
  }

  showRandomQuote(){
    const randomIndex=Math.floor(Math.random()*this.quotesArr.length);
    this.displayQuote=this.quotesArr[randomIndex];
  }

  changeWalpaper(){
    this.currentBg=this.BgImgList[((this.currentBgInd+1)%this.BgImgList.length)]
    this.currentBgInd++;
  }
  
}
