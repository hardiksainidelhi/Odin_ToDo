export default (() => {
  const TASK_LIST_DOM = document.querySelector(".task-list");
  const PROJECT_LIST_DOM = document.querySelector(".project-list");
  const PROJECT_DIV = document.querySelector(".main-content");
  const ADD_TASK_MODAL = document.querySelector("#modal-container")
  const ADD_TASK_BUTTON = document.querySelector(".add-task-btn")
  const TASK_MODAL_PROJECT_SELECT = document.querySelector("#projectList")
  const TASK_MODEL_TITLE = document.querySelector("#task-title")
  const TASK_MODEL_DESCRIPTION = document.querySelector("#task-description")
  const TASK_MODEL_DUE_DATE = document.querySelector("#task-due-date")
  const TASK_MODEL_PRIORITY = document.querySelector("#task-priority")
  const SUBMIT_NEW_TASK_BUTTON = document.querySelector('#task-btn-submit')
  const TASK_MODAL_CANCEL_BUTTON = document.querySelector('#task-btn-cancel')
  const ADD_PROJECT_MODAL = document.querySelector("#add-project-modal")
  const ADD_PROJECT_BUTTON = document.querySelector(".add-project-btn")
  const PROJECT_MODEL_TITLE = document.querySelector("#project-title")
  const PROJECT_MODEL_DESCRIPTION = document.querySelector("#project-description")
  const PROEJCT_MODAL_SUBMIT_BUTTON = document.querySelector('#project-btn-submit')
  const PROJECT_MODAL_CANCEL_BUTTON = document.querySelector('#project-btn-cancel')


    function getTaskFormDetails(){
        let title = TASK_MODEL_TITLE.value
        let description = TASK_MODEL_DESCRIPTION.value
        let dueDate = TASK_MODEL_DUE_DATE.value
        let priority = TASK_MODEL_PRIORITY.value
        let project = TASK_MODAL_PROJECT_SELECT.value

        return {
            title,
            description,
            dueDate,
            priority,
            project
        }
    }

    function getProjectFormDetails(){
      let title = PROJECT_MODEL_TITLE.value
      console.log(PROJECT_MODEL_DESCRIPTION)
      let description = PROJECT_MODEL_DESCRIPTION.value

      return {
        title,
        description
      }
    }


  function createTaskDOM(task) {
    const taskDOM = document.createElement("li");
    const inputDOM = document.createElement("input");
    const detailsDOM = document.createElement("div");
    const labelDOM = document.createElement("label");
    const descriptionDOM = document.createElement("p");
    const metaDOM = document.createElement("div");

    taskDOM.dataset.taskId = task.id;

    inputDOM.type = "checkbox";

    detailsDOM.classList.add("task-details");

    labelDOM.innerText = task.title;
    descriptionDOM.innerText = task.description;

    descriptionDOM.classList.add("task-description");

    metaDOM.classList.add("task-meta");
    const dateDOM = document.createElement("span");
    dateDOM.classList.add("due-date");
    dateDOM.innerText = task.dueDate.toDateString();

    const priorityDOM = document.createElement("span");
    priorityDOM.classList.add("priority");
    priorityDOM.classList.add(`priority-${task.priority}`);
    priorityDOM.innerText = `priority : ${task.priority}`;

    metaDOM.appendChild(dateDOM);
    metaDOM.appendChild(priorityDOM);

    detailsDOM.appendChild(labelDOM);
    detailsDOM.appendChild(descriptionDOM);
    detailsDOM.appendChild(metaDOM);

    taskDOM.appendChild(inputDOM);
    taskDOM.appendChild(detailsDOM);

    return taskDOM;
  }

  function displayTaskModal(){
    ADD_TASK_MODAL.style.display = "flex"
  }

   function displayProjectModal(){
    ADD_PROJECT_MODAL.style.display = "flex"
  }

  function hideTaskModal(){
    ADD_TASK_MODAL.style.display = "none"
  }
  
  function hideProjectModal(){
    ADD_PROJECT_MODAL.style.display = "none"
  }



  function populateTaskList(project, taskListDOM) {
    for (let task of project.getTasks()) {
      taskListDOM.appendChild(createTaskDOM(task));
    }
  }

  function createProjectDOM(project) {
    const projectDOM = document.createElement("div");
    const titletDOM = document.createElement("h2");
    const descriptionDOM = document.createElement("p");
    const taskListDOM = document.createElement("ul");

    titletDOM.innerText = project.title;
    descriptionDOM.innerText = project.description;
    descriptionDOM.classList.add("project-description");

    taskListDOM.classList.add("task-list");
    populateTaskList(project, taskListDOM);

    projectDOM.appendChild(titletDOM);
    projectDOM.appendChild(descriptionDOM);
    projectDOM.appendChild(taskListDOM);

    return projectDOM;
  }

  function displayProject(project) {
    PROJECT_DIV.innerHTML = "";
    let list_elems = getAllProjectListItem();
    for (let list_elem of list_elems) {
      if (list_elem.dataset.projectId === project.id) {
        list_elem.classList.add("active");
      }
      else {
        list_elem.classList.remove('active')
      }
    }
    PROJECT_DIV.appendChild(createProjectDOM(project));
  }

  function createProjectListItem(project) {
    let listElem = document.createElement("li");
    listElem.innerText = project.title;
    listElem.dataset.projectId = `${project.id}`;
    listElem.classList.add('project_list_elem')

    return listElem;
  }

  function getAllProjectListItem() {
    let list_elems = document.querySelectorAll(".project_list_elem");
    return list_elems;
  }

  function populateTaskModal(projectList){
    TASK_MODAL_PROJECT_SELECT.innerHTML = ""
    for (let project of projectList){
        let option = document.createElement("option")
        option.value = project.id
        option.innerText = project.title

        TASK_MODAL_PROJECT_SELECT.appendChild(option)
    }
  }

  return {
    TASK_LIST_DOM,
    PROJECT_LIST_DOM,
    PROJECT_DIV,
    ADD_TASK_BUTTON,
    ADD_TASK_MODAL,
    SUBMIT_NEW_TASK_BUTTON,
    TASK_MODAL_CANCEL_BUTTON,
    ADD_PROJECT_BUTTON,
    ADD_PROJECT_MODAL,
    PROEJCT_MODAL_SUBMIT_BUTTON,
    PROJECT_MODAL_CANCEL_BUTTON,

    displayProject,
    displayTaskModal,
    displayProjectModal,
    hideTaskModal,
    hideProjectModal,
    createProjectListItem,
    getAllProjectListItem,
    populateTaskModal,
    getProjectFormDetails,
    getTaskFormDetails,
    displayProject
  };
})();
