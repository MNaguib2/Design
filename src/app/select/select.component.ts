import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @ViewChild('InputEasy') InputEasy !: ElementRef;
  @ViewChild('diveMenuEasy') diveMenuEasy !: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2) {  

    this.renderer.listen('window', 'click',(e:Event)=>{
     if(e.target !== this.InputEasy.nativeElement){
      this.diveMenuEasy.nativeElement.setAttribute('style', 'display: none');
     }
    });
   }

  filteredStatus : string = "";


  ngOnInit(): void {
  }
  ItemsSelectEasy: Array<string> = ["test1", "mena", " Data", "one", "Two", "Three", "Afefe", "Madona", "Romel", "Married", "Love", "This", "Girl"]


  showinputSearch() {

    if (getComputedStyle(this.diveMenuEasy.nativeElement).display == "block") {
      this.diveMenuEasy.nativeElement.setAttribute('style', 'display: none');
    } else {
      this.diveMenuEasy.nativeElement.setAttribute('style', 'display: block');
    }
  }

  shadowItem(event: Event){
    (event.srcElement as HTMLElement).setAttribute("style", "background-color: #7f7575;cursor: pointer;")
  }
  cancelShadow(event: Event){
    (event.srcElement as HTMLElement).setAttribute("style", "background-color: none;cursor: none;")
  }
  selectItem(event: Event){
      
  }
}
