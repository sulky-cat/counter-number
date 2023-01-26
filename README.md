# Counter number

[Демо страница](https://sulky-cat.github.io/counter-number/demo)

---

## html
```html
<span class="digi"> 100 </span>
<span class="digi" data-scroll> 200 </span>
<span class="digi" data-scroll data-start="100"> 300 </span>
<span class="digi" data-scroll data-end="300"> 400 </span>
<span class="digi" data-scroll data-duration="2000"> 500 </span>
``` 
Атрибуты: 
* `data-scroll` - срабатывание скрипта по скроллу. Без этого атрибута, счетчик не начнет работу без вызова метода `digi.counter()`;
* `data-start` - начальная точка отсчета. По умолчанию 0;
* `data-end` - конечная точка отсчета. По умолчанию то, что указано внутри тега;
* `data-duration` - время срабатывания анимации. По умолчанию 1.5с.

## js
```js
new CounterNumber(document.querySelector('.element'), { })
``` 
Параметры: 
`className` - класс, который добавляется, если объект виден. По умолчанию `'_visible_'`;
`one` - проигрывать 1 раз при скролле. По умолчанию `true`;
`threshold` - астройки для наблюдателя. По умолчанию `1`;
`rootmargin` - астройки для наблюдателя. По умолчанию `100`;
`format` - функция форматирование числа. По умолчанию нет форматирования.

---

## Пример js

### С прокруткой
```html
<span class="digi" data-scroll> 200 </span>
``` 
```js
const digi = document.querySelector('.digi')
const counter = new CounterNumber(digi, {
  // Класс, который добавляется, если объект виден
  className: '_visible_', // Значение по умолчанию
  // Проигрывать 1 раз при скролле
  one: true, // Значение по умолчанию

  // Настройки для наблюдателя
  threshold: 1, // Значение по умолчанию
  rootmargin: 100, // Значение по умолчанию
  
  // Форматирование числа
  // По умолчанию нет форматирования
  format: (number) => {
    return number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")
  }
})
``` 
### Без прокрутки
```html
<span class="digi"> 200 </span>
``` 
```js
const duration = 3000
const digi = document.querySelector('.digi')
const counter = new CounterNumber(digi, {})
counter.counter(duration)
``` 
