//Отвечает за отрисовку
var addBtn = document.getElementById("add");
addBtn.className = "add-style";
addBtn.addEventListener('click', function() {
    var condModel = new Conditioner("LG");
    var viewCondModel = new ViewConditioner(condModel, document.getElementById("root"));
    viewCondModel.render();
});

var addCameraBtn = document.getElementById("add-camera");
addCameraBtn.className = "add-style";
addCameraBtn.addEventListener('click', function() {
     var cameraModel = new Camera("state", "mode", "record", "live");
     var viewCameraModel = new ViewCamera(cameraModel, document.getElementById("root"));
     viewCameraModel.render();
})
