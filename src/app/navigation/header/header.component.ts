import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navigationEmitter = new EventEmitter<number>();

  constructor() { }
  collapsed = true;
  dropdownToggle = false;

  ngOnInit(): void {
  }

  navigateToFeature(featureCode: number){
    if (featureCode == 1){
      this.navigationEmitter.emit(1);
    }
    else if ( featureCode == 2){
      this.navigationEmitter.emit(2);
    }
  }
}
