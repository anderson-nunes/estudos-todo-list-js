var tasks = [];

function idGenerator() {
  var timestamp = new Date();

  var id =
    timestamp.getHours().toString() +
    timestamp.getMinutes().toString() +
    timestamp.getSeconds().toString() +
    timestamp.getMilliseconds().toString();

  return id;
}

function createTask() {
  var taskDescription = document.getElementById("newTask").value;

  var task = {
    id: idGenerator(),
    data: {
      description: taskDescription,
    },
  };

  tasks.push(task);

  updateScreen();
}

function updateScreen() {
  var list = "<ul>";

  tasks.forEach((task) => {
    list += `<li class="list-item" id-data="${task.id}">
    <p>${task.data.description}</p>
    <button onclick="deleteTask(${task.id})">Apagar</button>
    </li>`;
  });

  list += "</ul>";

  document.getElementById("list").innerHTML = list;
  document.getElementById("newTask").value = "";
}

function deleteTask(id) {
  console.log(id);

  tasks = tasks.filter(
    (task) =>
      task.id !=
      document.querySelector(`[id-data="${id}"]`).getAttribute("id-data")
  );

  updateScreen();
}
