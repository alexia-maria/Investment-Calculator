import {Injectable} from "@angular/core";
import {UserInput} from "../user-input/user-input.model";
import {AnnualData} from "./investment-results.model";

@Injectable({providedIn: 'root'})
export class InvestmentResultsService{

  private annualData_: AnnualData[] = [];
   calculateInvestmentResults(userInput: UserInput) {

    let investmentValue = userInput.initialInvestment;

    for (let i = 0; i < userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (userInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userInput.annualInvestment;
      const totalInterest =
        investmentValue - userInput.annualInvestment * year - userInput.initialInvestment;
      this.annualData_.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: userInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: userInput.initialInvestment + userInput.annualInvestment * year,
      });
    }

   // return this.annualData;
  }

  get annualData(){
     return this.annualData_;
  }

  onCalculateClearData(){
     this.annualData_ = [];
  }
}
