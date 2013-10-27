/*author:asy524*/
//papero.js requires jQuery                                                                                                                                   

$(function(){
    $(".ohanasipapero").keypress( function ( e ) {
        if ( e.which == 13 ) {
            var text = $(this).val();
            //console.log(text);                                                                                                                              
            $(this).val("");
            $.get("http://shinzan.human.waseda.ac.jp:8091/chat/" + text,
                  function(reply){
                      $("#chatlog").text("...");

                      setTimeout(function(){
                          $("#chatlog").text(reply);
                      },100);
                      return false;
                  });
	    }
    }).focus(function(){
        $(this).val("");
    }).blur(function(){
        if($(this).val() == ''){
            $(this).val("ここに文章を入力してね");
        }
    });
});
