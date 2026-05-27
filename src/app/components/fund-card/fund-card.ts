import { Component } from '@angular/core';
import { InvestmentToggle } from '../investment-toggle/investment-toggle';
import { PeriodSelector } from '../period-selector/period-selector';

@Component({
  selector: 'app-fund-card',
  imports: [InvestmentToggle, PeriodSelector],
  templateUrl: './fund-card.html',
  styleUrl: './fund-card.css',
})
export class FundCard {}
