import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ListItemElement } from 'src/model/listItemElement.model';
import { AnamnezisService } from '../services/anamnezis.service';
import { v4 as uuidv4 } from 'uuid';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anamnezis-edit-modal',
  templateUrl: './anamnezis-edit-modal.component.html',
  styleUrls: ['./anamnezis-edit-modal.component.scss'],
})
export class AnamnezisEditModalComponent implements OnChanges, OnInit {
  @Output() modalCloseEvent = new EventEmitter();
  @Input() selected?: ListItemElement;

  form = new FormGroup({
    id: new FormControl(''),
    type: new FormControl('', Validators.required),
    question: new FormControl(''),
    defaultValue: new FormControl('0'),
  });

  constructor(private anamnezisService: AnamnezisService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selected.currentValue) {
      this.form.setValue(changes.selected.currentValue);
    }
  }

  closeModal() {
    this.modalCloseEvent.emit();
  }

  onCreate() {
    const listItem: ListItemElement = {
      ...this.form.getRawValue(),
      id: uuidv4(),
    };
    this.anamnezisService.addNewItem(listItem);
    this.closeModal();
  }

  onDelete() {
    const id = this.form.get('id')?.value;
    if (id !== undefined) {
      this.anamnezisService.deleteItem(id);
      this.closeModal();
    }
  }

  onSave() {
    this.anamnezisService.saveItem({
      ...this.form.getRawValue(),
    });
    this.closeModal();
  }
}
