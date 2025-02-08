  $(document).ready(function(){
    $('#title').click(function(){
      $(this).find('#i').toggleClass('fa-plus fa-minus')
      // $("#title").css("color" , "rgb(126,168,255)")
    })
  })

  $(document).ready(function(){
    $("#title").click(function(){
      $("#title").toggleClass("color");
    })

    $("#title1").click(function(){
      $("#title1").toggleClass("color");
    })

    $("#title2").click(function(){
      $("#title2").toggleClass("color");
    })

    $("#title3").click(function(){
      $("#title3").toggleClass("color");
    })


  })

  $(document).ready(function(){
    $('#title1').click(function(){
      $(this).find('#i1').toggleClass('fa-plus fa-minus')
      // $("#title1").css("color" , "rgb(126,168,255)")
    })
  })

  $(document).ready(function(){
    $('#title2').click(function(){
      $(this).find('#i2').toggleClass('fa-plus fa-minus')
      // $("#title2").css("color" , "rgb(126,168,255)")
    })
  })

  $(document).ready(function(){
    $('#title3').click(function(){
      $(this).find('#i3').toggleClass('fa-plus fa-minus')
      // $("#title3").css("color" , "rgb(126,168,255)")
    })
  })
