function Camera(state, mode, record, live) {
    Devices.call(this, state);
    this._mode = mode;
    this._record = "Record";
    this._live = "Live";
}

Camera.prototype.dayMode = function() {
  this.style.backgrounColor = 'white';
};

Camera.prototype.nightMode = function() {
  this.style.backgrounColor = 'black';
};

Camera.prototype.getMode = function () {
  return this._mode;
};

Camera.prototype.getTypeRecord = function () {
  // if (this._record == true) {
  //     return this._state;
  // }
  // if (this._live == true) {
  //     return this._state;
  // }
  return this._record;
};

Camera.prototype.getTypeLive = function () {
  return this._live;
}
