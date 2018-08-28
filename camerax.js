


let camera = {
  scene: 0,
  arcRotateCamera : 0,

  init : function(scene){

    this.scene = scene;
    this.arcRotateCamera = new BABYLON.ArcRotateCamera("Camera", 0,0, 10, new BABYLON.Vector3(4.5,0 ,4.5), scene);  
    this.arcRotateCamera.setPosition(new BABYLON.Vector3(15,15,15));

    this.arcRotateCamera.attachControl(canvas, true);  


    let light0 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 5,0), scene);
            
    light0.specular = new BABYLON.Color3(0, 0, 0);
    light0.specularPower = 0;
    light0.diffuse = new BABYLON.Color3(1, 1, 1);
    light0.intensity =0.75;

   /* let light1 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(4.5, -5, 4.5), scene);
    
    light1.specular = new BABYLON.Color3(0, 0, 0);
    light1.specularPower = 0;
    light1.diffuse = new BABYLON.Color3(1, 1, 1);
    light1.intensity =0.15;*/

  },

};
