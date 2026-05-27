import { Component, signal } from '@angular/core';
import { FundCard } from '../../components/fund-card/fund-card';
import { Overview } from '../../components/overview/overview';
import { Calculator } from '../../components/calculator/calculator';
import { Portfolio } from '../../components/portfolio/portfolio';
import { Allocation } from '../../components/allocation/allocation';
import { QuantitativeIndicators } from '../../components/quantitative-indicators/quantitative-indicators';
import { SchemeDetails } from '../../components/scheme-details/scheme-details';
import { CurrentNav } from '../../components/current-nav/current-nav';

@Component({
  selector: 'app-home',
  imports: [
    FundCard,
    Overview,
    Calculator,
    Portfolio,
    Allocation,
    SchemeDetails,
    CurrentNav,
    QuantitativeIndicators,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly activeNavHref = signal('#overview');

  readonly navLinks = [
    { href: '#overview', label: 'Overview' },
    { href: '#calculator', label: 'Calculator' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#scheme-details', label: 'Scheme Details' },
    { href: '#risk', label: 'Risk' },
    { href: '#fund-managers', label: 'Fund Managers' },
  ] as const;
}
