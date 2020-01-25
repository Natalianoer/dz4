function Signaling(state, model, password) {
  Devices.call(this, state, model);
  this._password = 123;
}

Signaling.prototype.getPassword = function () {
  // var count = 0;
  // if (this._passowd == 123) {
  //   alert('Пароль верный');
  // }
  // else {
  //     count++;
  //     alert('Неправильный пароль');
  //   }
  // if (count === 3) {
  //   return "this.on";
  // }
  // else {
  //   return "this.off";
  // }

  return this._password;
};
