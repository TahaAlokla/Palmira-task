import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyInfoTabComponent } from './hierarchy-info-tab.component';

describe('HierarchyInfoTabComponent', () => {
  let component: HierarchyInfoTabComponent;
  let fixture: ComponentFixture<HierarchyInfoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HierarchyInfoTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HierarchyInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
