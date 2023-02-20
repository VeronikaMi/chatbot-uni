import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './chatbot/message/message.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ChatbotService } from './chatbot.service';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomePageComponent } from './pages/home/home.component';
import { ContactPageComponent } from './pages/contact/contact.component';
import { AboutPageComponent } from './pages/about/about.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TriggerItemComponent } from './components/shared/trigger-list/trigger-item/trigger-item.component';
import { TriggerListComponent } from './components/shared/trigger-list/trigger-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ChatbotComponent,
    HeaderComponent,
    FooterComponent,
    TriggerItemComponent,
    TriggerListComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent,
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ChatbotService],
  bootstrap: [AppComponent],
})
export class AppModule {}
