import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'age'
})
export class ZodiacPipe implements PipeTransform {

  transform(value: Date) {
    if(value==null){
      return '';
    }
    const today = new Date();
   
    //calculate the age
    const birthDate =new Date(value);
    const ageInMilliseconds=today.getTime()-birthDate.getTime();
    const ageInYears=Math.floor(ageInMilliseconds/(1000*60*60*24*365));

    if(ageInYears<0){
        return 'Date in future. Please enter a date in the past.';
    }else{
        return `${ageInYears} year old`;
   
    }
  return ageInYears;
  }
}
