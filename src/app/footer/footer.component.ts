import { Component, OnInit, ViewEncapsulation,ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.Native,
  changeDetection : ChangeDetectionStrategy.OnPush,
 
 
  
})
export class FooterComponent implements OnInit {
  _year : string;
 counter:number = 0;
  constructor() { }

  ngOnInit() {
  }

  @Input()
  set year(Year:string){
    this._year = Year && Year.trim() || '2019' ;
  }

  get year(){
    return this._year;
  }

  @Output () passData = new EventEmitter();

  OnClickPassData() :void{
    this.counter++;
    this.passData.emit(this.counter);
  }

  testChild(){
    console.log('test')
  }

}
