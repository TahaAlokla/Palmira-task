import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTableSectionComponent } from './side-table-section.component';

describe('SideTableSectionComponent', () => {
  let component: SideTableSectionComponent;
  let fixture: ComponentFixture<SideTableSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideTableSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideTableSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
