import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { DocumentModule } from './document-service/document.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    DocumentModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
