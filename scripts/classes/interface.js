class Interface {
    constructor(elementClass, tasks) {
        console.log("interface");

        this.mainElem = document.querySelector("." + elementClass);
        this.tempHeader = document.querySelector(".temp-header");
        this.subheader = document.querySelector(".subheader");
        this.subheaderInfo = document.querySelector(".subheader-info");
        this.upButton = document.querySelector(".subheader-up-btn");

        this.tasks = tasks;
        this.showCategories();
    }

    showCategories() {
        this.openedCategory = null;

        this.subheader.style.display = "none";
        this.tempHeader.style.display = "unset";

        const tasks = this.tasks;

        let categoriesElem = document.createElement("div");
        categoriesElem.className = "category-btns";

        for (let category in tasks) {
            let categoryElem = document.createElement("div");
            categoryElem.className = "category-btn";
            categoryElem.innerText = category;
            categoryElem.onclick = () => {
                this.openCategory(category);
            };

            categoriesElem.appendChild(categoryElem);
        }

        this.mainElem.innerHTML = "";
        this.mainElem.appendChild(categoriesElem);
    }

    openCategory(category) {
        this.openedCategory = category;

        this.subheader.style.display = "flex";
        this.tempHeader.style.display = "none";

        this.subheaderInfo.innerText = category[0].toUpperCase() + category.slice(1);

        this.upButton.onclick = () => {
            this.showCategories();
        };

        //TODO: switch anim

        this.mainElem.innerHTML = "";
        const taskList = this.tasks[category];

        let tasksElem = document.createElement("div");
        tasksElem.className = "tasks";

        for (let task of taskList) {
            let taskElem = document.createElement("div");
            taskElem.className = "task-container";

            let taskDate = document.createElement("div");
            taskDate.className = "task-date";
            taskDate.innerText = task.date.month + "/" + task.date.day;
            taskElem.appendChild(taskDate);

            let taskName = document.createElement("div");
            taskName.className = "task-name";
            taskName.innerText = task.name;
            taskName.onclick = () => {
                this.openTask(task.name, task.link);
            }
            taskElem.appendChild(taskName);

            tasksElem.appendChild(taskElem);
        }

        this.mainElem.appendChild(tasksElem);
    }

    openTask(name, link) {
        console.log(name, link);

        //TEMP
        window.open(link, '_blank');
        

        //put name to the subheader

        //put event on subheader-up-btn | openCategory(this.openedCategory)

        //show task via iframe
    }

    //
}
