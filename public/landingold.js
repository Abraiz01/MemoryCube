// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';

// import { OrbitControls } from 'https://unpkg.com/three@0.121.1/examples/jsm/controls/OrbitControls.js';

// let container, stats;
// let camera, raycaster, renderer;


// const scene = new THREE.Scene();
// const geometry = new THREE.OctahedronGeometry( 20, 0 );
// const pointer = new THREE.Vector2();


window.addEventListener('load', () => {

    let joinForm = document.getElementById('join-form');

    joinForm.addEventListener('submit', (e) => {

    e.preventDefault();

    // getting username and password enetered in the form
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // save the name and the password in session storage
    sessionStorage.setItem('username',username);
    sessionStorage.setItem('password',password);

    // redirect the user to main.html
    window.location='/main.html';

})

})


// init();
// animate();

// function init() {


//       camera = new THREE.PerspectiveCamera( 27, window.innerWidth / window.innerHeight, 1, 3500 );
//       camera.position.z = 2000;



//       scene.background = new THREE.Color( 0x050505 );
//       scene.fog = new THREE.Fog( 0x050505, 2000, 3500 );

//       scene.add( new THREE.AmbientLight( 0x444444 ) );

//       const light1 = new THREE.DirectionalLight( 0xffffff, 0.5 );
//       light1.position.set( 1, 1, 1 );
//       scene.add( light1 );

//       const light2 = new THREE.DirectionalLight( 0xffffff, 1.5 );
//       light2.position.set( 0, - 1, 0 );
//       scene.add( light2 );

      

//       let material = new THREE.MeshPhongMaterial( {
//           color: Math.random() * 0xffffff, specular: 0xffffff, shininess: 250,
//           side: THREE.DoubleSide, vertexColors: true
//       } );

//       const mesh = new THREE.Mesh( geometry, material );


//       mesh.position.x = Math.random() * n - n2;
//       mesh.position.y = Math.random() * n - n2;
//       mesh.position.z = Math.random() * n - n2;

//       mesh.rotation.x = Math.random() * 2 * Math.PI;
//       mesh.rotation.y = Math.random() * 2 * Math.PI;
//       mesh.rotation.z = Math.random() * 2 * Math.PI;

//       mesh.scale.x = Math.random() + 0.5; // random width, depth, height
//       mesh.scale.y = Math.random() + 0.5;
//       mesh.scale.z = Math.random() + 0.5;

//       let meshInfo = {
//           "name": userInfo.name,
//           "index": currentIndex,
//           "color": mesh.material.color.getHexString(),
//           "positions": {
//               "x": mesh.position.x,
//               "y": mesh.position.y,
//               "z": mesh.position.z
//           },
//           "rotations": {
//               "x": mesh.rotation.x,
//               "y": mesh.rotation.y,
//               "z": mesh.rotation.z
//           },
//           "scales": {
//               "x": mesh.scale.x,
//               "y": mesh.scale.y,
//               "z": mesh.scale.z
//           }
//       }

//       let meshInfoJSON=JSON.stringify(meshInfo);


//       raycaster = new THREE.Raycaster();

//       renderer = new THREE.WebGLRenderer({ antialias: true });
//       renderer.setPixelRatio( window.devicePixelRatio );
//       renderer.setSize( window.innerWidth, window.innerHeight );
//       document.body.appendChild( renderer.domElement );
//       // container.appendChild( renderer.domElement );


//       document.addEventListener( 'pointermove', onPointerMove );

//       //

//       window.addEventListener( 'resize', onWindowResize );

//       let controls = new OrbitControls( camera, renderer.domElement );

// }


// function onWindowResize() {


//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize( window.innerWidth, window.innerHeight );

// }

// function onPointerMove( event ) {

//     pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
//     pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

// }

// let intersectIndex;
// let intersectObject;

// let imgContainer = document.getElementById('info-image');

// window.addEventListener( 'click', onDocumentMouseDown );

// function onDocumentMouseDown( event ) {

//     raycaster.setFromCamera( pointer, camera );

//     const intersects = raycaster.intersectObjects( scene.children, false );

//     if ( intersects.length > 0 ) {

//         // console.log("mouse clicked");

//         if ( INTERSECTED == intersects[ 0 ].object ) {

//             console.log("mouse clicked");

//             intersectIndex = meshlist.indexOf(INTERSECTED);
//             intersectObject = objectlist[intersectIndex];

//             // console.log("mouse clicked");

//             // let texture = textureLoader.load(objectlist[meshlist.indexOf(INTERSECTED)].image);
//             // scene.background = texture;

//             imgContainer.src = objectlist[meshlist.indexOf(INTERSECTED)].image;

//             description.innerHTML = objectlist[meshlist.indexOf(INTERSECTED)].text;

//             infoDiv.style.display = "inline";

//         }

//     } else {

//         if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

//         INTERSECTED = null;

//     }

// }

// //

// function animate() {

//     requestAnimationFrame( animate );

//     render();
//     // stats.update();

// }

// function render() {

//     theta += 0.1;

//     // camera.position.x = radius * Math.sin( THREE.MathUtils.degToRad( theta ) );
//     // camera.position.y = radius * Math.sin( THREE.MathUtils.degToRad( theta ) );
//     // camera.position.z = radius * Math.cos( THREE.MathUtils.degToRad( theta ) );
//     // camera.lookAt( scene.position );

//     // camera.updateMatrixWorld();

//     // find intersections

//     raycaster.setFromCamera( pointer, camera );

//     const intersects = raycaster.intersectObjects( scene.children, false );

//     if ( intersects.length > 0 ) {

//         if ( INTERSECTED != intersects[ 0 ].object ) {

//             if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

//             INTERSECTED = intersects[ 0 ].object;
//             INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
//             INTERSECTED.material.emissive.setHex( 0xff0000 );

//         }

//     } else {

//         if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

//         INTERSECTED = null;

//     }
 

//     renderer.render( scene, camera );

// }

