import {Store} from './store';

export const BestBuy: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.fulfillment-add-to-cart-button',
      text: ['add to cart'],
    },
    outOfStock: {
      container:
        'button.c-button.c-button-disabled[data-button-state="SOLD_OUT]',
      text: ['coming soon'],
    },
    maxPrice: {
      container: '.priceView-price',
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://api.bestbuy.com/click/-/6258941/pdp',
    },
    {
      brand: 'nvidia',
      cartUrl: 'https://api.bestbuy.com/click/-/6614153/cart',
      model: 'founders edition',
      series: '5080',
      url: 'https://api.bestbuy.com/click/-/6614153/pdp',
    },
    {
      brand: 'nvidia',
      // cartUrl: 'https://api.bestbuy.com/click/-/6614151/cart',
      model: 'founders edition',
      series: '5090',
      url: 'https://api.bestbuy.com/click/-/6614151/pdp',
    },
    {
      brand: 'gigabyte',
      cartUrl: 'https://api.bestbuy.com/click/-/6616102/cart',
      model: 'founders edition',
      series: '5080',
      url: 'https://www.bestbuy.com/site/gigabyte-nvidia-geforce-rtx-5080-windforce-oc-sff-32g-gddr7-pci-express-5-0-graphics-card/6616102.p?skuId=6616102',
    },
    {
      brand: 'gigabyte',
      cartUrl: 'https://api.bestbuy.com/click/-/6616102/cart',
      model: 'windforce',
      series: '5080',
      url: 'https://www.bestbuy.com/site/gigabyte-nvidia-geforce-rtx-5080-windforce-oc-sff-32g-gddr7-pci-express-5-0-graphics-card/6616102.p?skuId=6616102',
    },
    {
      brand: 'gigabyte',
      cartUrl: 'https://api.bestbuy.com/click/-/6616102/cart',
      model: 'windforce oc',
      series: '5080',
      url: 'https://www.bestbuy.com/site/gigabyte-nvidia-geforce-rtx-5080-windforce-oc-sff-32g-gddr7-pci-express-5-0-graphics-card/6616102.p?skuId=6616102',
    },
    {
      brand: 'gigabyte',
      cartUrl: 'https://api.bestbuy.com/click/-/6615925/cart',
      model: 'gaming oc',
      series: '5080',
      url: 'https://www.bestbuy.com/site/gigabyte-nvidia-geforce-rtx-5080-gaming-oc-32g-gddr7-pci-express-5-0-graphics-card/6615925.p?skuId=6615925',
    },
    {
      brand: 'gigabyte',
      cartUrl: 'https://api.bestbuy.com/click/-/6615934/cart',
      model: 'gaming oc',
      series: '5080',
      url: 'https://www.bestbuy.com/site/gigabyte-nvidia-geforce-rtx-5080-aorus-master-ice-gddr7-pci-express-5-0-graphics-card/6615934.p?skuId=6615934',
    },
    {
      brand: 'gigabyte',
      cartUrl: 'https://api.bestbuy.com/click/-/6615924/cart',
      model: 'aorus master',
      series: '5080',
      url: 'https://www.bestbuy.com/site/gigabyte-nvidia-geforce-rtx-5080-aorus-master-32g-gddr7-pci-express-5-0-graphics-card/6615924.p?skuId=6615924',
    },
    {
      brand: 'gigabyte',
      cartUrl: 'https://api.bestbuy.com/click/-/6615924/cart',
      model: 'aero',
      series: '5080',
      url: 'https://www.bestbuy.com/site/gigabyte-nvidia-geforce-rtx-5080-aero-sff-oc-32g-gddr7-pci-express-5-0-graphics-card/6616100.p?skuId=6616100',
    }
  ],
  name: 'bestbuy',
};
