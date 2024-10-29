import { Component } from '@angular/core';
import {InvestmentResultsService} from "./investment-results.service";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  constructor(private investmentResultsService: InvestmentResultsService){

  }

  get annualDataResults(){
    return this.investmentResultsService.annualData;
  }
}
