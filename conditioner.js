function Conditioner(model) {
    Devices.call(this, model);
    this._currentTemperature = 0;

}

Conditioner.prototype = Object.create(Devices.prototype);
Conditioner.prototype.constructor = Conditioner;//добавляем всё из кодиционера

Conditioner.prototype.plusTemterature = function() {
    if ((this._currentTemperature < 25) && (this._state == true)) {
        this._currentTemperature += 2; 
    }
};

Conditioner.prototype.minusTemterature = function() {
    if ((this._currentTemperature > -5) && (this._state == true)) {
        this._currentTemperature -= 2; 
    }
};

Conditioner.prototype.getCurrentTemterature = function() {
    return this._currentTemperature;
};