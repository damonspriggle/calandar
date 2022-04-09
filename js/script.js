// header time
  var day = moment().format("lll");
  $("#currentDay").append(day);

//timeblocks 
var blockTime = moment().startOf("day").add(8, "hour");
var hour = moment().format("hh");

for (var i = -4; i < 5; i++) {
  var timeRow = blockTime.add(1, "hour").format("h:mm A");
  var exactTime;

 // present, future, and past timeblocks color coded
  if (hour == i) {
    exactTime = 'present';
  } else if (hour < i) {
    exactTime = 'future';
  } else if (hour > i) {
    exactTime = 'past';
  }
// all html for style
  var timeBlock =
      `<container class="row" id='hour-${i}'>
          <div class="col-2"></div>
          <div class="hour w-25 p-4 col-1">${timeRow}</div>
          <textarea class="description w-50 p-4 col-6 ${exactTime} hour-${i}"></textarea>
          <button class="saveBtn w-25 p-4 col-1 fas fa-save fa-2x"></button>
          <div class="col-2">
          </div>  
      </container>
      <p></p>`;

  $("#containAll").append(timeBlock);
};

// saves locally
$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, value);
});
 
// final function
for (var i = -4; i < 5; i++) {
  $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));
}
