import { Component, signal } from '@angular/core';
import {
  CALCULATOR_PERIODS,
  CalculatorPeriodSelector,
  type CalculatorPeriod,
} from './calculator-period-selector';

const PERIOD_LABELS: Record<CalculatorPeriod, string> = {
  '1 Y': '1 Year',
  '3 Y': '3 Years',
  '5 Y': '5 Years',
  'Since Inception': 'Since Inception',
};

const INVESTMENTS = ['SIP', 'Lumpsum'] as const;
type Investment = (typeof INVESTMENTS)[number];

@Component({
  selector: 'app-calculator',
  imports: [CalculatorPeriodSelector],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  readonly periods = CALCULATOR_PERIODS;
  readonly activePeriod = signal<CalculatorPeriod>('1 Y');

  setPeriod(p: CalculatorPeriod): void {
    this.activePeriod.set(p);
  }

  periodLabel(): string {
    return PERIOD_LABELS[this.activePeriod()];
  }

  readonly investments: readonly Investment[] = [...INVESTMENTS];
  readonly activeInvestment = signal<Investment>('SIP');

  setInvestment(i: Investment) {
    this.activeInvestment.set(i);
  }

  updateRangeFill(event: Event): void {
    const el = event.target as HTMLInputElement;
    const min = Number(el.min);
    const max = Number(el.max);
    const value = Number(el.value);
    const pct = ((value - min) / (max - min)) * 100;
    el.style.setProperty('--range-progress', `${pct}%`);
  }
}
