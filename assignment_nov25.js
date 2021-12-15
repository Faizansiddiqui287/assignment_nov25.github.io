var todo = [];

        function list() {
            for (var i = 0; i < todo.length; i++) {
                console.log(todo[i]);
            }
        }

        function add_todo_item(new_item) {
            todo.push(prompt("enter 1st todo item"));
            todo.push(prompt("enter 2nd todo item"));
        }

        function task_done() {
            var ts = prompt("enter task which is completed");

            if (ts == 0) {
                todo[0] = "complete JS ✓";
            } else ts == 1;
            {
                todo[1] = "assignment done ✓ ";
            }
        }

        function task_edit() {
            todo[0] = prompt("ENTER 1ST");
            todo[1] = prompt("ENTER  2ND");
        }

        function delete_item() {
            var a = parseInt(prompt("enter which element you want to start deletion from"));
            var b = parseInt(prompt("enter till which element should be deleted"));

            todo.splice(a, b);
        }