import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoemListComponent } from './poem-list/poem-list.component';
import { PoemDetailComponent } from './poem-detail/poem-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { SharedService } from './shared/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    PoemListComponent,
    PoemDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    NgbModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
