let outputUpper = document.querySelector('#upper');
    let outputLower = document.querySelector('#lower');
    function pressNum(e) {
      if (outputLower.innerHTML === '0') {
        outputLower.innerHTML = e.innerHTML;
      } else {
        outputLower.innerHTML += e.innerHTML;
      }
    }
    function pressAllClear() {
      outputUpper.innerHTML = '';
      outputLower.innerHTML = '0';
    }
    function pressClear() {
      outputLower.innerHTML = outputLower.innerHTML.slice(0, -1);
    }

    function pressEqual() {
      let exp = outputLower.innerHTML;
      outputUpper.innerHTML = exp;
      exp = exp.replace(/×/g, '*').replace(/÷/g, '/');
      let result;
      try {
        result = eval(exp);
        }
       catch (e) {
        result = 'Error';
      }
      outputLower.innerHTML = result;
    }
    function pressOperator(e) {
      let lastOperator = outputLower.innerHTML.slice(-1);
      if (lastOperator.includes('+', '-', '×', '÷')) {
        output.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
      } else {
        outputLower.innerHTML += e.innerHTML;
      }
    }
    function pressDot() {
      outputLower.innerHTML += '.';
    }
    function pressBracket(e) {
      outputLower.innerHTML += e.innerHTML;
    }