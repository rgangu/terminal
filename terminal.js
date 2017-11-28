var Who = "<p>Who is involved? </p>" + "<ul>" + "<li> Our team comprises of some of the brightest minds among undergraduate computer science programs.<ul> <li>Our work and services focus on: software engineering, data analytics, consulting and machine learning</li></ul></li>" + "</ul>" 
var What =  "<p>What is this? </p>"+ "<ul>" + "<li>Xuntos Technologies is a business-facing tech services company that focuses on providing businesses with the tools they need to thrive. </li>" + "<li> We aim to do this in various ways: efficiency, innovation, reliability, scientific research, and accessibility.</li>" + "<li> In addition, as part of our Xuducate programme, all of our work will be publicly available on GitHub, unless the development involves clients and/or confidential information. </li>" + "</ul>"
var How = "<p> How is this being done? </p>" + "<ul>" +"<li> In terms of our services, our development team typically uses Java, C++, Python, and the web scripting languages (HTML, CSS, JavaScript). </li>" + "<li> Our machine learning/data analytics team works on getting the greatest value possible out of data and manipulating it for enterprise.</li>"  + "<li> Our consulting team works on providing the best tech solutions to businesses by identifying what can help them drive their revenue - in the tech space.</li>"+"</ul>"
var Contact = "<p>How can you reach us? </p>" + "<ul>" + "<li> Number: 610-333-3244</li>" + "<li>email: rohit@xuntos.us </li>"  + "<li>Mailing Address: 4243 Valley Dr., College Park, MD 20742</li>" + "<li>Links: <a href='https://github.com/xuntos' target='_blank'>GitHub</a></li>"   + "<li><a href='https://www.linkedin.com/company/18251413/' target='_blank'>LinkedIn</a></li>" + "</ul>" 
var Help = "<table id='help'><tr><td>cd Who</td><td>cd What</td></tr><tr><td>cd How</td><td>cd Contact</td></tr><tr><td>cd Github</td><td>cd Devpost</td></tr><tr><td>cd Projects</td></tr></table>"
var Portfolio = `

// <h3 class="project_title"><a href='http://devpost.com/software/abcaroh' target="_blank" class="project_link" >XunHelp - a product of Xuntos Technologies</a></h3><p class="project_description">The app that connects the world</p> `

$(document).ready(function(){

    $('.element').typeIt({
       strings: ['Welcome'],
       speed:150,
       lifeLike: true,
       callback: function(){
       	setTimeout(function(){$("#arrow").append("<p id='init'>initializing...</p>")},300)
       	setTimeout(function(){
       		$("#arrow").hide()
       		$(".element").remove();
       		$("#init").hide();
       		$("#content").show();
       	}, 2100)
       }

      });
    
	$("#pointer").click(function(){
    $("#psuedo-input").focus()
    $("#psuedo-input").val("")
    $("#command").empty()
		$(".typed-cursor").show()
	})

	$("#psuedo-input").on("input",function(){
		$("#command").text($("#psuedo-input").val())
	})

$("#psuedo-input").change(function(){
    if($("#psuedo-input").val() == "cd Who" || $("#psuedo-input").val() == "cd who" || $("#psuedo-input").val() == "cd cat Who" || $("#psuedo-input").val() == "cd cat who"){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(Who).show()
      $("html, body").scrollTop( $(document).height() );
    } 

    else if($("#psuedo-input").val() == "cd What" || $("#psuedo-input").val() == "cd what" || $("#psuedo-input").val() == "cd cat What" || $("#psuedo-input").val() == "cd cat what" ){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(What).show()
      $("html, body").scrollTop( $(document).height() );
    } 

    else if($("#psuedo-input").val() == "cd How" || $("#psuedo-input").val() == "cd how" || $("#psuedo-input").val() == "cd cat How" || $("#psuedo-input").val() == "cd cat how" ){
        $("#error").empty()
        $("#psuedo-input").val("")
        $("#command").empty()
        $("#text").empty().append(How).show()
        $("html, body").scrollTop( $(document).height() );
    } 

    else if($("#psuedo-input").val() == "cd Contact " || $("#psuedo-input").val() == "cd contact " || $("#psuedo-input").val() == "cd cat Contact" || $("#psuedo-input").val() == "cd cat contact" ){
        $("#error").empty()
        $("#psuedo-input").val("")
        $("#command").empty()
        $("#text").empty().append(Contact).show()
        $("html, body").scrollTop( $(document).height() );
    }

    else if($("#psuedo-input").val() == "cd Portfolio" || $("#psuedo-input").val() == "cd portfolio" ){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(Portfolio).show()
      $("html, body").scrollTop( $(document).height() );
    } 

    else if($("#psuedo-input").val() == "cd github" || $("#psuedo-input").val() == "cd GitHub" || $("#psuedo-input").val() == "cd Github" ){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      window.open("https://github.com/rgangu/Xuntos-Helps", "_blank");
      $("html, body").scrollTop( $(document).height() );
    }
     else if($("#psuedo-input").val() == "cd Devpost" || $("#psuedo-input").val() == "cd DevPost" || $("#psuedo-input").val() == "cd devpost" ){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      window.open("http://devpost.com/software/abcaroh", "_blank");
      $("html, body").scrollTop( $(document).height() );
    } 
    else if($("#psuedo-input").val() == "help" || $("#psuedo-input").val() == "ls"){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(Help).show()
      $("html, body").scrollTop( $(document).height() );
    } 

    else{
      
      $("#error").text("bash error: command " + "\"" + $("#psuedo-input").val() + "\"" + " does not exist. try again lol!")
      $("#psuedo-input").val("")
      $("#command").empty()
      $("html, body").scrollTop( $(document).height() );
    }


  })

	
})

function who(){
  $("#error").empty()
  $(".typed-cursor").hide()
  $("html, body").scrollTop( $(document).height() );
  $('#command').empty().typeIt({
    strings: ['cd Who'],
    speed:150,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(Who).show()
      $("html, body").scrollTop( $(document).height() );
    }, 1200)
    }
  })
  
}

function what(){
  $("#error").empty()
  $(".typed-cursor").hide()
  $("html, body").scrollTop( $(document).height() );
  $('#command').empty().typeIt({
    strings: ['cd What'],
    speed:150,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(What).show()
      $("html, body").scrollTop( $(document).height() );
    }, 1200)
  }
  })
}

function how(){
  $("#error").empty()
  $('.typed-cursor').hide()
  $("html, body").scrollTop( $(document).height() );
  $('#command').empty().typeIt({
    strings: ['cd How'],
    speed:150,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(How).show()
      $("html, body").scrollTop( $(document).height() );
    }, 1200)
    }
  })
}

function contact(){
  $("#error").empty()
  $('.typed-cursor').hide()
  $("html, body").scrollTop( $(document).height() );
  $('#command').empty().typeIt({
    strings: ['cd Contact'],
    speed:150,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(Contact).show()
      $("html, body").scrollTop( $(document).height() );
    }, 1200)
    }

  })
}

function portfolio(){
  $("#error").empty()
  $('.typed-cursor').hide()
  $("html, body").scrollTop( $(document).height() );
  $('#command').empty().typeIt({
    strings: ['cd Portfolio'],
    speed:150,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(Portfolio).show()
      $("html, body").scrollTop( $(document).height() );
    }, 1200)
    }
  })
}
