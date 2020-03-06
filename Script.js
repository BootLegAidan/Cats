var catsPics = {
	0: {
		name: "American Shorthair",
		url: "https://i.ibb.co/ykGS2qH/American-Shorthair.png"
	},
	1: {
		name: "British Shorthair",
		url: "https://i.ibb.co/Tct9GVp/British-Shorthair.png"
	},
	2: {
		name: "Maine Coon",
		url: "https://i.ibb.co/MkCNBVk/Maine-Coon.png"
	},
	3: {
		name: "Selkirk Rex",
		url: "https://i.ibb.co/0JwqkBB/Selkirk-Rex-removebg-preview.png"
	},
	4: {
		name: "Ragdoll",
		url: "https://i.ibb.co/4SvgTfC/Khao-Manee.png"
	},
	5: {
		name: "Toyger",
		url: "https://i.ibb.co/nLfYG1C/Toyger.png"
	},
	6: {
		name: "Cat 1",
		url: "https://i.ya-webdesign.com/images/cats-image-white-background-png-1.png"
	},
	7: {
		name: "Cat 2",
		url: "https://www.pngonly.com/wp-content/uploads/2017/06/Cat-Sweet-PNG-File.png"
	},
	8: {
		name: "Cat 3",
		url: "https://lh3.googleusercontent.com/proxy/0CfSrL7NlqEa-sJgAsnfJHPMJECqlVp8Vp60Ha05IbPugdHPx2913ndWchdfTznJ8skvoXUb1a769H5O84TSzS54oBCxHhKnSocTmlumLuiCmPCDRRx4RevFcg"
	},
	9: {
		name: "Cat 4",
		url: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2014/04/tabbycat_2.png?fit=220%2C220"
	},
	10: {
		name: "Cat 5",
		url: "https://pluspng.com/img-png/cat-png-cat-png-hd-1500.png"
	}
};
var catPic;
var catX;
var catY;
var windowW = window.innerWidth;
var windowH = window.innerHeight;
function addCat() {
	catPic = Math.floor(Math.random() * Object.keys(catsPics).length);
	catX = Math.random() * windowW;
	catY = Math.random() * windowH;
	document.body.innerHTML += `<img src="${catsPics[catPic].url}" style="bottom: ${catY}px;right:${catX}px" alt="${catsPics[catPic].name}">`;
		requestAnimationFrame(addCat)
	cats = document.getElementsByTagName("img");
	if (cats.length > 500) {
		if (cats[0].alt.charAt(0) == "A") {
			console.log("An " + cats[0].alt + " was removed");
		} else {
			console.log("A " + cats[0].alt + " was removed");
		}
		cats[0].remove();
	}
}
addCat();
//setInterval(addCat, 100);
window.addEventListener("resize", function() {
	windowW = window.innerWidth;
	windowH = window.innerHeight;
});
