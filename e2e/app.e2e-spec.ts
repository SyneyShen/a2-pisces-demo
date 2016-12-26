import { A2PiscesDemoPage } from './app.po';

describe('a2-pisces-demo App', function() {
  let page: A2PiscesDemoPage;

  beforeEach(() => {
    page = new A2PiscesDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
