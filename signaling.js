function Signaling(state, model, password) {
  Devices.call(this, state, model);
  this._password = 12345;
  this._count = 0;
  this._stateSignalins = false;
}

Signaling.prototype = Object.create(Devices.prototype);
Signaling.prototype.constructor = Signaling;//добавляем всё из кодиционера

Signaling.prototype.onSignaling = function () {
  this._stateSignalins = true;
  return this._stateSignalins;
}

Signaling.prototype.offSignaling = function(getPassword) {
  this._stateSignalins = false;
  return this._stateSignalins;
}

Signaling.prototype.getPassword = function(inputPassword) {
  if (inputPassword == this._password) {
    this._count = 0;
    return;
  }
  else {
    this._count++;
    if (this._count == 3) {
      this.onSignaling();
    }
  }
};
