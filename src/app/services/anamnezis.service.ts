import { Injectable } from '@angular/core';
import { ListItemElement } from 'src/model/listItemElement.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class AnamnezisService {
  items: ListItemElement[] = [
    {
      id: uuidv4(),
      type: 'BOOLEAN',
      question: 'Hajlamos-e ájulásra?',
      defaultValue: '1',
    },
    {
      id: uuidv4(),
      type: 'TEXTAREA',
      question: 'Gyógyszeres kezelés alatt áll?',
      defaultValue: '2',
    },
    {
      id: uuidv4(),
      type: 'BOOLEAN',
      question: 'Kontrollra jött?',
      defaultValue: '0',
    },
  ];

  constructor() {}

  getItems() {
    return this.items;
  }

  addNewItem(listItem: ListItemElement) {
    this.items.push(listItem);
  }

  deleteItem(id: string) {
    let index = this.items.findIndex((item) => item.id === id);
    this.items.splice(index, 1);
  }

  saveItem(item: ListItemElement) {
    let index = this.items.findIndex((i) => i.id === item.id);
    this.items[index] = item;
  }
}
