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

  $('ul#toDoListDisplay').click(function() {
    if ($('.form-check-input').is(':checked')) {
      $('li').last().remove()
    }
  });
});
