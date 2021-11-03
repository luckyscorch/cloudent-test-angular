import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnamnezisComponent } from './anamnezis/anamnezis.component';
import { AnamnezisListComponent } from './anamnezis-list/anamnezis-list.component';
import { ListItemBooleanComponent } from './list-item-boolean/list-item-boolean.component';
import { ListItemTextareaComponent } from './list-item-textarea/list-item-textarea.component';
import { ListItemButtonsComponent } from './list-item-buttons/list-item-buttons.component';
import { AnamnezisEditModalComponent } from './anamnezis-edit-modal/anamnezis-edit-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AnamnezisComponent,
    AnamnezisListComponent,
    ListItemBooleanComponent,
    ListItemTextareaComponent,
    ListItemButtonsComponent,
    AnamnezisEditModalComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
