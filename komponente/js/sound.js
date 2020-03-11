function playAudio(e) {
			var text = $(e.target).text().toLowerCase();
			var lang = $("#jezik").text();
			
			if(lang == "JEZIK: BOSANSKI"){
				if(text=="č"){
					text="ccc"
				}
				else if(text=="ć"){
					text="cc"
				}
				else if(text=="đ"){
					text="dj"
				}
				else if(text=="dž"){
					text="dz"
				}
				else if(text=="š"){
					text="ss"
				}
				else if(text=="ž"){
					text="zz"
				}
				
				var folder = "voice_bh/";
				var format = ".m4a";
			}else{
				var folder = "voice/";
				var format = ".mp3";
			}
			
			
			var sound = folder+text+format;
			$("#myAudio").attr("src", folder+text+format);
			var x = document.getElementById("myAudio");
			x.play(); 

		} 