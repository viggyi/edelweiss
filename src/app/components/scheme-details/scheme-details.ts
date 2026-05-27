import { Component, signal } from '@angular/core';

type SchemeTab = 'about' | 'features';

@Component({
  selector: 'app-scheme-details',
  imports: [],
  templateUrl: './scheme-details.html',
  styleUrl: './scheme-details.css',
})
export class SchemeDetails {
  readonly activeTab = signal<SchemeTab>('about');

  setTab(tab: SchemeTab): void {
    this.activeTab.set(tab);
  }
}
