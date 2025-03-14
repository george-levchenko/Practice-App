import { ChangeDetectionStrategy, Component, computed, effect, linkedSignal, signal } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { FormsModule } from '@angular/forms';
import { ChildSignalStoreComponent } from './child-signal-store/child-signal-store.component';

@Component({
  selector: 'g-signal-store',
  templateUrl: './signal-store.component.html',
  styleUrl: './signal-store.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzCardComponent, NzButtonComponent, NzInputNumberComponent, FormsModule, ChildSignalStoreComponent],
})
export class GSignalStoreComponent {
  counter = signal(0);
  computedCounter = computed(() => {
    return this.counter() * 10;
  });
  linkedCounter = linkedSignal(() => {
    return this.counter() * 10;
  });
  timesChanged = signal(0);

  timesChangedEffect = effect(() => {
    this.counter();
    this.timesChanged.update(value => value + 1);
  });

  incrementCounter() {
    this.counter.update(value => value + 1);
  }

  decrementCounter() {
    this.counter.update(value => value - 1);
  }

  resetCounter() {
    this.linkedCounter.set(0);
  }
}
