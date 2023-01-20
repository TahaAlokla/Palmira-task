import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuProfilePageComponent } from './side-menu-profile-page.component';

describe('SideMenuProfilePageComponent', () => {
  let component: SideMenuProfilePageComponent;
  let fixture: ComponentFixture<SideMenuProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuProfilePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
