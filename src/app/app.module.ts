import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ZodiacPipe } from './age.pipe';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ZodiacPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
 
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
