import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationCarouselComponent } from './certification-carousel.component';

describe('CertificationCarouselComponent', () => {
  let component: CertificationCarouselComponent;
  let fixture: ComponentFixture<CertificationCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificationCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
