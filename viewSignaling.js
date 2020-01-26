function ViewSignaling(signaling, rootDom) {
    this._signaling = signaling;
    this._rootDom = rootDom;
    this._stateSignalins = document.createElement("div");
}

ViewSignaling.prototype = Object.create(Devices.prototype);
ViewSignaling.prototype.constructor = ViewSignaling;

ViewSignaling.prototype.signalingChange = function() {
  if (this._signaling._stateSignalins == true) {
    this._stateSignalins.innerHTML = "Сигнализация " + "<span class='state'>включена</span>";
  }
  if (this._signaling._stateSignalins == false) {
    this._stateSignalins.innerHTML = "Сигнализация " + "<span class='state' >выключена</span>";
  }
};

ViewSignaling.prototype.render = function() {//для отображения элементов
    var name = document.createElement("h2");
    name.innerHTML = "Сигнализация";

    var signal = document.createElement("div");
    signal.className = "signal";

    this._stateSignalins.className = "text";

    var pass = document.createElement("input");
    pass.className = "inp-pass";
    pass.id = "password";
    pass.type = "password";
    pass.value = document.getElementById('password');
    pass.placeholder = "Введите пароль";

    var send = document.createElement("button");
    send.type = "button";
    send.innerHTML = "Войти";
    send.addEventListener('click', () => {
      this._signaling.getPassword(pass.value);
      this.signalingChange();
    });

     var exit = document.createElement("button");
     exit.type = "button";
     exit.innerHTML = "Выключить сигнализацию";
     exit.addEventListener('click', () => {
       this._signaling.offSignaling(pass.value);
       this.signalingChange();
     });

    this.signalingChange();

    signal.appendChild(name);
    signal.appendChild(this._stateSignalins);
    signal.appendChild(pass);
    signal.appendChild(send);
    signal.appendChild(exit);
    this._rootDom.appendChild(signal);

}
