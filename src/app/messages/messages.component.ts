import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: string[] = [];

  constructor(private messageService: MessagesService) { }

  ngOnInit() {
    this.messages = this.messageService.messages;
  }

  onClear() {
    this.messageService.clear();
    this.messages = this.messageService.messages;
  }

}
