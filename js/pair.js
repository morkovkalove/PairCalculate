let btnCalc = document.querySelector('#first_butt');
let clear = document.querySelector('#clear_one');


let textArea = document.querySelector('#textarea_first');

btnCalc.addEventListener("click", function(){
  mainCalculate();
});

clear.addEventListener("click", function(){
  clearBox();
})

function mainCalculate() {
  let input1 = document.querySelector('#one_child');
  let input2 = document.querySelector('#two_child');
  let input3 = document.querySelector('#third_child');
  //let input4 = document.querySelector('#four_child');


  //f[2.1]:
  let qh = ((+input1.value * +input2.value) / 60);
  //f[2.6]:
  let am = (+input1.value * +input3.value) / (+qh * 60);
  //f[2.8]:
  let i = (+input3.value/ am);
  //f[2.9]
  let aH = (60 / i);

  let result = aH;



  if(!isNaN(result) && result !== 0) {
    textArea.innerHTML = `Результат парности частоты движения: ${result.toFixed(1)}
Требуемое кол-во подвижного состава : ${am.toFixed(1)}`;

  }

  else if(result == Infinity) {
    textArea.innerHTML = 'Некорректно указаны данные.Попробуйте ещё раз.'
  }

  else {
    textArea.innerHTML = `Для корректного рассчета необходимо ввести данные !`;

  }
}

function clearBox(){
  document.getElementById("one_child").value = "";
  document.getElementById("two_child").value = "";
  document.getElementById("third_child").value = "";
  // document.getElementById("four_child").value = "";
  document.getElementById("textarea_first").innerHTML ="";
}
