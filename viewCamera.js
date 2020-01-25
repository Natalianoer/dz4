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

    var recordType = document.createElement("div");
    recordType.className = "text";

    // var modeDay = document.createElement("div");
    // modeDay.innerHTML = "Дневной режим";
    //
    // var modeNight = document.createElement("div");
    // modeNight.innerHTML = "Ночной режим";

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "on";
    onBtn.innerHTML = "Включить";
    onBtn.addEventListener('click', () => {//функция с особенностями
        this._camera.on();
        this.stateChange();
    });

    var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "off";
    offBtn.innerHTML = "Выключить";
    offBtn.addEventListener('click', () => {//функция с особенностями
        this._camera.off();
        this.stateChange();
    });

    var recordBtn = document.createElement("button");
    recordBtn.type = "button";
    recordBtn.className = "record-type";
    recordBtn.innerHTML = "Тип записи Record";
    recordBtn.addEventListener('click', () => {
        this._camera.getTypeRecord();
        recordType.innerHTML = "Тип записи " + this._camera._record;
    });

    var liveBtn = document.createElement("button");
    liveBtn.type = "button";
    liveBtn.className = "live-type";
    liveBtn.innerHTML = "Тип записи Live";
    liveBtn.addEventListener('click', () => {
        this._camera.getTypeLive();
        recordType.innerHTML = "Тип записи " + this._camera._live;
    });

    var modeDay = document.createElement("button");
    modeDay.type = "button";
    modeDay.className = "dayMode";
    modeDay.innerHTML = "Дневной режим";
    modeDay.addEventListener('click', () => {
        this._camera.dayMode();
    });

    var modeNight = document.createElement("button");
    modeNight.type = "button";
    modeNight.className = "dayMode";
    modeNight.innerHTML = "Ночной режим";
    modeNight.addEventListener('click', () => {
        this._camera.nightMode();
    });

    this.stateChange();

    classCamera.appendChild(name);
    classCamera.appendChild(this._state);
    classCamera.appendChild(recordType);
    classCamera.appendChild(modeDay);
    classCamera.appendChild(modeNight);
    classCamera.appendChild(onBtn);
    classCamera.appendChild(offBtn);
    classCamera.appendChild(recordBtn);
    classCamera.appendChild(liveBtn);
    this._rootDom.appendChild(classCamera);
}
