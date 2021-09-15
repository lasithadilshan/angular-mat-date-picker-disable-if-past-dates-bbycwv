import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
/** @title Basic datepicker */
@Component({
  selector: 'datepicker-overview-example',
  templateUrl: 'datepicker-overview-example.html',
  styleUrls: ['datepicker-overview-example.css']
})
export class DatepickerOverviewExample {
  @Input() min: any;
  yesterday = new Date();

  constructor() {
    this.yesterday.setDate(this.yesterday.getDate() - 0);
  }
}
