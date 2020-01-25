function Camera(state, mode, record, live) {
    Devices.call(this, state);
    this._mode = mode;
    this._record = "Record";
    this._live = "Live";
}

Camera.prototype.dayMode = function() {
  document.body.style.backgroundColor = "white";

};

Camera.prototype.nightMode = function() {
  document.body.style.backgroundColor = "#333";
};

Camera.prototype.getMode = function () {
  return this._mode;
};

Camera.prototype.getTypeRecord = function () {
  return this._record;
};

Camera.prototype.getTypeLive = function () {
  return this._live;
}

// Camera.prototype.on = function() {
//     this._state = true;
// };
// Camera.prototype.off = function() {
//     this._state = false;
// };
