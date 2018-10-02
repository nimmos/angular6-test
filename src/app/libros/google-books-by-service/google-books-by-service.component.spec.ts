import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleBooksByServiceComponent } from './google-books-by-service.component';

describe('GoogleBooksByServiceComponent', () => {
  let component: GoogleBooksByServiceComponent;
  let fixture: ComponentFixture<GoogleBooksByServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleBooksByServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleBooksByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
