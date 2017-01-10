import { NgxChartTestPage } from './app.po';

describe('ngx-chart-test App', function() {
  let page: NgxChartTestPage;

  beforeEach(() => {
    page = new NgxChartTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
