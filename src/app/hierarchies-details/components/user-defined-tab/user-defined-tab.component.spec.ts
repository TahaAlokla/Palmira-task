import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USERDEFINEDTabComponent } from './user-defined-tab.component';

describe('USERDEFINEDTabComponent', () => {
  let component: USERDEFINEDTabComponent;
  let fixture: ComponentFixture<USERDEFINEDTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ USERDEFINEDTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(USERDEFINEDTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
