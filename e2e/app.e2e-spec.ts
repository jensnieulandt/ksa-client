import { KsaNg2Page } from './app.po';

describe('ksa-ng2 App', () => {
  let page: KsaNg2Page;

  beforeEach(() => {
    page = new KsaNg2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
