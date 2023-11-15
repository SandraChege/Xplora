import { Component } from '@angular/core';
import { Modal, Ripple, initTE, Tab, Input } from 'tw-elements';

@Component({
  selector: 'app-adminbookings',
  templateUrl: './adminbookings.component.html',
  styleUrls: ['./adminbookings.component.css'],
})
export class AdminbookingsComponent {
  ngOnIt() {
    initTE({ Modal, Ripple, Tab, Input });
  }
}
