const panorama = new PANOLENS.ImagePanorama('images/texture_8k.jpg');
let imageContainer = document.querySelector('.image-container')

var infospot1 =  new PANOLENS.Infospot(); infospot1.position.set( 5000, 2500, -700 );  infospot1.addHoverElement( document.getElementById( 'img_1' ), -270 );
var infospot2 =  new PANOLENS.Infospot(); infospot2.position.set( 5000, 2600, -3400 ); infospot2.addHoverElement( document.getElementById( 'img_2' ), -200 );
var infospot3 =  new PANOLENS.Infospot(); infospot3.position.set( 5000, 2750, -5050 ); infospot3.addHoverElement( document.getElementById( 'img_3' ), -200 );
var infospot4 =  new PANOLENS.Infospot(); infospot4.position.set( 5000, 2900, -6500 ); infospot4.addHoverElement( document.getElementById( 'img_4' ), -200 );
var infospot5 =  new PANOLENS.Infospot(); infospot5.position.set( 5000, 1550, -3350 );  infospot5.addHoverElement( document.getElementById( 'img_5' ), -150 );
var infospot6 =  new PANOLENS.Infospot(); infospot6.position.set( 5000, 1650, -4500 );  infospot6.addHoverElement( document.getElementById( 'img_6' ), -150 );
var infospot7 =  new PANOLENS.Infospot(); infospot7.position.set( 5000, 1600, -5800 );  infospot7.addHoverElement( document.getElementById( 'img_7' ), -150 );
var infospot8 =  new PANOLENS.Infospot(); infospot8.position.set( 5000, 1700, -7250 );  infospot8.addHoverElement( document.getElementById( 'img_8' ), -150 );
var infospot9 =  new PANOLENS.Infospot(); infospot9.position.set( 5000, 650, -3350 );  infospot9.addHoverElement( document.getElementById( 'img_9' ), -50 );
var infospot10 = new PANOLENS.Infospot(); infospot10.position.set( 5000, 650, -5100 ); infospot10.addHoverElement( document.getElementById( 'img_10' ), -50 );
var infospot11 = new PANOLENS.Infospot(); infospot11.position.set( 5000, 800, -6700 ); infospot11.addHoverElement( document.getElementById( 'img_11' ), -50 );
var infospot12 = new PANOLENS.Infospot(); infospot12.position.set( -5000, 580, -4900 ); infospot12.addHoverElement( document.getElementById( 'img_12' ), -75 );
var infospot13 = new PANOLENS.Infospot(); infospot13.position.set( -5000, 360, -3600 ); infospot13.addHoverElement( document.getElementById( 'img_13' ), -75 );
var infospot14 = new PANOLENS.Infospot(); infospot14.position.set( -5000, 300, -1500 ); infospot14.addHoverElement( document.getElementById( 'img_14' ), -75 );
var infospot15 = new PANOLENS.Infospot(); infospot15.position.set( -5000, 800, 2250 ); infospot15.addHoverElement( document.getElementById( 'img_15' ), -100 );
var infospot16 = new PANOLENS.Infospot(); infospot16.position.set( -5000, 900, 970 ); infospot16.addHoverElement( document.getElementById( 'img_16' ), -100 );
var infospot17 = new PANOLENS.Infospot(); infospot17.position.set( -5000, 1200, -100 ); infospot17.addHoverElement( document.getElementById( 'img_17' ), -100 );
var infospot18 = new PANOLENS.Infospot(); infospot18.position.set( -5000, 1600, -1000 ); infospot18.addHoverElement( document.getElementById( 'img_18' ), -200 );
var infospot19 = new PANOLENS.Infospot(); infospot19.position.set( -5000, 1450, -1820 ); infospot19.addHoverElement( document.getElementById( 'img_19' ), -100 );
var infospot20 = new PANOLENS.Infospot(); infospot20.position.set( -5000, 1200, -3250 ); infospot20.addHoverElement( document.getElementById( 'img_20' ), -100 );
var infospot21 = new PANOLENS.Infospot(); infospot21.position.set( -5000, 1500, -4900 ); infospot21.addHoverElement( document.getElementById( 'img_21' ), -100 );
var infospot22 = new PANOLENS.Infospot(); infospot22.position.set( -5000, 2700, -5150 ); infospot22.addHoverElement( document.getElementById( 'img_22' ), -200 );
var infospot23 = new PANOLENS.Infospot(); infospot23.position.set( -5000, 2600, -3900 ); infospot23.addHoverElement( document.getElementById( 'img_23' ), -200 );
var infospot24 = new PANOLENS.Infospot(); infospot24.position.set( -5000, 2500, -2650 ); infospot24.addHoverElement( document.getElementById( 'img_24' ), -200 );
var infospot25 = new PANOLENS.Infospot(); infospot25.position.set( -5000, 2600, -1300 ); infospot25.addHoverElement( document.getElementById( 'img_25' ), -200 );
var infospot26 = new PANOLENS.Infospot(); infospot26.position.set( -5000, 2500, -100 ); infospot26.addHoverElement( document.getElementById( 'img_26' ), -200 );
var infospot27 = new PANOLENS.Infospot(); infospot27.position.set( -5000, 2500, 800 ); infospot27.addHoverElement( document.getElementById( 'img_27' ), -200 );
var infospot28 = new PANOLENS.Infospot(); infospot28.position.set( -5000, 2300, 2200 ); infospot28.addHoverElement( document.getElementById( 'img_28' ), -200 );
var infospot29 = new PANOLENS.Infospot(); infospot29.position.set( 1300, 450, 7000 ); infospot29.addHoverElement( document.getElementById( 'img_29' ), -100 );
var infospot30 = new PANOLENS.Infospot(); infospot30.position.set( 2300, 550, 7000 ); infospot30.addHoverElement( document.getElementById( 'img_30' ), -100 );
var infospot31 = new PANOLENS.Infospot(); infospot31.position.set( 3250, 1700, 7000 ); infospot31.addHoverElement( document.getElementById( 'img_31' ), -100 );
var infospot32 = new PANOLENS.Infospot(); infospot32.position.set( 1350, 2500, 7000 ); infospot32.addHoverElement( document.getElementById( 'img_32' ), -200 );
var infospot33 = new PANOLENS.Infospot(); infospot33.position.set( 5000, 700, 5400 ); infospot33.addHoverElement( document.getElementById( 'img_33' ), -100 );
var infospot34 = new PANOLENS.Infospot(); infospot34.position.set( 5000, 2300, 5700 ); infospot34.addHoverElement( document.getElementById( 'img_34' ), -200 );
var infospot36 = new PANOLENS.Infospot(); infospot36.position.set( 5000, 2300, 3400 ); infospot36.addHoverElement( document.getElementById( 'img_36' ), -200 );
var infospot37 = new PANOLENS.Infospot(); infospot37.position.set( 5000, 2300, 4600 ); infospot37.addHoverElement( document.getElementById( 'img_37' ), -200 );
var infospot38 = new PANOLENS.Infospot(); infospot38.position.set( 5000, 2300, 2450 ); infospot38.addHoverElement( document.getElementById( 'img_38' ), -200 );
var infospot35 = new PANOLENS.Infospot(); infospot35.position.set( 300, 450, -7000 ); infospot35.addHoverElement( document.getElementById( 'img_35' ), 0 );

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    horizontalView: true,
    controlBar: true,
});

panorama.add(infospot1, infospot2, infospot3, infospot4, infospot5, infospot6, infospot7, infospot8, infospot9, infospot10, infospot11, infospot12, infospot13, infospot14, infospot15, infospot16, infospot17, infospot18, infospot19, infospot20, infospot21, infospot22, infospot23, infospot24, infospot25, infospot26, infospot27, infospot28, infospot29, infospot30, infospot31, infospot32, infospot33, infospot34, infospot35, infospot36, infospot37, infospot38);

viewer.add(panorama);
viewer.control.maxFov = 60;
viewer.control.minFov = 60;

function toggleVisibility(id) {
  var el = document.getElementById(id);
  el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

var elements = document.getElementsByClassName("tour-infospot-img");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", (e) => {
    let src = e.currentTarget.src;
    window.open(src);
  });
}
