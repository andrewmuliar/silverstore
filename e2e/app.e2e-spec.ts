import { LightriderPage } from './app.po';

describe('lightrider App', () => {
  let page: LightriderPage;

  beforeEach(() => {
    page = new LightriderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
