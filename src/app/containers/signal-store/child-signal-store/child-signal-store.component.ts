import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'g-child-signal-store',
  templateUrl: './child-signal-store.component.html',
  styleUrl: './child-signal-store.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzCardComponent, NzButtonComponent],
})
export class ChildSignalStoreComponent {
  counterValue = input.required<number>();
  counterValueChange = output<void>();

  // counterValue = model<number>();
}
