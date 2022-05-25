import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './chatbot/message/message.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ChatbotService } from './chatbot.service';

@NgModule({
  declarations: [AppComponent, MessageComponent, ChatbotComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ChatbotService],
  bootstrap: [AppComponent],
})
export class AppModule {}
