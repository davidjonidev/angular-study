import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';
import * as countryData from '../phone-input/country-codes.json';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
})
export class PhoneInputComponent implements OnInit {
  countryData: any = (countryData as any).default;
  selectedCountry: string = '';
  countryMask = '';

  phoneInputMask = createMask({
    mask: '(9999-99)|(+(999) 9999-99)',
    keepStatic: true,
  });
  phoneFC = new FormControl('');

  constructor() {}
  ngOnInit() {
    console.log(this.countryData);
  }

  countryChanged(event: any) {
    console.log(event);
    this.countryMask = event.mask;
    this.phoneInputMask = createMask({
      mask: this.countryMask,
      keepStatic: true,
    });
    this.phoneFC = new FormControl('');
  }
}
