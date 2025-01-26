import {Store} from './store';
import fetch from 'node-fetch';

export const Newegg: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['are you a human?'],
    },
    inStock: [
      {
        container: '.product-buy',
        text: ['add to cart'],
      },
      {
        container: '.loading-text',
        text: ['add to cart'],
      },
    ],
    maxPrice: {
      container: '.price-current',
    },
    outOfStock: [
      {
        container: '.product-inventory',
        text: [' out of stock.'],
      },
      {
        container: '.product-flag',
        text: ['out of stock '],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.newegg.com/western-digital-blue-500gb/p/N82E16820250087?Item=N82E16820250087',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932756',
      model: 'aero oc',
      series: '5080',
      url: 'https://www.newegg.com/gigabyte-gv-n5080aero-oc-16gd-nvidia-geforce-rtx-5080-16gb-gddr7/p/N82E16814932756',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932755',
      model: 'aorus xtreme',
      series: '5080',
      url: 'https://www.newegg.com/gigabyte-gv-n5080aorus-m-16gd-nvidia-geforce-rtx-5080-16gb-gddr7/p/N82E16814932755',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932754',
      model: 'windforce',
      series: '5080',
      url: 'https://www.newegg.com/gigabyte-windforce-gv-n5080wf3oc-16gd-nvidia-geforce-rtx-5080-16gb-gddr7/p/N82E16814932754',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932753',
      model: 'gaming oc',
      series: '5080',
      url: 'https://www.newegg.com/asus-rog-astral-rog-astral-rtx5090-o32g-gaming-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814932753',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137913',
      model: 'ventus 2x',
      series: '5080',
      url: 'https://www.newegg.com/msi-rtx-5080-16g-ventus-3x-oc-plus-nvidia-geforce-rtx-5080-16gb-gddr7/p/N82E16814137913',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137910',
      model: 'strix white',
      series: '5080',
      url: 'https://www.newegg.com/msi-rtx-5080-16g-gaming-trio-oc-nvidia-geforce-rtx-5080-16gb-gddr7/p/N82E16814137910',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137909',
      model: 'gaming oc',
      series: '5080',
      url: 'https://www.newegg.com/msi-rtx-5080-16g-gaming-trio-oc-white-nvidia-geforce-rtx-5080-16gb-gddr7/p/N82E16814137909',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137908',
      model: 'vanguard',
      series: '5080',
      url: 'https://www.newegg.com/msi-rtx-5080-16g-vanguard-soc-nvidia-geforce-rtx-5080-16gb-gddr7/p/N82E16814137908',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137905',
      model: 'suprim',
      series: '5080',
      url: 'https://www.newegg.com/msi-rtx-5080-16g-suprim-liquid-soc-nvidia-geforce-rtx-5080-16gb-gddr7/p/N82E16814137905',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126743',
      model: 'tuf',
      series: '5080',
      url: 'https://www.newegg.com/asus-tuf-gaming-tuf-rtx5080-o16g-gaming-nvidia-geforce-rtx-5080-16gb-gddr7/p/N82E16814126743',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126744',
      model: 'prime',
      series: '5080',
      url: 'https://www.newegg.com/asus-prime-rtx5080-o16g-nvidia-geforce-rtx-5080-16gb-gddr7/p/N82E16814126744',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126744',
      model: 'prime',
      series: '5080',
      url: 'https://www.newegg.com/asus-prime-rtx5080-o16g-nvidia-geforce-rtx-5080-16gb-gddr7/p/N82E16814126744',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137920',
      model: 'ventus 2x',
      series: '5090',
      url: 'https://www.newegg.com/msi-rtx-5090-32g-ventus-3x-oc-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137920',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137916',
      model: 'ventus 2x',
      series: '5090',
      url: 'https://www.newegg.com/msi-rtx-5090-32g-suprim-liquid-soc-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137916',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137916',
      model: 'suprim',
      series: '5090',
      url: 'https://www.newegg.com/msi-rtx-5090-32g-suprim-liquid-soc-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137916',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137915',
      model: 'suprim x',
      series: '5090',
      url: 'https://www.newegg.com/msi-rtx-5090-32g-suprim-soc-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137915',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137919',
      model: 'gaming oc',
      series: '5090',
      url: 'https://www.newegg.com/msi-rtx-5090-32g-gaming-trio-oc-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814137919',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814500593',
      model: 'amp',
      series: '5090',
      url: 'https://www.newegg.com/zotac-amp-extreme-infinity-zt-b50900b-10p-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814500593',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126752',
      model: 'tuf',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814126752',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126753',
      model: 'tuf2',
      series: '5090',
      url: 'https://www.newegg.com/p/N82E16814126753',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126751',
      model: 'rog',
      series: '5090',
      url: 'https://www.newegg.com/asus-rog-astral-rog-astral-rtx5090-o32g-gaming-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814126751',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126750',
      model: 'astral',
      series: '5090',
      url: 'https://www.newegg.com/asus-rog-astral-rog-astral-rtx5090-32g-gaming-nvidia-geforce-rtx-5090-32gb-gddr7/p/N82E16814126750',
    },
    {
      brand: 'sparkle',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814993013',
      model: 'b580',
      series: 'arc',
      url: 'https://www.newegg.com/sparkle-intel-arc-b580-titan-oc-12gb-gddr6/p/N82E16814993013',
    },
    {
      brand: 'lianli',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=2AM-000Z-000E0',
      model: 'a3 matx wd',
      series: 'a3-matx',
      url: 'https://www.newegg.com/p/2AM-000Z-000E0',
    },
  ],
  name: 'newegg',
  realTimeInventoryLookup: async (itemNumber: string) => {
    const request_url =
      'https://www.newegg.com/product/api/ProductRealtime?ItemNumber=' +
      itemNumber;
    const response = await fetch(request_url);
    const response_json = await response.json();
    return (
      response_json.MainItem !== undefined &&
      response_json.MainItem.Instock === true
    );
  },
};
