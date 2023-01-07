import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendinginvitesComponent } from './pendinginvites.component';

describe('PendinginvitesComponent', () => {
  let component: PendinginvitesComponent;
  let fixture: ComponentFixture<PendinginvitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendinginvitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendinginvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
