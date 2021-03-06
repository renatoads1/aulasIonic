import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Component', url: '/folder/Component', icon: 'grid' },
    { title: 'Button', url: '/botoes', icon: 'add' },
    { title: 'Alert', url: '/alert', icon: 'add' },
    { title: 'ActionSheet', url: '/actionshet', icon: 'add' },
    { title: 'Badge', url: '/badge', icon: 'add' },
    { title: 'Card', url: '/card', icon: 'add' },
    { title: 'CheckBox', url: '/checkbox', icon: 'add' },
    { title: 'Infinit Scroll', url: '/infinitscroll', icon: 'add' },
    { title: 'Input', url: '/input', icon: 'add' }
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
