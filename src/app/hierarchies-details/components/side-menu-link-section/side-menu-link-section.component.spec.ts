import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuLinkSectionComponent } from './side-menu-link-section.component';

describe('SideMenuLinkSectionComponent', () => {
  let component: SideMenuLinkSectionComponent;
  let fixture: ComponentFixture<SideMenuLinkSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuLinkSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuLinkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
