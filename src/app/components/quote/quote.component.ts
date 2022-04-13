import { Component, OnInit } from '@angular/core';
import {Quote} from './quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  tittle = 'My quotes';
  quotes: Quote[] = [
    new Quote (1, "Velma", "Life", "You will face many challenges, never let yourself to accept defeat.", "MICHAEL LIKULU", new Date(2019,4,1),0,0),
    new Quote (2, "Fact", "Programming", "Programming needs alot of practices and reserch", "SABTA CLAUSE", new Date(2020,5,10),0,0),
    new Quote (3, "Mercy", "Religion", "Alwaysbe good all the time, it feels good being good. let the negative energy pass, it costs nothing. This is my religion","JOHN LUDWING CRAFT", new Date(2018,7,6),0,0),
    new Quote (4, "John", "Hardwork", "Hardworkis a vorture on its own. Hardwork pays.", "CHINIA ACHEBE", new Date(2010,4,11),0,0),
    new Quote (5, "Erick", "Love", "its a natural feeling towards someone in a different way. Love someone its healthy.", "AKOKO SIMBA", new Date(2016,8,2),0,0),
    new Quote (6, "Emily", "Truth", "Stand firm even if you are alone", "Your peace of mind has to do with what you focus on. It has nothing to do with life. Empower yourself.", "BRUCE LEE", new Date(2015,7,10),0,0),
  ]

  // quotes: any;
  // get sortQuotes():any{
  //   return this.sortQuotes.sort((a: { datePosted: string | number | Date; }, b: { datePosted: string | number | Date; }) => {
  //     return <any>new Date (b.datePosted) - <any>new Date(a.datePosted);
  //   });
  // }

  addQuote(quote:any){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completedate)
    this.quotes.push(quote);
  }

  deleteQuote(hasRead: any, index: any) {
    if (hasRead) {
      let toDelete = confirm("Click OK to delete this Quote");
      if (toDelete) {
        this.quotes.splice(index,1);
      }
    }
  }

  isplayInfo(index: any){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
