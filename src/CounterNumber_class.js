class CounterNumber {
	constructor(element, optionsScroll) {
		// Установка настроек
		let defaultOptions = {
			// Настройка глубины
			rootmargin: 100,
			threshold: 1,
			// Проигрывать 1 раз
			one: true,
			// Класс, который добавляется, если объект виден
			className: '_visible_',
			format: (number) => { return number },
		}
		this.options = Object.assign(defaultOptions, optionsScroll)

		// Элемент
		this.element = element
		// Начальное значение. По умолчанию 0
		this.startValue = this.element.dataset.start ? +this.element.dataset.start : 0
		// Конечная точка отсчета
		this.endValue = this.element.dataset.end ? +this.element.dataset.end.replace(/ /g, '') : +this.element.textContent.replace(/ /g, '')
		// Скорость вочпроизведения
		this.duration = this.element.dataset.duration ? +this.element.dataset.duration : 1500
		// Работа по скроллу
		const scroll = this.element.hasAttribute('data-scroll')

		if (!this.element) return

		this.element.textContent = this.startValue

		if (scroll) this.scroll()
	}
	// Событие по скроллу
	scroll() {
		// Настройка
		const options = {
			rootMargin: `${this.options.rootmargin}px`,
			threshold: this.options.threshold,
		}
		// Каллбэк функция
		const callback = (entries, observer) => {
			const entery = entries[0]
			if (entery.isIntersecting) {
				// Если наблюдается
				this.element.classList.add(this.options.className);
				// Вызов функции срабатывания
				this.counter()
				if (this.options.one) observer.unobserve(this.element);
			} else {
				// Если не наблюдается
				this.element.classList.remove(this.options.className);
			}

		}
		// Запуск наблюдателя
		const observer = new IntersectionObserver(callback, options);
		observer.observe(this.element);
	}
	// Изменение значений
	counter(duration = this.duration, endValue = this.endValue) {
		// Начало отсчета
		const start = new Date()
		// Конец отсчета
		const end = new Date()
		end.setTime(end.getTime() + duration)
		// Обновление
		const update = () => {
			const progress = (Math.min(Date.now(), end) - start) / duration
			const formatNumber = this.options.format(Math.floor(endValue * progress))
			// Запись обновленного числа
			this.element.textContent = formatNumber
			if (progress < 1) window.requestAnimationFrame(update)
		}
		window.requestAnimationFrame(update)
	}
}