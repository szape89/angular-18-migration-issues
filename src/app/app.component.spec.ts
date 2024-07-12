import {} from '@angular/common/http';
import {} from '@angular/common/http/testing';
import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: MockedComponentFixture<AppComponent>;

  beforeEach(() =>
    MockBuilder(AppComponent).replace(HttpClientModule, HttpClientTestingModule)
  );

  beforeEach(() => {
    fixture = MockRender(AppComponent);
  });

  it('should create', () => {
    expect(fixture.point.componentInstance).toBeDefined();
  });
});
