const lists = $(".list-details");
const btn = $("#btn");
let taskMsg = $("#task-msg");

function addTask() {
  let time = new Date();
  let fullTime = time.toLocaleTimeString();

  function updateTaskMessage() {
    if ($("#numbersList").children().length === 0) {
      taskMsg.text("No Plans to do !!").css("color", "grey");
    } else {
      taskMsg.text("Here are the planned tasks to do.").css("color", "green");
    }
  }

  let input = $("#input").val().trim();

  if (input) {
    $("#guide-msg").text("");

    let newtask = $("<div>").css({
      width: "100%",
      marginTop: "20px",
      borderRadius: "10px",
      backgroundColor: "lightgreen",
      padding: "15px",
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      position: "relative",
      overflow: "auto",
      transition: "all .2s ease-in-out",
    });

    let taskContainer = $("<div>").css({
      display: "flex",
      alignItems: "flex-start",
      flex: "1",
    });

    let customCheckbox = $("<span>").css({
      width: "25px",
      height: "25px",
      border: "2px solid green",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      borderRadius: "20px",
      fontSize: "16px",
      fontWeight: "bold",
      color: "white",
    });

    let taskText = $("<span>").text(input).css({
      flex: "1",
      wordWrap: "break-word",
      overflowWrap: "break-word",
      whiteSpace: "normal",
      paddingLeft: "10px",
      transition: "all 0.3s ease-in-out",
    });

    let iconContainer = $("<div>").css({
      display: "flex",
      flexDirection: "column",
      alignItems: "flexstart",
      gap: "5px",
      padding: "10px",
    });

    let buttonContainer = $("<div>").css({
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "row",
      gap: "10px",
    });

    let timeText = $("<span>").text(fullTime).css({
      fontSize: "12px",
      color: "grey",
      marginTop: "5px",
    });

    let deleteIcon = $("<i>").addClass("fa-solid fa-trash").css({
      cursor: "pointer",
      fontSize: "20px",
    });

    let editIcon = $("<i>").addClass("fa-duotone fa-solid fa-pen").css({
      cursor: "pointer",
      fontSize: "18px",
      paddingRight: "5px",
      color: "red",
    });

    customCheckbox.click(() => {
      if (customCheckbox.text() === "") {
        customCheckbox.text("✓").css("background-color", "green");
        newtask.css("background-color", "lightgray");
        taskText.css({
          textDecoration: "line-through",
          color: "grey",
        });
      } else {
        customCheckbox.text("").css("background-color", "transparent");
        newtask.css("background-color", "lightgreen");
        taskText.css({
          textDecoration: "none",
          color: "black",
          backgroundColor: "transparent",
        });
      }
    });

    editIcon.click(() => {
      customCheckbox.css("pointer-events", "none");
      $("#guide-msg").text("*Press the enter button after updating the task.");

      let currentText = taskText.text();
      let editInput = $("<input>").val(currentText).css({
        height: "auto",
        padding: "10px",
        width: "95%",
        marginLeft: "10px",
        paddingLeft: "10px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid gray",
        outline: "none",
        backgroundColor: "transparent",
      });

      editInput.keypress((event) => {
        if (event.which === 13) {
          let updatedText = editInput.val().trim();
          if (updatedText) {
            taskText.text(updatedText);
            editInput.replaceWith(taskText);
            customCheckbox.css("pointer-events", "auto");
            $("#guide-msg").text("");
          } else {
            $("#guide-msg").text("Task cannot be empty!");
          }
        }
      });

      taskText.replaceWith(editInput);
      editInput.focus();
    });

    deleteIcon.click((event) => {
      event.stopPropagation();
      newtask.remove();
      updateTaskMessage();
    });

    taskContainer.append(customCheckbox, taskText);
    buttonContainer.append(editIcon, deleteIcon);
    iconContainer.append(buttonContainer, timeText);
    newtask.append(taskContainer, iconContainer);

    $("#numbersList").prepend(newtask);
    $("#input").val("");

    updateTaskMessage();
  } else {
    $("#guide-msg").text("*Please fill the input field!");
  }
}

btn.click(() => {
  addTask();
});

$("#input").keypress((event) => {
  if (event.which === 13) {
    addTask();
  }
});