// Create the scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );

var controls = new THREE.VRControls( camera );

// Create the renderer
var renderer = new THREE.WebGLRenderer();

// Set the size of the renderer to take up the entire window
renderer.setSize( window.innerWidth, window.innerHeight );

// Append the renderer canvas element to the body
document.body.appendChild( renderer.domElement );

var cubes = [];

  // var geometry = new THREE.BoxGeometry( 50, 50, 50 );
  var loader = new THREE.FontLoader();
  loader.load( 'font/optimer_regular.typeface.json', function ( font ) {
  	for (var i = 0; i < 10; i++) {

		  var material = new THREE.MeshNormalMaterial();

	    var textGeo = new THREE.TextGeometry( "test", {

	        font: font,

	        size: 50,
	        height: 50,
	        curveSegments: 12,

	        bevelThickness: 2,
	        bevelSize: 5,
	        bevelEnabled: true

	    } );

	    var mesh = new THREE.Mesh( textGeo, material );

		  // Give each cube a random position
		  mesh.position.x = (Math.random() * 1000) - 500;
		  mesh.position.y = (Math.random() * 1000) - 500;
		  mesh.position.z = (Math.random() * 1000) - 500;

		  scene.add(mesh);
		  
		  // Store each mesh in array
		  cubes.push(mesh);


		}
	} );

function animate() {

  requestAnimationFrame( animate );

//   // Every frame, rotate the cubes a little bit
//   for (var i = 0; i < cubes.length; i++) {
//     cubes[i].rotation.x += 0.01;
//     cubes[i].rotation.y += 0.02;
//   }
  controls.update();

  // Render the scene
	  renderer.render( scene, camera );

}
animate();
// Render the scene
// renderer.render( scene, camera );