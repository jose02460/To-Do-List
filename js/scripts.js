function Task(name, desc) {
  this.taskName = name;
  this.taskDesc = desc;
}

$(function() {
  $('form#taskForm').submit(function(event) {
    event.preventDefault();

    var taskName = $('input#inputTaskName').val();
    var taskDesc = $('textarea#inputTaskDesc').val();

    var newTask = new Task(taskName, taskDesc);
     $('ul#toDoListDisplay').append('<li class="list-group-item">' + newTask.taskName + '<label class="form-check-label float-right"><input class="form-check-input" type="checkbox"> Done </label><ul class="list-group list-group-flush"><li class="list-group-item">' + newTask.taskDesc + '</li></ul></li>');

    $('input#inputTaskName').val("");
    $('textarea#inputTaskDesc').val("");
  });


  $('div#taskCard').click(function() {
    if ($('.form-check-input').last().is(':checked')) {
      $('ul#toDoListDisplay').last().remove()
    }
  });
  // $('.form-check-input').trigger("click", function() {
  //   if ($('.form-check-input').is(':checked')) {
  //     $('ul#toDoListDisplay').last().remove();
  //   }
  // });

  // $('.form-check-input').prop("checked", true).last().trigger("click", function() {
  //   // $('#taskCard').show();
  //   $('ul#toDoListDisplay').append('<li class="list-group-item">' + newTask.taskName + '<label class="form-check-label float-right"><input class="form-check-input" type="checkbox"> Done </label><ul class="list-group list-group-flush"><li class="list-group-item">' + newTask.taskDesc + '</li></ul></li>');
  // });
});
