import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  SL = 'shoppingList';
  RC = 'recipes';
  currentMenu: string;
  @Output() menuStatus = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.OnStatusChanged(this.SL);
  }

  OnStatusChanged(newStatus: string) {
    this.currentMenu = newStatus;
    this.menuStatus.emit(this.currentMenu);
  }

}
