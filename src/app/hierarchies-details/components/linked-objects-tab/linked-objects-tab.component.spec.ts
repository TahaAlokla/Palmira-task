import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LINKEDOBJECTSTabComponent } from './linked-objects-tab.component';

describe('LINKEDOBJECTSTabComponent', () => {
  let component: LINKEDOBJECTSTabComponent;
  let fixture: ComponentFixture<LINKEDOBJECTSTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LINKEDOBJECTSTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LINKEDOBJECTSTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
