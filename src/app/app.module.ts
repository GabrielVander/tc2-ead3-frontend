import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import {AnimalTableComponent} from './components/animal-table/animal-table.component';
import {NewAnimalModalComponent} from './components/new-animal-modal/new-animal-modal.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AnimalTableComponent,
    NewAnimalModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzButtonModule,
    NzGridModule,
    NzDividerModule,
    NzMessageModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    ReactiveFormsModule,
    NzPopconfirmModule
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
