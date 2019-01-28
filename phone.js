$(document).ready(function() { // do this when the document is loaded
	$("#content_dialer").show(); // show the element with ID "element"
    $("#content_list").hide(); 
    $("#content_contact").hide();// hide the element with ID "otherElement"
});

$("#btn_dialer").click(function() { // when "button_id" is clicked
	$("#content_dialer").show(); // show element
    $("#content_list").hide(); 
    $("#content_contact").hide();// hide the element with ID "otherElement"
});

$("#btn_list").click(function() { // when "button_id" is clicked
	$("#content_list").show(); // show element
    $("#content_dialer").hide(); 
    $("#content_contact").hide();// hide the element with ID "otherElement"
});

$("#btn_contact").click(function() { // when "button_id" is clicked
	$("#content_contact").show(); // show element
    $("#content_list").hide(); 
    $("#content_dialer").hide();// hide the element with ID "otherElement"
});

$(".btn").click(function(){
        document.getElementById("result").value = "" 
});
