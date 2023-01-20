import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RESPONSIBILITIESTabComponent } from './responsibilities-tab.component';

describe('RESPONSIBILITIESTabComponent', () => {
  let component: RESPONSIBILITIESTabComponent;
  let fixture: ComponentFixture<RESPONSIBILITIESTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RESPONSIBILITIESTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RESPONSIBILITIESTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
