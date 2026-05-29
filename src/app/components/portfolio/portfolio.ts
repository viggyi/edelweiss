import { Component, signal } from '@angular/core';

const TABS = ['Holdings', 'Entry/Exit of Stocks'] as const;
type Tab = (typeof TABS)[number];

const ASSET_TABS = ['Equity', 'Debt'] as const;
type AssetTab = (typeof ASSET_TABS)[number];

interface Holding {
  name: string;
  category: string;
  cap: string;
  pct: string;
}

const HOLDINGS: Holding[] = [
  { name: 'HDFC Bank Ltd.', category: 'Financials', cap: 'Large Cap', pct: '7.4%' },
  { name: 'Infosys Ltd.', category: 'Information Technology', cap: 'Large Cap', pct: '5.8%' },
  { name: 'Reliance Industries Ltd.', category: 'Oil, Gas & Fuels', cap: 'Large Cap', pct: '5.2%' },
  { name: 'Maruti Suzuki India Ltd.', category: 'Automobiles', cap: 'Large Cap', pct: '4.6%' },
  { name: 'ICICI Bank Ltd.', category: 'Financials', cap: 'Large Cap', pct: '4.2%' },
  { name: 'NTPC LTD', category: 'Power', cap: 'Large Cap', pct: '3.58%' },
  { name: 'Larsen & Toubro Ltd', category: 'Construction', cap: 'Large Cap', pct: '3.38%' },
  { name: 'State Bank Of India', category: 'Financials', cap: 'Large Cap', pct: '3.07%' },
  { name: 'Tata Steel Ltd.', category: 'Metals & Mining', cap: 'Large Cap', pct: '2.57%' },
  { name: 'Infosys Ltd', category: 'Information Technology', cap: 'Large Cap', pct: '2.25%' },
  { name: 'Bharti Airtel Ltd', category: 'Telecommunication', cap: 'Large Cap', pct: '1.97%' },
];

const EXTRA_HOLDINGS: Holding[] = [
  { name: 'Axis Bank Ltd.', category: 'Financials', cap: 'Large Cap', pct: '1.82%' },
  { name: 'Asian Paints Ltd.', category: 'Consumer Goods', cap: 'Large Cap', pct: '1.64%' },
  { name: 'Hindustan Unilever Ltd.', category: 'FMCG', cap: 'Large Cap', pct: '1.51%' },
];

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  readonly tabs = TABS;
  readonly assetTabs = ASSET_TABS;
  readonly holdings = HOLDINGS;

  readonly activeTab = signal<Tab>('Holdings');
  readonly activeAssetTab = signal<AssetTab>('Equity');
  showAll = false;

  setTab(t: Tab) { this.activeTab.set(t); }
  setAssetTab(a: AssetTab) { this.activeAssetTab.set(a); }

  get visibleHoldings(): Holding[] {
    return this.showAll ? [...this.holdings, ...EXTRA_HOLDINGS] : this.holdings;
  }
}
