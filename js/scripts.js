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
     $('ul#toDoListDisplay').append('<li class="list-group-item">' + newTask.taskName + '<ul class="list-group list-group-flush"><li class="list-group-item">' + newTask.taskDesc + '</li></ul></li>');

    $('input#inputTaskName').val("");
    $('textarea#inputTaskDesc').val("");
  });
});
