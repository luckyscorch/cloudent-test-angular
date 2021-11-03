import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ListItemElement } from 'src/model/listItemElement.model';

@Component({
  selector: 'app-list-item-textarea',
  templateUrl: './list-item-textarea.component.html',
  styleUrls: ['./list-item-textarea.component.scss'],
})
export class ListItemTextareaComponent implements OnInit {
  @Input() item?: ListItemElement;

  @Output() modalEditEvent = new EventEmitter<ListItemElement>();

  active: string = '0';

  constructor() {}

  ngOnInit(): void {
    this.active = this.item?.defaultValue || '0';
  }

  onActiveChanged(eventData: string) {
    this.active = eventData;
  }

  openEditModal() {
    this.modalEditEvent.emit(this.item);
  }
}
