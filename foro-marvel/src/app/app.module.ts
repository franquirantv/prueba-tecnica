import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //esto
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgOptimizedImage } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CharacterComponent } from './components/character/character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { FooterComponent } from './commons/footer/footer.component';
import { LocalCharacterListComponent } from './components/local-character-list/local-character-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ComicComponent } from './components/comic/comic.component';
import { EventComponent } from './components/event/event.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ComicListComponent } from './components/comic-list/comic-list.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { ExtraComponent } from './pages/extra/extra.component';

import { StoreModule } from '@ngrx/store';
import { SharedReducer } from './store/shared/shared.reducer';
import { LoadingSpinnerComponent } from './commons/loading-spinner/loading-spinner.component';
import { SerieComponent } from './components/serie/serie.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterListComponent,
    CharacterDetailsComponent,
    PaginationComponent,
    NavbarComponent,
    FooterComponent,
    LocalCharacterListComponent,
    SearchBarComponent,
    ComicComponent,
    EventComponent,
    ErrorPageComponent,
    HomeComponent,
    ComicListComponent,
    EventListComponent,
    ExtraComponent,
    LoadingSpinnerComponent,
    SerieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    StoreModule.forRoot({ shared: SharedReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
