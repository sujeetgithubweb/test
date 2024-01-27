import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationAboutComponent } from './certification-about.component';

describe('CertificationAboutComponent', () => {
  let component: CertificationAboutComponent;
  let fixture: ComponentFixture<CertificationAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificationAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
