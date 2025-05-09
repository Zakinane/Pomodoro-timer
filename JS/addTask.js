document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.querySelector(".add-task-button");
  const tasksContainer = document.querySelector(".tasks-container");

  addTaskBtn.addEventListener("click", () => {
    const taskName = prompt("Enter the name of the task :");
    if (!taskName) return;

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const deleteBtn = document.createElement("img");
    deleteBtn.src = "../img/x.svg";
    deleteBtn.height = 20;
    deleteBtn.style.cursor = "pointer";
    deleteBtn.addEventListener("click", () => {
      taskDiv.remove();
    });

    const nameDiv = document.createElement("div");
    nameDiv.id = 'taskText'
    nameDiv.textContent = taskName;

    const progressDiv = document.createElement("div");
    progressDiv.textContent = "0/3";

    const parameters = document.createElement("img");
    parameters.src = "../img/dots.svg";
    parameters.height = 20;
    parameters.style.cursor = "pointer";
    parameters.addEventListener("click", () => {
      nameDiv.textContent = prompt("Change the name of the task :",taskName);    
    });

    taskDiv.appendChild(deleteBtn);
    taskDiv.appendChild(nameDiv);
    taskDiv.appendChild(progressDiv);
    taskDiv.appendChild(parameters);

    tasksContainer.appendChild(taskDiv);
  });
});
