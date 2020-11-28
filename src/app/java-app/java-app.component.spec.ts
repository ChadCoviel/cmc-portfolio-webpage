import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaAppComponent } from './java-app.component';

describe('JavaAppComponent', () => {
  let component: JavaAppComponent;
  let fixture: ComponentFixture<JavaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
