import { Component, OnInit } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-accordation',
  templateUrl: './accordation.component.html',
  styleUrls: ['./accordation.component.css'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class AccordationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
