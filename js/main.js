const panorama = new PANOLENS.ImagePanorama('images/texture_8k.png');
let imageContainer = document.querySelector('.image-container')


var infospot;
infospot = new PANOLENS.Infospot();
infospot.position.set( -5000.00, -1825.25, 197.56 );
infospot.addHoverText('Test');

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    horizontalView: true,
    controlBar: true,
});
panorama.setLinkingImage('images/IMG_0850.png')

panorama.add(infospot);
viewer.add(panorama);
viewer.control.maxFov = 60;
viewer.control.minFov = 60;
