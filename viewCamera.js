function ViewCamera(camera, rootDom) {
    this._camera = camera;
    this._rootDom = rootDom;
    this._state = document.createElement("div");
}

ViewCamera.prototype = Object.create(Devices.prototype);
ViewCamera.prototype.constructor = ViewCamera;

ViewCamera.prototype.stateChange = function() {//добавляем метод, отвеающий за создание элементов
    if (this._camera._state) {//усли state == true, то выплняем действия
        this._state.innerHTML = "камера " + "<span class='state'>включена</span>";
    }
    else {
        this._state.innerHTML = "камера " + "<span class='state'>выключена</span>";
    }
    this._state.className = "text";
};

ViewCamera.prototype.render = function() {//для отображения элементов
    var name = document.createElement("h2");
    name.innerHTML = "Камера";

    var classCamera = document.createElement("div");
    classCamera.className = "new-camera";

    // var recordType = document.createElement("div");
    // recordType.innerHTML = "Тип записи" + this._record;
    //
    // var liveType = document.createElement("div");
    // liveType.innerHTML = "Тип записи" + this._live;
    //
    // var modeDay = document.createElement("div");
    // modeDay.innerHTML = "Дневной режим";
    //
    // var modeNight = document.createElement("div");
    // modeNight.innerHTML = "Ночной режим";
    //
    // var onBtn = document.createElement("button");
    // onBtn.type = "button";
    // onBtn.className = "on";
    // onBtn.innerHTML = "Включить";
    // onBtn.addEventListener('click', () => {//функция с особенностями
    //     this._camera.on();
    //     this.stateChange();
    // });
    //
    // var offBtn = document.createElement("button");
    // offBtn.type = "button";
    // offBtn.className = "off";
    // offBtn.innerHTML = "Включить";
    // offBtn.addEventListener('click', () => {//функция с особенностями
    //     this._camera.off();
    //     this.stateChange();
    // });
    //
    // var recordBtn = document.createElement("button");
    // recordBtn.type = "button";
    // recordBtn.className = "record-type";
    // recordBtn.innerHTML = "Тип записи";
    // recordBtn.addEventListener('click', () => {
    //     this._camera.getTypeRecord();
    //     recordType.innerHTML = "Тип записи " + this._record;
    // });
    //
    // var liveBtn = document.createElement("button");
    // liveBtn.type = "button";
    // liveBtn.className = "live-type";
    // liveBtn.innerHTML = "Тип записи";
    // liveBtn.addEventListener('click', () => {
    //     this._camera.getTypeRecord();
    //     liveType.innerHTML = "Тип записи " + this._live;
    // });

    this.stateChange();

    classCamera.appendChild(name);
    // classCamera.appendChild(recordType);
    // classCamera.appendChild(liveType);
    // // condition.appendChild(modeDay);
    // // condition.appendChild(modeNight);
    // classCamera.appendChild(onBtn);
    // classCamera.appendChild(offBtn);
    // classCamera.appendChild(recordBtn);
    // classCamera.appendChild(liveBtn);
    classCamera.appendChild(this._state);
}
