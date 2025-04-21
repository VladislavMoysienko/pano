const panorama = new PANOLENS.ImagePanorama('images/texture_8k.png');
let imageContainer = document.querySelector('.image-container')


var infospot = new PANOLENS.Infospot();
infospot.position.set( 5000.00, 300, 1500 );
infospot.hoverText(`Час преблаженный,
День вожделенный!
Мы оставляем,
Мы покидаем
Илимские горы,
Берлоги, норы.
А.Н.Радищев`);

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    horizontalView: true,
    controlBar: true,
});

panorama.add(infospot);
viewer.add(panorama);
viewer.control.maxFov = 60;
viewer.control.minFov = 60;
