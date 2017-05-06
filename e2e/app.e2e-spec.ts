import { PriceSpyWebPage } from './app.po';

describe('price-spy-web App', function() {
  let page: PriceSpyWebPage;

  beforeEach(() => {
    page = new PriceSpyWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
