const panorama = new PANOLENS.ImagePanorama( 'images/texture_8k.png' );
let imageContainer = document.querySelector('.image-container')


var infospotPositions = [
    // new THREE.Vector3(-2136.06, 16.30, 890.14),
    // new THREE.Vector3(-3136.06, 296.30, -4290.14),

  ];

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    horizontalView: true,
    controlBar: true,
});

viewer.add( panorama );
viewer.cameraControls.minPolarAngle = THREE.MathUtils.degToRad(45);
viewer.cameraControls.maxPolarAngle = THREE.MathUtils.degToRad(135);
