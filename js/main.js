const panorama = new PANOLENS.ImagePanorama( 'images/texture_8k.png' );
let imageContainer = document.querySelector('.image-container')


var infospotPositions = [
    // new THREE.Vector3(-2136.06, 16.30, 890.14),
    // new THREE.Vector3(-3136.06, 296.30, -4290.14),

  ];

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    controlBar: true,
});

viewer.add( panorama );
viewer.control.minFov = 75;
