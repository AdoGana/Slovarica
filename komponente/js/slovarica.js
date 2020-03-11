		function setLang(el) {
			var data = el.text;
			if(data=="JEZIK: BOSANSKI"){
				$("#jezik").text("LANGUAGE: ENGLISH");
			}else{
				$("#jezik").text("JEZIK: BOSANSKI");
			}
		}
		
		
		function allowDrop(ev) {
			ev.preventDefault();
		}
		
		function drag(ev) {
			ev.dataTransfer.setData("text", ev.target.id);
		}

		function drop(ev, el) {
			ev.preventDefault();
			var duzina = el.childElementCount;
			if(duzina < 12){
				var data = ev.dataTransfer.getData("text");
				var nodeCopy = document.getElementById(data).cloneNode(true);
				nodeCopy.name = this;
				el.appendChild(nodeCopy);
				$("#rijecNaslov").remove();
			}
			else{
				alert("Možete dodati najviše 12 slova.");
			}

		}
		
		function ocisti(){
			var naslov = $('<h1 id="rijecNaslov"></h1>').text("OVDJE PRENESI SLOVA");
			$("#rijec").text("");
			$("#rijec").append(naslov);
		}
		
		function dodaj(ev, el) {
			var duzina = document.getElementById("rijec").childElementCount;
			if(duzina < 12){
				var x = el.id;
				var item = document.getElementById(x);
				var slovo = item.cloneNode(true);
				$("#rijec").append(slovo);
				$("#rijecNaslov").remove();
			}
			else{
				alert("Možete dodati najviše 12 slova.");
			}
		}