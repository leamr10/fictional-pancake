

$(function () {

$(".saveBtn").on ("click", function(){
  var time=$(this).parent().attr("id");

  var task=$(this).siblings(".description").val();
  localStorage.setItem(time, task)
});

  function hourUpdater() {
    var hour = dayjs().hour()

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1])
    
      if(blockHour<hour) {
        $(this).addClass("past")
      }
      else if(blockHour===hour) {
        $(this).addClass("present")
      }
      else {
        $(this).addClass("future")
      }
    })
  }
    hourUpdater()

    for(var i=9;i<18;i++) {
      $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i))
    }

   setInterval(hourUpdater,15000)

    $("#currentDay").text(dayjs().format("dddd, MMMM D"))

  });