
let btn = document.querySelector('#second_butt');
let clearBtn = document.querySelector('#clear_two');

btn.addEventListener("click", function() {
  totalCalculate();
});

clearBtn.addEventListener("click", function(){
  clearDatas();
})

function totalCalculate(){
  let inp = document.querySelector('#simple_input');
  let textarea = document.querySelector('#textarea_mini');

  let startVal = 60;

  let result  = (+startVal / +inp.value).toFixed(1);

  if(!isNaN(result) && result !== 0 && result != Infinity) {
    textarea.innerHTML = 'Значение парности: ' + result;
  }

  else if(result < 0) {
    textarea.innerHTML = 'Некорректно указаны данные.Попробуйте ещё раз.';
  }

  else if(result === Infinity) {
    textarea.innerHTML = 'Некорректно указаны данные.Попробуйте ещё раз.';
  }

  else{
    textarea.innerHTML = 'Введено неверное значение. Попробуйте ещё раз!';
  }

}

function clearDatas() {

  document.getElementById("simple_input").value = "";
  document.getElementById("textarea_mini").innerHTML = "";


}
