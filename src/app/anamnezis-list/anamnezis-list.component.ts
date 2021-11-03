import { Component, OnInit, Output } from '@angular/core';
import { ListItemElement } from 'src/model/listItemElement.model';
import { AnamnezisService } from '../services/anamnezis.service';

@Component({
  selector: 'app-anamnezis-list',
  templateUrl: './anamnezis-list.component.html',
  styleUrls: ['./anamnezis-list.component.scss'],
})
export class AnamnezisListComponent implements OnInit {
  showModal: boolean = false;
  items: ListItemElement[] = [];
  selectedItem?: ListItemElement;

  constructor(private anamnezisService: AnamnezisService) {}

  ngOnInit(): void {
    this.items = this.anamnezisService.getItems();
  }

  closeModal() {
    this.showModal = false;
    this.selectedItem = undefined;
  }

  openModal(listItem?: ListItemElement) {
    if (listItem) {
      this.selectedItem = listItem;
    }
    this.showModal = true;
  }
}
