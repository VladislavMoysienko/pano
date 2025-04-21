let imageContainer = document.querySelector('.image-container');

const verticalFOVDeg = (1665 / 8580) * 360;
const vStartDeg = (180 - verticalFOVDeg) / 2;
const vEndDeg = verticalFOVDeg;

const geometry = new THREE.SphereBufferGeometry(
  5000,
  60,
  40,
  0,
  Math.PI * 2,
  THREE.Math.degToRad(vStartDeg),
  THREE.Math.degToRad(vEndDeg) 
);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('images/texture_8k.png');

const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
const mesh = new THREE.Mesh(geometry, material);

const panorama = new PANOLENS.ImagePanorama('images/texture_8k.png');
panorama.add(mesh);

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  controlBar: true,
  horizontalView: true,
});

viewer.camera.fov = 75;
viewer.camera.updateProjectionMatrix();
viewer.cameraControls.minPolarAngle = THREE.Math.degToRad(vStartDeg);
viewer.cameraControls.maxPolarAngle = THREE.Math.degToRad(180 - vStartDeg);

viewer.add(panorama);
