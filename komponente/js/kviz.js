		var odgovor = "odgovor";
		var poeni = 0;
		var pitanje = "pitanje";
		var brojac = 0;
		var dalje = "DALJE";
		var duzina = 0;
		
		function allowDrop(ev) {
			ev.preventDefault();
		}
		
		function drag(ev) {
			ev.dataTransfer.setData("text", ev.target.id);
		}

		function drop(ev, el) {
			ev.preventDefault();
			if(duzina === 0){
				alert('Kliknite "START" za početak.');
			}
			
			if(duzina < 11){
				duzina = el.childElementCount;
				var data = ev.dataTransfer.getData("text");
				var dodajSlovo = data;
				var nodeCopy = document.getElementById(data).cloneNode(true);
				el.appendChild(nodeCopy);
				$("#rijecNaslov").remove();
				odgovor = odgovor + dodajSlovo;
			}
			else{
				alert("Možete dodati najviše 10 slova.");
			}
		}
		
		function ocisti(){
			var naslov = $('<h1 id="rijecNaslov"></h1>').text("OVDJE PRENESI SLOVA");
			$("#rijec").text("");
			$("#rijec").append(naslov);
		}
		
		function dodaj(ev, el) {
			if(duzina === 0){
				alert('Kliknite "START" za početak.');
			}
			else if(duzina > 0 && duzina < 12){
				duzina = document.getElementById("rijec").childElementCount;
				var x = el.id;
				var item = document.getElementById(x);
				var slovo = item.cloneNode(true);
				$("#rijec").append(slovo);
				$("#rijecNaslov").remove();
				odgovor = odgovor+x;
			}
			else{
				alert("Možete dodati najviše 11 slova.");
			}
		}
		
		function start() {
			var niz = [
				{
				id: 1,
				name: 'AUTO',
				img: "img/auto.png",
				sound: "voice/a.wav",
				},
				{
				id: 2,
				name: 'BICIKLO',
				img: "img/biciklo.png",
				sound: "voice/b.mp3",
				},
				{
				id: 3,
				name: 'CVIJET',
				img: "img/cvijet.png",
				sound: "voice/c.mp3",
				},
				{
				id: 4,
				name: 'ČEKIĆ',
				img: "img/cekic.png",
				sound: "voice/a.mp3",
				},
				{
				id: 5,
				name: 'ĆUP',
				img: "img/cup.png",
				sound: "voice/a.mp3",
				},
				{
				id: 6,
				name: 'DJETELINA',
				img: "img/djetelina.png",
				sound: "voice/a.mp3",
				},
				{
				id: 7,
				name: 'DžIP',
				img: "img/dzip.png",
				sound: "voice/a.mp3",
				},
				{
				id: 8,
				name: 'ĐAK',
				img: "img/djak.png",
				sound: "voice/a.mp3",
				},
				{
				id: 9,
				name: 'EKSER',
				img: "img/ekser.png",
				sound: "voice/a.mp3",
				},
				{
				id: 10,
				name: 'FLAŠA',
				img: "img/flasa.png",
				sound: "voice/a.mp3",
				},
				{
				id: 11,
				name: 'GITARA',
				img: "img/gitara.png",
				sound: "voice/a.mp3",
				},
				{
				id: 12,
				name: 'HOBOTNICA',
				img: "img/hobotnica.png",
				sound: "voice/a.mp3",
				},
				{
				id: 13,
				name: 'IGLO',
				img: "img/iglo.png",
				sound: "voice/a.mp3",
				},
				{
				id: 14,
				name: 'JAGODA',
				img: "img/jagoda.png",
				sound: "voice/a.mp3",
				},
				{
				id: 15,
				name: 'KONj',
				img: "img/konj.png",
				sound: "voice/a.mp3",
				},
				{
				id: 16,
				name: 'LIMUN',
				img: "img/limun.png",
				sound: "voice/a.mp3",
				},
				{
				id: 17,
				name: 'LjEŠNjAK',
				img: "img/ljesnjak.png",
				sound: "voice/a.mp3",
				},
				{
				id: 18,
				name: 'MAČKA',
				img: "img/maca.png",
				sound: "voice/a.mp3",
				},
				{
				id: 19,
				name: 'NAKOVANj',
				img: "img/nakovanj.png",
				sound: "voice/a.mp3",
				},
				{
				id: 20,
				name: 'NjUŠKA',
				img: "img/njuska.png",
				sound: "voice/a.mp3",
				},
				{
				id: 21,
				name: 'OLOVKA',
				img: "img/olovka.png",
				sound: "voice/a.mp3",
				},
				{
				id: 22,
				name: 'PADOBRAN',
				img: "img/padobran.png",
				sound: "voice/a.mp3",
				},
				{
				id: 23,
				name: 'RAKETA',
				img: "img/raketa.png",
				sound: "voice/a.mp3",
				},
				{
				id: 24,
				name: 'SANKE',
				img: "img/sanke.png",
				sound: "voice/a.mp3",
				},
				{
				id: 25,
				name: 'ŠOLjA',
				img: "img/solja.png",
				sound: "voice/a.mp3",
				},
				{
				id: 26,
				name: 'TRUBA',
				img: "img/truba.png",
				sound: "voice/a.mp3",
				},
				{
				id: 27,
				name: 'UŽE',
				img: "img/uze.png",
				sound: "voice/a.mp3",
				},
				{
				id: 28,
				name: 'VOZ',
				img: "img/voz.png",
				sound: "voice/a.mp3",
				},
				{
				id: 29,
				name: 'ZEC',
				img: "img/zec.png",
				sound: "voice/a.mp3",
				},
				{
				id: 30,
				name: 'ŽBUN',
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
			if(odgovor===pitanje){
				poeni += 1;
				$("#myAudio").attr("src", "voice/happykids.mp3");
				var x = document.getElementById("myAudio");
				x.play();
				alert("Bravo! Odgovor je tačan.");
			};
			if(odgovor!="odgovor"){
				if(odgovor!=pitanje){
					$("#myAudio").attr("src", "voice/cry.mp3");
					var x = document.getElementById("myAudio");
					x.play();
					alert("Tačan odgovor je: "+pitanje);
				};
			};
			$("#bodovi").text("BODOVI: " + poeni + " od " + brojac);
			var x = Math.floor(Math.random()*30);
			var item = niz[x].img;
			var rijec = niz[x].name;
			var slika = "<img src="+item+" class='col-md-1' style='height: 130px; float left; padding-left:0px;'/>";
			$("#rijec").text("");
			$("#rijec").append(slika);
			$("#rijecNaslov").remove();
			$("#dalje").text(dalje);
			duzina = document.getElementById("rijec").childElementCount;
			pitanje = rijec;
			odgovor = ""; 
			brojac++;

		}