import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quora!: Quote;
  @Output() hasRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean) {
    this.hasRead.emit(read);
  }
  upvote() {
    this.quora.likes+=1;
  }
  downvote() {
    this.quora.dislikes+=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
