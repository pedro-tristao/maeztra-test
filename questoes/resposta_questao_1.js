function isOrdered(number) {
    if(isPositiveAndInteger(number)) {
      if(checkNumberOrdenation(number)) {
        console.log('Valor está ordenado');
      }
      else {
        console.log('Valor não está ordenado');
      }
    }
    else {
      console.error('Insira um número válido!');
    }
  }
    
  function checkNumberOrdenation(number) {
    let splittedNumber = number.toString().split('');
    let rule = '';
  
    for(let i = 0; i < splittedNumber.length; i++) {
      let integerNum = parseInt(splittedNumber[i]);
      let nextIntegerNum = parseInt(splittedNumber[i + 1]);
      let previousIntegerNum = parseInt(splittedNumber[i - 1]);
  
      if(!rule) {
        rule = defineRule(integerNum, nextIntegerNum);
      }
      else {
        
        switch(rule) {
          case "growing":
            if(isGrowingWrong(integerNum, previousIntegerNum)) {
              return false;
            }
            break;
          case "decreasing":
            if(isDecreasingWrong(integerNum, previousIntegerNum)) {
              return false;
            }
            break;
        }
  
      }
    }
  
    return true;
  }
  
  function defineRule(number, next) {
    if(number < next) {
      return 'growing';
    }
    else if(number > next) {
      return 'decreasing'
    }
  }
  
  function isPositiveAndInteger(number) {
    return number > 0 && Number.isInteger(number);
  }
  
  function isGrowingWrong(number, previous) {
    return (number - previous) > 1 || (number - previous) < 0;
  }
  
  function isDecreasingWrong(number, previous) {
    return (previous - number) > 1 || (previous - number) < 0;
  }
  
  isOrdered(5678); 