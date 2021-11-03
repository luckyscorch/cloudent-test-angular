import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListItemElement } from 'src/model/listItemElement.model';

@Component({
  selector: 'app-list-item-boolean',
  templateUrl: './list-item-boolean.component.html',
  styleUrls: ['./list-item-boolean.component.scss'],
})
export class ListItemBooleanComponent implements OnInit {
  @Input() item?: ListItemElement;

  @Output() modalEditEvent = new EventEmitter<ListItemElement>();

  constructor() {}

  ngOnInit(): void {}

  openEditModal() {
    this.modalEditEvent.emit(this.item);
  }
}
