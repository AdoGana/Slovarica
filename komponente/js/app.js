  var app = angular.module('app', []);
  
  app.controller('audioCtrl', function($scope) {
	$scope.playAudio = function () {
		var audio = document.getElementById("myAudio");
		audio.load();
		audio.play();
	};
});
   
  app.controller('slovaCtrl', function($scope){
    $scope.slova = [
		{
		id: 1,
		name: 'A',
		img: "img/auto.png",
		sound: "voice/a.wav",
		},
		{
		id: 2,
		name: 'B',
		img: "img/biciklo.png",
		sound: "voice/b.mp3",
		},
		{
		id: 3,
		name: 'C',
		img: "img/cvijet.png",
		sound: "voice/c.mp3",
		},
		{
		id: 4,
		name: 'Č',
		img: "img/cekic.png",
		sound: "voice/a.mp3",
		},
		{
		id: 5,
		name: 'Ć',
		img: "img/cup.png",
		sound: "voice/a.mp3",
		},
		{
		id: 6,
		name: 'D',
		img: "img/djetelina.png",
		sound: "voice/a.mp3",
		},
		{
		id: 7,
		name: 'Dž',
		img: "img/dzip.png",
		sound: "voice/a.mp3",
		},
		{
		id: 8,
		name: 'Đ',
		img: "img/djak.png",
		sound: "voice/a.mp3",
		},
		{
		id: 9,
		name: 'E',
		img: "img/ekser.png",
		sound: "voice/a.mp3",
		},
		{
		id: 10,
		name: 'F',
		img: "img/flasa.png",
		sound: "voice/a.mp3",
		},
		{
		id: 11,
		name: 'G',
		img: "img/gitara.png",
		sound: "voice/a.mp3",
		},
		{
		id: 12,
		name: 'H',
		img: "img/hobotnica.png",
		sound: "voice/a.mp3",
		},
		{
		id: 13,
		name: 'I',
		img: "img/iglo.png",
		sound: "voice/a.mp3",
		},
		{
		id: 14,
		name: 'J',
		img: "img/jagoda.png",
		sound: "voice/a.mp3",
		},
		{
		id: 15,
		name: 'K',
		img: "img/konj.png",
		sound: "voice/a.mp3",
		},
		{
		id: 16,
		name: 'L',
		img: "img/limun.png",
		sound: "voice/a.mp3",
		},
		{
		id: 17,
		name: 'Lj',
		img: "img/ljesnjak.png",
		sound: "voice/a.mp3",
		},
		{
		id: 18,
		name: 'M',
		img: "img/maca.png",
		sound: "voice/a.mp3",
		},
		{
		id: 19,
		name: 'N',
		img: "img/nakovanj.png",
		sound: "voice/a.mp3",
		},
		{
		id: 20,
		name: 'Nj',
		img: "img/njuska.png",
		sound: "voice/a.mp3",
		},
		{
		id: 21,
		name: 'O',
		img: "img/olovka.png",
		sound: "voice/a.mp3",
		},
		{
		id: 22,
		name: 'P',
		img: "img/padobran.png",
		sound: "voice/a.mp3",
		},
		{
		id: 23,
		name: 'R',
		img: "img/raketa.png",
		sound: "voice/a.mp3",
		},
		{
		id: 24,
		name: 'S',
		img: "img/sanke.png",
		sound: "voice/a.mp3",
		},
		{
		id: 25,
		name: 'Š',
		img: "img/solja.png",
		sound: "voice/a.mp3",
		},
		{
		id: 26,
		name: 'T',
		img: "img/truba.png",
		sound: "voice/a.mp3",
		},
		{
		id: 27,
		name: 'U',
		img: "img/uze.png",
		sound: "voice/a.mp3",
		},
		{
		id: 28,
		name: 'V',
		img: "img/voz.png",
		sound: "voice/a.mp3",
		},
		{
		id: 29,
		name: 'Z',
		img: "img/zec.png",
		sound: "voice/a.mp3",
		},
		{
		id: 30,
		name: 'Ž',
		img: "img/zbun.png",
		sound: "voice/a.mp3",
		},
		{
		id: 31,
		name: '_',
		img: "img/space.png",
		sound: "voice/a.mp3",
		},
	];
});

