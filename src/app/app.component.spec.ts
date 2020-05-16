import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let subject: AppComponent;

  beforeEach(() => {
    subject = new AppComponent();
  });

  describe('ngOnInit', () => {
    it('should read in the browserlist file and log it to the console', () => {
      subject.ngOnInit();
    });
  });
});
