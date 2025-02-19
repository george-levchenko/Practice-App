import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { RouterLink } from '@angular/router';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { NzModalComponent, NzModalContentDirective, NzModalFooterDirective } from 'ng-zorro-antd/modal';

@Component({
  selector: 'g-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzRowDirective, RouterLink, NzTooltipDirective, NzModalComponent, NzColDirective, NzModalContentDirective, NzModalFooterDirective],
})
export class GFooterComponent {
  showAuthorModal = false;
}
