var label = document.querySelector('label');
label.onclick = function(e){
    label.innerHTML = 'HI!'
}

var input = document.querySelector('input');
input.onclick = function(e){
    
    if (input.checked) {
        console.log('checked!')
    }

};

var form = document.forms[0];
var select = form.elements.genre;

for (var i = 0; i < select.options.length; i++) {
    var element = select.options[i];
    if (element.selected) {
        element.style.color = 'red';
        console.log(element.value + ' is checked');
    }
};


// 222222222222222222222222222222222222

var newForm = document.forms[1];
var select = newForm.elements.genre;
var option = new Option("Классика", "Classic");
select.appendChild(option);

for (var i = 0; i < select.options.length; i++) {
    var element = select.options[i];
    if (element.selected) {
        console.log(element);
        console.log(element.text);
    };

    if (!option.hasAttribute('selected')) {
        option.setAttribute('selected','')
    }

};

// 333333333333333333333333333333333333

var input = document.getElementById('inputAge');
var id2  = document.getElementById('error');



// input.onblur = function(){
//     if (isNaN(this.value)) {
//         this.classList.add("error");
//         id2.innerHTML = 'ERROR!!!'
//     }
// };

// input.onfocus = function(){
//     if (this.classList.contains("error")) {
//         this.classList.remove("error");
//         id2.innerHTML = '';
//     }
// };

//нельзя уйти с элемента:

// input.onblur = function(){
//     if (isNaN(this.value)) {
//         this.classList.add("error");
//         this.focus();
//         id2.innerHTML = 'ERROR!!!';
//     } else {
//         this.classList.remove("error");
//         id2.innerHTML = '';
//     }
// };

// 5555555555555555555555555555555555555

var myForm5 = document.getElementById('myForm5');
myForm5.addEventListener('focus', toFocus , true);
myForm5.addEventListener('blur', toBlur , true)



function toFocus(){
    myForm5.classList.add("focused");
};

function toBlur(){
    myForm5.classList.remove("focused");
};

// 66666666666666666666666666666666666666

var myForm6 = document.getElementById('myForm6');
var input = myForm6.querySelector(".input6");
var inputPlaceholder = input.placeholder;

input.addEventListener('focus', addNewP);
input.addEventListener('blur', deleteP);



myForm6.addEventListener('focus', toFocus , true);
myForm6.addEventListener('blur', toBlur , true)

function addNewP(){
    var p = document.createElement('p');
    p.innerHTML = inputPlaceholder;
    p.classList.add('newP');
    myForm6.insertBefore(p, myForm6.querySelector("p"))
    deletePlaceholder();
}

function deleteP(){
    var newP = myForm6.querySelector(".newP");
    newP.remove();
    insertPlaceholder();
}

function deletePlaceholder(){
    return input.placeholder = '';
}

function insertPlaceholder(){
    return input.placeholder = inputPlaceholder;
}

function toFocus(){
    myForm6.classList.add("focused");
};

function toBlur(){
    myForm6.classList.remove("focused");
};

// 77777777777777777777777777777777777777777


var mouse = document.getElementById('mouse');
mouse.onclick = function(event){
      this.style.left = this.getBoundingClientRect().left + 'px';
      this.style.top = this.getBoundingClientRect().top + 'px';
      this.style.position = 'fixed';
}

    document.getElementById('mouse').onkeydown = function(e) {
      switch (e.keyCode) {
        case 37: // влево
          this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
          return false;
        case 38: // вверх
          this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
          return false;
        case 39: // вправо
          this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
          return false;
        case 40: // вниз
          this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
          return false;
      }
}


// 8888888888888888888888888888888888888

var result = document.getElementById('result');
var items = document.getElementById('items');

function showCount(){
    result.innerHTML = items.value.length;
};

items.onkeyup = items.oninput = showCount

// 99999999999999999999999999999999999999

var newForm = document.forms[4];
var summStart = document.getElementById('summStart');
var capitalization = document.getElementById('capitalization');


newForm.onkeyup = newForm.oninput = onchange = calculate;

function calculate(){
    var summStartIsNum = +summStart.value;
if (isNaN(summStartIsNum)) { alert('put the number!!') };

var newForm = document.forms[4];
var select = newForm.elements.monthVolume;
var numberOfMonth = sel(select);

var moneyBefore = document.getElementById('money-before');
var moneyAfter = document.getElementById('money-after');

var diagram_1 = document.getElementById('diagram_1');
var diagram_2 = document.getElementById('diagram_2');

moneyBefore.innerHTML = summStartIsNum;

if (capitalization.checked) {
    var result = Math.floor(summStartIsNum*(Math.pow((1 + 0.12), (numberOfMonth/12))));
    moneyAfter.innerHTML = result
    diagram_2.style.height = 100 * (result/summStartIsNum) + 'px';
} else {
    var result = Math.floor(((summStartIsNum + summStartIsNum * 0.12)/12)*numberOfMonth);
    moneyAfter.innerHTML = result;
    diagram_2.style.height = 100 * (result/summStartIsNum) + 'px';
}
};

function sel(select) {
for (var i = 0; i < select.options.length; i++) {
    var element = select.options[i];
    if (element.selected) {
        return +element.value  
    };
}
};

// 1111111111111111111111111111111111111

var 


