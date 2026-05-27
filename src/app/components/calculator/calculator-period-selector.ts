import { Component, input, output } from '@angular/core';

export const CALCULATOR_PERIODS = ['1 Y', '3 Y', '5 Y', 'Since Inception'] as const;
export type CalculatorPeriod = (typeof CALCULATOR_PERIODS)[number];

@Component({
  selector: 'app-calculator-period-selector',
  imports: [],
  templateUrl: './calculator-period-selector.html',
  styleUrl: './calculator-period-selector.css',
})
export class CalculatorPeriodSelector {
  readonly periods = input.required<readonly CalculatorPeriod[]>();
  readonly activePeriod = input.required<CalculatorPeriod>();
  readonly periodChange = output<CalculatorPeriod>();

  selectPeriod(period: CalculatorPeriod): void {
    this.periodChange.emit(period);
  }
}
