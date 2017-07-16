import { TiboaFrontPage } from './app.po';

describe('tiboa-front App', () => {
  let page: TiboaFrontPage;

  beforeEach(() => {
    page = new TiboaFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
