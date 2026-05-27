import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-investment-toggle',
  imports: [],
  templateUrl: './investment-toggle.html',
  styleUrl: './investment-toggle.css',
})
export class InvestmentToggle {
  active = signal<'lumpsum' | 'sip'>('sip');

  setActive(tab: 'lumpsum' | 'sip') {
    this.active.set(tab);
  }
}
