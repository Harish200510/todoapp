let lists = JSON.parse(localStorage.getItem('lists')) || [];


      function display() {


        let listtotal = "";

        for (let i = 0; i < lists.length; i++) {
          const todoobj = lists[i];
          const { task, dueDate } = todoobj;
          const html = `<div>${task}</div>
                        <div>${dueDate}</div>
                        <button onclick="lists.splice(${i},1);display()"
                        class="del-btn">Delete</button>`;

          listtotal += html;
        }
            
        
        document.querySelector(".js-result").innerHTML = listtotal;
      }
      function saveAndDisplay() {
        localStorage.setItem('lists', JSON.stringify(lists));
        display();
      }
      function addList() {
        let task = document.querySelector(".js-in").value;
        let dueDate = document.querySelector(".js-date").value;
        lists.push({
          //task:temp,
          //date:listDate
          task,
          dueDate,
        });
        //lists.push(listDate);
        saveAndDisplay();
        console.log(lists);
        document.querySelector(".js-in").value = "";
       
      }
      display();
    