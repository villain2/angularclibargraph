import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SidebarControlsComponent } from './components/sidebar-controls/sidebar-controls.component';
import { BarGraphStageComponent } from './components/bar-graph-stage/bar-graph-stage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarControlsComponent,
    BarGraphStageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
