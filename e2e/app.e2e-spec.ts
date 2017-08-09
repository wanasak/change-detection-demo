import { ChangeDetectionDemoPage } from './app.po';

describe('change-detection-demo App', () => {
  let page: ChangeDetectionDemoPage;

  beforeEach(() => {
    page = new ChangeDetectionDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
