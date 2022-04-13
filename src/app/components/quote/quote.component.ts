import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Enjoy the quotes';
  quotes: Quote[] = [
    new Quote (1, "Velma", "Life", "You will face many chalenges in life, but never let yourself be defeated.", "MICHAEL SIBUKIA", new Date(2020,5,3),0,0),
    new Quote (2, "Peace", "Technology", "Any suffiently advanced technology is indistinguishable from magic.", "ATHUR MERLIN", new Date(2021,7,7),0,0),
    new Quote (3, "Grace", "Religion", "When I do good, I feel good. When I do bad, I feel bad. That's my religion","CHINUA ACHEBE", new Date(2019,3,9),0,0),
    new Quote (4, "John", "Tech and Life", "Technology by itself doesn't make leaders. Technology only amplifies leadership.", "AKOKO SIMBA", new Date(2022,10,5),0,0),
    new Quote (5, "Mercy", "Trust", "Loving someone is giving them the power to break your heart, but trusting them not to.", "KEN WALIBORA", new Date(2018,5,7),0,0),
    new Quote (6, "Dan", "Peace of Mind", "Your peace of mind has to do with what you focus on. It has nothing to do with life. Empower yourself.", "ERICK CHWANYO", new Date(2022,2,1),0,0),
  ];
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

  displayInfo(index: any){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
