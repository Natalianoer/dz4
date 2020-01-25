function Signaling(state, model, password) {
  Devices.call(this, state, model);
  this._password = password;
  this.getPassword = function () {
    var count = 0;
    if (this._passowd == false) {
      count++;
      if (count === 3) {
        //this._state = true;
        return this.on;
      }
      else {
        return this.off;
      }
    };

    return this._password;
  };

}
