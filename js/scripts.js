$(document).ready(function() {
  $("#add-task").click(function() {
    $("#new-tasks").append('<div class="new-tasks">' +
                              '<div class="form-group">' +
                                '<label for="new-task">Task</label>' +
                                '<input type="text" class="form-control new-task">' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="new-due">Due Date</label>' +
                                '<input type="text" class="form-control new-due">' +
                              '</div>' +
                            '</div>');
    });

  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var inputtedListName = $("input#new-list-name").val();

    var newList = {listName: inputtedListName, tasks: [] };

    $(".new-tasks").each(function(){
      var inputtedTaskName = $(this).find("input.new-task").val();
      var inputtedDueDate = $(this).find("input.new-due").val();

      var newTask = {taskName: inputtedTaskName, dueDate: inputtedDueDate};
      newList.tasks.push(newTask);
    });

    $("ul#lists").append("<li><span class='list'> " +
                              newList.listName  +
                              "</span></li>");

    $("input#new-list-name").val("");
    $("input.new-task").val("");
    $("input.new-due").val("");

    $(".list").last().click(function() {
      $("#show-list").show();
      $("#show-list h2").text(newList.listName);
      // $(".task-name").text(newList.taskName);
      // $(".due").text(newList.dueDate);

      $("ul#tasks").text("");
      newList.tasks.forEach(function(task) {
        $("ul#tasks").append("<li><span class='task'>" + task.taskName + ", <br>" + task.dueDate + "</span></li>");
      });
    });

    $(".task").last().click(function() {
      $("#show-task").show();
    //  $("#show-task h2").text(newList.listName);


    })
  });
});
