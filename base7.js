
let base = {

  //  ledMaterials: [],
  
    init : function(scene){
        
     


   
          // nipple -------------------------------------------------------
/*
    let  nippleShape = [ new BABYLON.Vector3(-0.21,0, -0.29),		
        new BABYLON.Vector3(0.21,0, -0.29), 
        new BABYLON.Vector3(0.29,0, -0.21),    
        new BABYLON.Vector3(0.29,0, 0.21), 
        new BABYLON.Vector3(0.21,0, 0.29), 
        new BABYLON.Vector3(-0.21,0, 0.29), 
        new BABYLON.Vector3(-0.29,0, 0.21), 
        new BABYLON.Vector3(-0.29, 0, -0.21) 		                    
    ];*/
  

  

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
/*
        let baseNipple = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
        baseNipple.rotation.x = Math.PI;*/    
        // baseNipple -------------------------------------------------------
    /*
        baseNipple.isPickable = false;
        for (let x= 0; x< 10; ++x) {  
    
            for(let y=0; y<10; y++){        
    
                if( x == 0 && y ==0){		
                                     
                }else{
                    let baseNipples = baseNipple.createInstance("baseNipple: " +x+y);
                    baseNipples.position.x = x;
                    baseNipples.position.z = y;
                    baseNipples.isPickable = false;
    
          
       
                }        
            }
        }*/
    
        // materials -------------------------------------------------------
            
        let whiteMaterial = new BABYLON.StandardMaterial("whiteMaterial", scene);  
 

         
        whiteMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
        whiteMaterial.emissiveColor = new BABYLON.Color3(0.12, 0.12, 0.12);
        //whiteMaterial.alpha = 100;
        whiteMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        whiteMaterial.ambientColor = new BABYLON.Color3(0, 0, 0);
    
        //baseNipple.material = whiteMaterial  ;
        baseTopPlane.material =  whiteMaterial  ;
        
        
    },
    render : function(){

      

    },

}








