import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzContentComponent, NzFooterComponent, NzHeaderComponent, NzLayoutComponent } from 'ng-zorro-antd/layout';
import { GHeaderComponent } from './containers/core/header/header.component';
import { GFooterComponent } from './containers/core/footer/footer.component';

@Component({
  selector: 'g-root',
  imports: [RouterOutlet, NzHeaderComponent, NzLayoutComponent, GHeaderComponent, NzContentComponent, NzFooterComponent, GFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
