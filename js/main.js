'use strict';
//функция для воспроизведения звуков, хранит все необходимые аудиофайлы под конкретные кнопки
function playAudio(hitsounds) {
	let audio = new Audio;
	switch (hitsounds) {
		case 1:
			{
				audio.src = "audio/1.mp3"
				audio.play();
				break;
			}
		case 2: {
			audio.src = "audio/2.mp3";
			audio.play();
			break;
		}
		case 3: {
			audio.src = "audio/3.mp3";
			audio.play();
			break;
		}
		case 4: {
			audio.src = "audio/4.mp3";
			audio.play();
			break;
		}
		case 5: {
			audio.src = "audio/5.mp3";
			audio.play();
			break;
		}
		case 6: {
			audio.src = "audio/6.mp3";
			audio.play();
			break;
		}
		case 7: {
			audio.src = "audio/7.mp3";
			audio.play();
			break;
		}
		case 8: {
			audio.src = "audio/8.mp3";
			audio.play();
			break;
		}
		case 9: {
			audio.src = "audio/9.mp3";
			audio.play();
			break;
		}
		case 0: {
			audio.src = "audio/0.mp3";
			audio.play();
			break;
		}
		case '÷': {
			audio.src = "audio/Разделить.mp3";
			audio.play();
			break;
		}
		case '×': {
			audio.src = "audio/Умножить.mp3";
			audio.play();
			break;
		}
		case '-': {
			audio.src = "audio/Минус.mp3";
			audio.play();
			break;
		}
		case '+': {
			audio.src = "audio/Плюс.mp3";
			audio.play();
			break;
		}
		case '=': {
			audio.src = "audio/Равно.mp3";
			audio.play();
			break;
		}
		case 'error': {
			audio.src = "audio/Ошибка.mp3";
			audio.play();
			break;
		}
		default: {
			audio.src = "audio/Пилик.mp3";
			audio.play();
			break;
		}
	}
}

//функция для ввода текста с кнопок в поле ввода
function insert(num) {
	document.form.textview.value += num;
}

// функция перезаписывает в поле ввода строку на один символ короче, удаление последнего введённого символа
function back() {
	let text = document.form.textview.value;
	document.form.textview.value = text.substring(0, text.length - 1);
}

//функция для математических расчётов
function calculate() {
	let text = document.form.textview.value,
		result = document.querySelector('.res');
	if (text) {
		result.innerHTML = eval(text);
		if (result.innerHTML == 'Infinity' || result.innerHTML == '-Infinity' || result.innerHTML == 'NaN') {
			setTimeout(() => {
				playAudio('error');
			}, 1000);
		}
	}
}

//получение всех кнопок
let btn = document.querySelectorAll('.btn');
btn.forEach(e => {
	e.addEventListener('click', (hitsounds) => {
		hitsounds = e.textContent;
		//разделение звукового сопровождения в зависимости от содержимого кнопок
		switch (hitsounds) {
			case 'C':
				{
					playAudio();
					let res = document.querySelector('.res');
					res.innerHTML = "0";
					break;
				}
			case '←': {
				playAudio();
				back();
				break;
			}
			case '.': {
				playAudio();
				insert('.');
				break;
			}
			case '(': {
				playAudio();
				insert('(');
				break;
			}
			case ')': {
				playAudio();
				insert(')');
				break;
			}
			case '1': {
				playAudio(1);
				insert(1);
				break;
			}
			case '2': {
				playAudio(2);
				insert(2);
				break;
			}
			case '3': {
				playAudio(3);
				insert(3);
				break;
			}
			case '4': {
				playAudio(4);
				insert(4);
				break;
			}
			case '5': {
				playAudio(5);
				insert(5);
				break;
			}
			case '6': {
				playAudio(6);
				insert(6);
				break;
			}
			case '7': {
				playAudio(7);
				insert(7);
				break;
			}
			case '8': {
				playAudio(8);
				insert(8);
				break;
			}
			case '9': {
				playAudio(9);
				insert(9);
				break;
			}
			case '0': {
				playAudio(0);
				insert(0);
				break;
			}
			case '÷': {
				playAudio('÷');
				insert('/');
				break;
			}
			case '×': {
				playAudio('×');
				insert('*');
				break;
			}
			case '-': {
				playAudio('-');
				insert('-');
				break;
			}
			case '+': {
				playAudio('+');
				insert('+');
				break;
			}
			case '=': {
				playAudio('=');
				calculate();
				break;
			}
		}
	})
});