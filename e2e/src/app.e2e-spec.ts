import {AppPage} from './app.po';
import {browser, by, element} from 'protractor';
import {RegressionSlopeValidator} from '@angular/benchpress';

const benchpress = require('@angular/benchpress');
const runner = new benchpress.Runner([
  // use protractor as Webdriver client
  benchpress.SeleniumWebDriverAdapter.PROTRACTOR_PROVIDERS,
  // use RegressionSlopeValidator to validate samples
  {provide: benchpress.Validator, useExisting: benchpress.RegressionSlopeValidator},
  // use 10 samples to calculate slope regression
  {provide: benchpress.RegressionSlopeValidator.SAMPLE_SIZE, useValue: 1},
  // use the script metric to calculate slope regression
  {provide: benchpress.RegressionSlopeValidator.METRIC, useValue: 'scriptTime'},
  {provide: benchpress.Options.FORCE_GC, useValue: true}
]);


describe('workspace-project App', () => {
  // let page: AppPage;

  beforeEach(() => {
    // page = new AppPage();
  });

  it('should display welcome message', (done) => {
    runner.sample({
      execute: () => {
        browser.get(`/`);
      },
      userMetrics: {
        timeToBootstrap: 'The time in milliseconds to bootstrap'
      },
      providers: [
        {provide: RegressionSlopeValidator.METRIC, useValue: 'timeToBootstrap'}
      ]
    }).then(done, done.fail);
  });
});
