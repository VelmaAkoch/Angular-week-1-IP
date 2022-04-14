import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './components/quote/quote.component';
import { TittleComponent } from './components/tittle/tittle.component';
import { FormsModule } from '@angular/forms';
import { QuotesFormComponent } from './components/quotes-form/quotes-form.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';




@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    TittleComponent,
    QuotesFormComponent,
    QuotesFormComponent,
    QuoteDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
