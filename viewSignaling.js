function ViewSignaling(signaling, rootDom) {
    this._signaling = signaling;
    this._rootDom = rootDom;
    this._state = document.createElement("div");
    this._passowd = 123;
}

ViewSignaling.prototype = Object.create(Devices.prototype);
ViewSignaling.prototype.constructor = ViewSignaling;

ViewSignaling.prototype.render = function() {//для отображения элементов
    var name = document.createElement("h2");
    name.innerHTML = "Сигнализация";

    var signal = document.createElement("div");
    signal.className = "signal";

    this._state.className = "text";

    var pass = document.createElement("input");
    pass.className = "inp-pass";
    pass.id = "password";
    pass.type = "password";
    pass.value = document.getElementById('password');
    pass.placeholder = "Введите пароль";

    var send = document.createElement("button");
    send.type = "button";
    send.innerHTML = "Отправить";
    send.addEventListener('click', () => {
     if (pass.value == this._passowd) {
       this._signaling.getPassword();
       this._state.innerHTML = "сигнализация " + "<span class='state'>выключена</span>";
     }
     else {
       this._signaling.getPassword();
       this._state.innerHTML = "сигнализация " + "<span class='state' >включена</span>";
     }

  });

    signal.appendChild(name);
    signal.appendChild(this._state);
    signal.appendChild(pass);
    signal.appendChild(send);
    this._rootDom.appendChild(signal);

}
