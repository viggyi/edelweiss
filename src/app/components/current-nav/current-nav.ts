import { Component } from '@angular/core';

export interface NavPlanRow {
  label: string;
  price: string;
  pct: string;
  change: string;
}

@Component({
  selector: 'app-current-nav',
  imports: [],
  templateUrl: './current-nav.html',
  styleUrl: './current-nav.css',
})
export class CurrentNav {
  readonly navPlans: NavPlanRow[] = [
    { label: 'Growth', price: '₹38.536', pct: '0.79%', change: '+₹0.30' },
    { label: 'IDCW Payout', price: '₹36.721', pct: '0.77%', change: '+₹0.28' },
    { label: 'IDCW Reinvestment', price: '₹36.698', pct: '0.77%', change: '+₹0.28' },
  ];
}
