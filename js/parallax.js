$(function() {
	$(window).bind("scroll" , function(e) {
		var scrollTop = $(window).scrollTop();
		$("#info").text(scrollTop);

//左1 音声班 voice
			var voiceLeft = -600 + (scrollTop - 20)*2; 
			if(voiceLeft <= 10) {
				$("#voice").css("left" , voiceLeft + "px");
			} else {
				$("#voice").css("left" , "10px");
			}
//右1 音楽班 music
			var musicLeft = 620 - (scrollTop - 20)*2;
			if(musicLeft >= 10) {
				$("#music").css("left" , musicLeft + "px");
			} else {
				$("#music").css("left" , "10px");
			}

//左2 HI班 hi
			var hiLeft = -600 + (scrollTop - 540)*2;
			if(hiLeft <= 10) {
				$("#hai").css("left" , hiLeft + "px");
			} else {
				$("#hai").css("left" , "10px");
			}
//右2 HAI班 hai
			var haiLeft = 620 - (scrollTop - 540)*2;
			if(haiLeft >= 10) {
				$("#hi").css("left" , haiLeft + "px");
			}

//左3 言語班 lang
			var langLeft = -600 + (scrollTop - 1140)*2;
			if(langLeft <= 10) {
				$("#lang").css("left" , langLeft + "px");
			} else {
				$("#lang").css("left" , "10px");
			}
//右3 言語獲得班 langacq
			var langacqLeft = 620 - (scrollTop - 1140)*2;
			if(langacqLeft >= 10) {
				$("#langacq").css("left" , langacqLeft + "px");
			} else {
				$("#langacq").css("left" , "10px");
			}

	});
});
