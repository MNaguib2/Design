import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms'; 
import { SelectComponent } from './select.component';
import { FilterSelectEasy } from "./filterSelect.pip";
@NgModule({
    declarations:[
        SelectComponent,
        FilterSelectEasy
    ],
    imports:[
        BrowserModule,
        CommonModule, //this responsable 
        FormsModule
    ],
    providers: [

    ]
})

export class SelectModule{}