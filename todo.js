/*$("span").val("");
//Check off specific todos by clicking

$("span").click(function(){
$(this).toggleClass("fa fa-trash-o");

});
*/
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
	/*if($(this).css("color")==="rgb(128, 128, 128)"){
        $(this).css({
		color:"black",
		textDecoration: "none"
	                });
	 }
	else{
	    $(this).css({
		color:"gray",
		textDecoration: "line-through"
                    });
   	}*/
});
//click on x to delete
$("ul").on("click","span", function(event){
	    $(this).parent().fadeOut(500,function(){   //for li tag
		$(this).remove();
	});
    event.stopPropagation();//stops event bubbling

});

$("input[type='text'").keypress(function(event){
      if(event.which===13)
      {   //new to do
      	  var tododText=$(this).val();
      	  $(this).val("");
      	  //create a new li and add to ul
      	  $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span>"+tododText+"</li>");
      }  
});


$(".fa-plus").click(function(){
$("input[type='text'").fadeToggle();
});