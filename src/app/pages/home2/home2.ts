
import {
  Component,
  HostListener,
  signal,
} from '@angular/core';
import { FundCard } from '../../components/fund-card/fund-card';
import { Overview } from '../../components/overview/overview';
import { Calculator } from '../../components/calculator/calculator';
import { Portfolio } from '../../components/portfolio/portfolio';
import { Allocation } from '../../components/allocation/allocation';
import { QuantitativeIndicators } from '../../components/quantitative-indicators/quantitative-indicators';
import { SchemeDetails } from '../../components/scheme-details/scheme-details';
import { CurrentNav } from '../../components/current-nav/current-nav';

@Component({
  selector: 'app-home2',
  standalone: true,
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
  templateUrl: './home2.html',
  styleUrl: './home2.css',
})
export class Home2 {
  readonly activeNavHref = signal('/home2#overview');

  readonly navLinks = [
    { href: '/home2#overview', label: 'Overview' },
    { href: '/home2#calculator', label: 'Calculator' },
    { href: '/home2#portfolio', label: 'Portfolio' },
    { href: '/home2#scheme-details', label: 'Scheme Details' },
    { href: '/home2#risk-rating', label: 'Risk' },
    { href: '/home2#fund-managers', label: 'Fund Managers' },
  ] as const;

  private static readonly ACTIVE_SECTION_OFFSET = 140;

  ngAfterViewInit(): void {
    this.updateActiveSectionFromScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateActiveSectionFromScroll();
  }

  private updateActiveSectionFromScroll(): void {
    let activeHref: (typeof this.navLinks)[number]['href'] = this.navLinks[0].href;

    for (const link of this.navLinks) {
      const sectionId = link.href.split('#')[1];
      if (!sectionId) {
        continue;
      }

      const section = document.getElementById(sectionId);
      if (!section) {
        continue;
      }

      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= Home2.ACTIVE_SECTION_OFFSET) {
        activeHref = link.href;
      }
    }

    this.activeNavHref.set(activeHref);
  }
}
