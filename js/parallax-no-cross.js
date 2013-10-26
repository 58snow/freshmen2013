$(function() {
	$(window).bind("scroll" , function(e) {
		var scrollTop = $(window).scrollTop();
		$("#info").text(scrollTop);

//左1 音声班 voice
		if(scrollTop > 60) {
			var voiceLeft = -600 + (scrollTop - 60); 
			if(voiceLeft < 10) {
				$("#voice").css("left" , voiceLeft + "px");
			} else {
				$("#voice").css("left" , "10px");
			}
		} else {
			$("#voice").css("left" , "-1100px");
		}
//右1 音楽班 music
		if(scrollTop > 60) {
			var musicLeft = 620 - (scrollTop - 60);
			if(musicLeft > 10) {
				$("#music").css("left" , musicLeft + "px");
			} else {
				$("#music").css("left" , "10px");
			}
		}

//左2 HI班 hi
		if(scrollTop > 620) {
			var hiLeft = -600 + (scrollTop - 620);
			if(hiLeft < 10) {
				$("#hi").css("left" , hiLeft + "px");
			} else {
				$("#hi").css("left" , "10px");
			}
		} else {
			$("#hi").css("left" , "-1100px");
		}
//右2 HAI班 hai
		if(scrollTop > 620) {
			var haiLeft = 620 - (scrollTop - 620);
			if(haiLeft > 10) {
				$("#hai").css("left" , haiLeft + "px");
			} else {
				$("#hai").css("left" , "10px");
			}
		}

//左3 言語班 lang
		if(scrollTop > 1180) {
			var langLeft = -600 + (scrollTop - 1180);
			if(langLeft < 10) {
				$("#lang").css("left" , langLeft + "px");
			} else {
				$("#lang").css("left" , "10px");
			}
		} else {
			$("#lang").css("left" , "-1100px");
		}
//右3 言語獲得班 langacq
		if(scrollTop > 1180) {
			var langacqLeft = 620 - (scrollTop - 1180);
			if(langacqLeft > 10) {
				$("#langacq").css("left" , langacqLeft + "px");
			} else {
				$("#langacq").css("left" , "10px");
			}
		}

	});
});
