import { NgModule } from '@angular/core';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {ColorPickerModule} from 'primeng/colorpicker';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {PasswordModule} from 'primeng/password';
import {TabMenuModule} from 'primeng/tabmenu';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MenuModule} from 'primeng/menu';
import {ChartModule} from 'primeng/chart';
import {CarouselModule} from 'primeng/carousel';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CalendarModule,
    BrowserAnimationsModule,
    InputTextModule,
    CheckboxModule,
    ColorPickerModule,
    DropdownModule,
    RadioButtonModule,
    PasswordModule,
    TabMenuModule,
    InputTextareaModule,
    MenuModule,
    ChartModule,
    CarouselModule,
    TableModule
  ],
  exports:[
    CalendarModule,
    CheckboxModule,
    ColorPickerModule,
    DropdownModule,
    RadioButtonModule,
    PasswordModule,
    TabMenuModule,
    ButtonModule,
    InputTextareaModule,
    MenuModule,
    ChartModule,
    CarouselModule,
    TableModule
  ]
})
export class PrimengModule { }
