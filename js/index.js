function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  function upComing(evt, instituteName) {
    var i, tabcontent1, tablinks1;
    tabcontent1 = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent1.length; i++) {
      tabcontent1[i].style.display = "none";
    }
    tablinks1 = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks1.length; i++) {
      tablinks1[i].className = tablinks1[i].className.replace(" active", "");
    }
    document.getElementById(instituteName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  $(document).ready(function() {
	
    setTimeout(function(){
      $('body').addClass('loaded');
      $('h1').css('color','#222222');
    }, 3000);
	
	if(document.getElementById("defaultOpen") != null){
		// Get the element with id="defaultOpen" and click on it
		document.getElementById("defaultOpen").click();
    }
	if(document.getElementById("firstOpen") != null){
		// Get the element with id="firstOpen" and click on it
		document.getElementById("firstOpen").click();
    }
  });