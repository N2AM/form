import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsEmitPluginModule } from '@ngxs-labs/emitter';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationModule } from './authorization/authorization.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorizationModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
    NgxsEmitPluginModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/register/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
