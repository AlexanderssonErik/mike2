
let base = {

    ledMaterials: [],
  
    init : function(scene){
        
     


   
          // nipple -------------------------------------------------------

    let  nippleShape = [ new BABYLON.Vector3(-0.21,0, -0.29),		
        new BABYLON.Vector3(0.21,0, -0.29), 
        new BABYLON.Vector3(0.29,0, -0.21),    
        new BABYLON.Vector3(0.29,0, 0.21), 
        new BABYLON.Vector3(0.21,0, 0.29), 
        new BABYLON.Vector3(-0.21,0, 0.29), 
        new BABYLON.Vector3(-0.29,0, 0.21), 
        new BABYLON.Vector3(-0.29, 0, -0.21) 		                    
    ];
   /* let  nippleLineShape = [ new BABYLON.Vector3(-0.21,0, -0.29),		
        new BABYLON.Vector3(0.21,0, -0.29), 
        new BABYLON.Vector3(0.29,0, -0.21),    
        new BABYLON.Vector3(0.29,0, 0.21), 
        new BABYLON.Vector3(0.21,0, 0.29), 
        new BABYLON.Vector3(-0.21,0, 0.29), 
        new BABYLON.Vector3(-0.29,0, 0.21), 
        new BABYLON.Vector3(-0.29, 0, -0.21),
        new BABYLON.Vector3(-0.21,0, -0.29)			                    
    ];

    let  nippleLineShapeA = [ new BABYLON.Vector3(-0.21,1.35, -0.29),		
        new BABYLON.Vector3(0.21,1.35, -0.29), 
        new BABYLON.Vector3(0.29,1.35, -0.21),    
        new BABYLON.Vector3(0.29,1.35, 0.21), 
        new BABYLON.Vector3(0.21,1.35, 0.29), 
        new BABYLON.Vector3(-0.21,1.35, 0.29), 
        new BABYLON.Vector3(-0.29,1.35, 0.21), 
        new BABYLON.Vector3(-0.29, 1.35, -0.21),
        new BABYLON.Vector3(-0.21,1.35, -0.29)			                    
    ];

    let  nippleLineShapeB = [ new BABYLON.Vector3(-0.21,1.35, 0.71),		
        new BABYLON.Vector3(0.21,1.35, 0.71), 
        new BABYLON.Vector3(0.29,1.35, 0.79),    
        new BABYLON.Vector3(0.29,1.35, 1.21), 
        new BABYLON.Vector3(0.21,1.35, 1.29), 
        new BABYLON.Vector3(-0.21,1.35, 1.29), 
        new BABYLON.Vector3(-0.29,1.35, 1.21), 
        new BABYLON.Vector3(-0.29, 1.35, 0.79),
        new BABYLON.Vector3(-0.21,1.35, 0.71)			                    
    ];
	
	//Create lines 
	let nippleLine = BABYLON.MeshBuilder.CreateLines("lines", {points: nippleLineShape}, scene); 
    nippleLine.color = new BABYLON.Color3(0.6, 0.6, 0.6);
    nippleLine.isPickable = false;
    nippleLine.position.y = 0.16;*/

    // baseSidePlane -------------------------------------------------------

    let baseSideShape = [ new BABYLON.Vector3( -4.8,-5,0),		
        new BABYLON.Vector3( -5,-4.8,0),	
        new BABYLON.Vector3( -5,4.8,0), 
        new BABYLON.Vector3( -4.8,5,0),    
        new BABYLON.Vector3( 4.8,5,0),        
        new BABYLON.Vector3( 5,4.8,0),   
        new BABYLON.Vector3( 5,-4.8,0),    
        new BABYLON.Vector3( 4.8,-5,0)                            
        ];

    baseSideShape.push(baseSideShape[0]); //why?

	var myPath = [
        new BABYLON.Vector3(0, 0, 0),
        new BABYLON.Vector3(0, 0, 0.1),
        new BABYLON.Vector3(0, 0, 0.2),
        new BABYLON.Vector3(0, 0, 1.19)
      
        ];

    var scaling = function(i, distance) {
        if(i == 0){
            return 1;
        }else if(i == 1){
            return 1;
        }else if(i == 2){
            return 0.95;
        }else if(i == 3){
            return 0.9;
        }

    };

    let baseSidePlane = BABYLON.MeshBuilder.ExtrudeShapeCustom("baseSidePlane", {shape: baseSideShape, path: myPath, scaleFunction: scaling, sideOrientation: BABYLON.Mesh.BACKSIDE, updatable: false}, scene);
    baseSidePlane.rotation.x = Math.PI/2;
    baseSidePlane.position.x =4.5; 
    baseSidePlane.position.z =4.5;
    baseSidePlane.isPickable = false;

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

        let baseNipple = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
        baseNipple.rotation.x = Math.PI;
    
        // baseNipple -------------------------------------------------------
    
        baseNipple.isPickable = false;
        for (let x= 0; x< 10; ++x) {  
    
            for(let y=0; y<10; y++){        
    
                if( x == 0 && y ==0){		
                                     
                }else{
                    let baseNipples = baseNipple.createInstance("baseNipple: " +x+y);
                    baseNipples.position.x = x;
                    baseNipples.position.z = y;
                    baseNipples.isPickable = false;
    
                   /* let nippleLines = nippleLine.clone("nippleLine: " +x+y);
                    nippleLines.position.x = x;
                    nippleLines.position.z = y;
                    nippleLines.isPickable = false;*/
       
                }        
            }
        }
    
        // materials -------------------------------------------------------
            
        let whiteMaterial = new BABYLON.StandardMaterial("whiteMaterial", scene);  
 
        this.ledMaterials[0] = new BABYLON.StandardMaterial("NA", scene);
        this.ledMaterials[1] = new BABYLON.StandardMaterial("RED", scene);
        this.ledMaterials[2] = new BABYLON.StandardMaterial("GREEN", scene);
        this.ledMaterials[3] = new BABYLON.StandardMaterial("YELLOW", scene);
        this.ledMaterials[4] = new BABYLON.StandardMaterial("BLUE", scene);
        this.ledMaterials[5] = new BABYLON.StandardMaterial("PURPLE", scene);
        this.ledMaterials[6] = new BABYLON.StandardMaterial("CYAN", scene);
        this.ledMaterials[7] = new BABYLON.StandardMaterial("WHITE", scene);
    
        let emissiveColor = 0.2;

        this.ledMaterials[0].diffuseColor = new BABYLON.Color3(1, 1, 1);
        this.ledMaterials[0].emissiveColor = new BABYLON.Color3(0, 0, 0);
        this.ledMaterials[1].diffuseColor = new BABYLON.Color3(1, 0, 0);
        this.ledMaterials[1].emissiveColor = new BABYLON.Color3(emissiveColor, 0, 0);
        this.ledMaterials[2].diffuseColor = new BABYLON.Color3(0, 1, 0);
        this.ledMaterials[2].emissiveColor = new BABYLON.Color3(0, emissiveColor, 0);
        this.ledMaterials[3].diffuseColor = new BABYLON.Color3(1, 1, 0);
        this.ledMaterials[3].emissiveColor = new BABYLON.Color3(emissiveColor, emissiveColor, 0);
        this.ledMaterials[4].diffuseColor = new BABYLON.Color3(0, 0, 1);
        this.ledMaterials[4].emissiveColor = new BABYLON.Color3(0, 0,emissiveColor );
        this.ledMaterials[5].diffuseColor = new BABYLON.Color3(1, 0, 1);
        this.ledMaterials[5].emissiveColor = new BABYLON.Color3(emissiveColor, 0, emissiveColor);
        this.ledMaterials[6].diffuseColor = new BABYLON.Color3(0, 1, 1);
        this.ledMaterials[6].emissiveColor = new BABYLON.Color3(0, emissiveColor, emissiveColor);
        this.ledMaterials[7].diffuseColor = new BABYLON.Color3(1, 1, 1);
        this.ledMaterials[7].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
         
        whiteMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
        whiteMaterial.emissiveColor = new BABYLON.Color3(0.12, 0.12, 0.12);
        //whiteMaterial.alpha = 100;
        whiteMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        whiteMaterial.ambientColor = new BABYLON.Color3(0, 0, 0);
    
        baseNipple.material = whiteMaterial  ;
        baseTopPlane.material =  whiteMaterial  ;
        baseSidePlane.material  =  whiteMaterial  ;
        
    },
    render : function(){

      

    },

}








