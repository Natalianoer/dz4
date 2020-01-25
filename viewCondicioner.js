function ViewConditioner(conditioner, rootDom) {
    this._conditioner = conditioner;
    this._rootDom = rootDom;
    this._state = document.createElement("div");
}

ViewConditioner.prototype = Object.create(Devices.prototype);
ViewConditioner.prototype.constructor = ViewConditioner;

ViewConditioner.prototype.stateChange = function() {//добавляем метод, отвеающий за создание элементов
    if (this._conditioner._state) {//усли state == true, то выплняем действия
        this._state.innerHTML = "устройство " + "<span class='state'>включено</span>";
    }
    else {
        this._state.innerHTML = "устройство " + "<span class='state'>выключено</span>";
    }
    this._state.className = "text";
};

ViewConditioner.prototype.render = function() {//для отображения элементов
    var name = document.createElement("h2");
    name.innerHTML = "Кондиционер";

    var condition = document.createElement("div");
    condition.className = "cond";

    var term = document.createElement("div");
    term.className = "text";
    term.innerHTML = "Текущая температура " + "<span class='state'>" + this._conditioner._currentTemperature + "</span>";

    var model = document.createElement("div");
    model.className = "text";
    model.innerHTML = "Модель " + "<span class='state'>LG</span>";

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "on";
    onBtn.innerHTML = "Включить";
    onBtn.addEventListener('click', () => {//функция с особенностями
        this._conditioner.on();
        this.stateChange();
    });

    var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "off";
    offBtn.innerHTML = "Выключить";
    offBtn.addEventListener('click', () => {//функция с особенностями
        this._conditioner.off();
        this.stateChange();
    });

    var plusTerm = document.createElement("button");
    plusTerm.type = "button";
    plusTerm.className = "inc-term";
    plusTerm.innerHTML = "Увеличить температуру";
    plusTerm.addEventListener('click', () => {
        this._conditioner.plusTemterature();
        term.innerHTML = "Текущая температура " + "<span class='state'>" + this._conditioner._currentTemperature + "</span>";
    });

    var minusTerm = document.createElement("button");
    minusTerm.type = "button";
    minusTerm.className = "dec-term";
    minusTerm.innerHTML = "Уменьшить температуру";
    minusTerm.addEventListener('click', () => {
        this._conditioner.minusTemterature();
        term.innerHTML = "Текущая температура " + "<span class='state'>" + this._conditioner._currentTemperature + "</span>";
    });

    this.stateChange();

    condition.appendChild(name);
    condition.appendChild(this._state);
    condition.appendChild(term);
    condition.appendChild(model);
    condition.appendChild(onBtn);
    condition.appendChild(offBtn);
    condition.appendChild(plusTerm);
    condition.appendChild(minusTerm);
    this._rootDom.appendChild(condition);

}
