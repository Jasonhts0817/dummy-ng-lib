import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyNgLibComponent } from './dummy-ng-lib.component';

describe('DummyNgLibComponent', () => {
  let component: DummyNgLibComponent;
  let fixture: ComponentFixture<DummyNgLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyNgLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DummyNgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
