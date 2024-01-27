import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { AboutSliderComponent } from "./components/about-slider/about-slider.component";
import { CertificationAboutComponent } from "./components/certification-about/certification-about.component";
import { CertificationCarouselComponent } from "./components/certification-carousel/certification-carousel.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { StoriesCarouselComponent } from "./components/stories-carousel/stories-carousel.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, AboutComponent, AboutSliderComponent, CertificationAboutComponent, CertificationCarouselComponent, FooterComponent, NavbarComponent, StoriesCarouselComponent]
})
export class AppComponent {
  title = 'Test';
  
}
