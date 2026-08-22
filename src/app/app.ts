import { Component, inject, OnInit, signal } from '@angular/core';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly seoService = inject(SeoService);

  protected readonly title = signal('fairport-oktoberfest');

  ngOnInit(): void {
    this.seoService.init();
  }
}
