const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

const tasks = [
  {
    id: 1,
    name: "sleep",
    isCompleted: false,
  },
  {
    id: 2,
    name: "eat",
    isCompleted: false,
  },
  {
    id: 3,
    name: "code",
    isCompleted: false,
  },
];

app.get("/tasks", (req, res) => {
  res.status(200);
  res.json(tasks);
});

//start search
app.get("/task", (req, res) => {
  const { name } = req.query;
  const found = tasks.find((ele) => {
    return ele.name === name;
  });
  if (found) {
    res.status(200);
    res.json(found);
  } else {
    res.status(404);
    res.json("task not found");
  }
});
//end

//start post
app.post("/create", (req, res) => {
  const { id, name, isCompleted } = req.body;
  tasks.push({ id: 4, name: "read", isCompleted: false });
  res.status(201);
  res.json({ id, name, isCompleted });
});
//end

//start put
app.put("/update/:name/:editedTask", (req, res) => {
  const { name } = req.params;
  const { editedTask } = req.params;

  tasks.forEach((ele) => {
    if (ele.name === name) {
      ele.name = editedTask;
    }
  });

  res.status(200);
  res.json(editedTask);
  console.log(tasks);
});
//end

//start of delete

app.delete("/deleteTask/:name", (req, res) => {
  const { name } = req.params;

  tasks.forEach((item, i) => {
    if (item.name === name) {
      tasks.splice(i, 1);
    }
  });

  res.status(200);
  res.json(name);
  console.log(tasks);
});

//end
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
