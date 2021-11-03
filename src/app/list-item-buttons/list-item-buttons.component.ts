import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item-buttons',
  templateUrl: './list-item-buttons.component.html',
  styleUrls: ['./list-item-buttons.component.scss'],
})
export class ListItemButtonsComponent implements OnInit {
  @Input() active?: string;
  @Output() activeChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  changeActive(num: string) {
    this.active = num;
    this.onActiveChanged();
  }

  onActiveChanged() {
    this.activeChanged.emit(this.active);
  }
}
