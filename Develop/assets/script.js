
$(function () {
    function updateHourStyles() {
      const currentHour = dayjs().hour();
  
      $(".time-block").each(function () {
        const hour = parseInt($(this).attr("id").split("-")[1]);
  
        if (hour < currentHour) {
          $(this).removeClass("present future").addClass("past");
        } else if (hour === currentHour) {
          $(this).removeClass("past future").addClass("present");
        } else {
          $(this).removeClass("past present").addClass("future");
        }
      });
    }
  
    $(".saveBtn").on("click", function () {
      const timeBlockId = $(this).closest(".time-block").attr("id");
      const userText = $(this).siblings(".description").val();
      localStorage.setItem(timeBlockId, userText);
    });
  
    $(".time-block").each(function () {
      const timeBlockId = $(this).attr("id");
      const savedUserText = localStorage.getItem(timeBlockId);
      if (savedUserText) {
        $(this).find(".description").val(savedUserText);
      }
    });
  
    const currentDate = dayjs().format("dddd, MMMM D, YYYY");
    $("#currentDay").text(currentDate);
    updateHourStyles();
    setInterval(updateHourStyles, 60000);
  });
  