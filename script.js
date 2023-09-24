// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $(".saveBtn").click(function(){
    console.log($(this).parent().attr("id"))
    var rowID=$(this).parent().attr("id")
    var userInput=$(this).siblings(".description").val()
    localStorage.setItem(rowID, userInput);
    
  });
  const hours=['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17']
    for (const hour of hours){
      const savedText=localStorage.getItem(hour)
      $(`#${hour} .description`).val(savedText)
    }
    $("#currentDay").text(dayjs().format("'DD/MM/YYYY'"))
  
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    function colorUpdate(){
      let rightNow=dayjs().hour()
      console.log(rightNow)
      $(".time-block").each(function(){
        var blockIds=parseInt($(this).attr("id").split("-")[1])
        if (blockIds < rightNow){
          $(this).addClass("past")
        }else if(blockIds===rightNow){
          $(this).addClass("present")
        }else {
          $(this).addClass("future")
        }
      })
    }
    colorUpdate()
    
    // TODO: Add code to display the current date in the header of the page.
  });