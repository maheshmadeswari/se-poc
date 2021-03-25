import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgCalendarModule } from 'ionic2-calendar';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleOsComponent } from './schedule-os/schedule-os.component';

@NgModule({
  declarations: [AppComponent, ScheduleComponent, ScheduleOsComponent],
  entryComponents: [],
  imports: [
    MbscModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgCalendarModule,
    IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SplashScreen, StatusBar],
  bootstrap: [AppComponent],
})
export class AppModule { }
