import { MotogpAppPage } from './app.po';

describe('motogp-app App', function() {
  let page: MotogpAppPage;

  beforeEach(() => {
    page = new MotogpAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
