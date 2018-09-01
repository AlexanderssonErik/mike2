
let base = {

  //  ledMaterials: [],
  
    init : function(scene){
        
     




  

     // baseTopPlane -------------------------------------------------------

     let baseTopShape = [ new BABYLON.Vector3( -4.8,0,-5),		
        new BABYLON.Vector3( -5,0,-4.8),	
        new BABYLON.Vector3( -5,0,4.8), 
        new BABYLON.Vector3( -4.8,0,5),    
        new BABYLON.Vector3( 4.8,0,5),        
        new BABYLON.Vector3( 5,0,4.8),   
        new BABYLON.Vector3( 5,0,-4.8),    
        new BABYLON.Vector3( 4.8,0,-5)                        
        ];

    let baseTopPlane = BABYLON.MeshBuilder.CreatePolygon("polygon", {shape:baseTopShape, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
    baseTopPlane.position.x =4.5; 
    baseTopPlane.position.y =0;
    baseTopPlane.position.z =4.5;
    baseTopPlane.isPickable = false;

    
        // materials -------------------------------------------------------
            
        let whiteMaterial = new BABYLON.StandardMaterial("whiteMaterial", scene);  
 

         
        whiteMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
        whiteMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
        //whiteMaterial.alpha = 100;
        whiteMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        whiteMaterial.ambientColor = new BABYLON.Color3(0, 0, 0);
    
        //baseNipple.material = whiteMaterial  ;
        baseTopPlane.material =  whiteMaterial  ;
        
        
    },
    render : function(){

      

    },

}








