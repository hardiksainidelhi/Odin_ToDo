export default (()=>{
    const TASK_LIST_DOM = document.querySelector('.task-list');
    const PROJECT_LIST_DOM  = document.querySelector('.project-list');
    const PROJECT_DIV = document.querySelector('.main-content')
    
    function createTaskDOM(task){
        const taskDOM = document.createElement('li')
        const inputDOM = document.createElement('input')
        const detailsDOM = document.createElement('div')
        const labelDOM = document.createElement('label')
        const descriptionDOM = document.createElement('p')
        const metaDOM = document.createElement('div')

        taskDOM.id = task.id
        
        inputDOM.type = 'checkbox'
        
        detailsDOM.classList.add('task-details')

        labelDOM.innerText = task.title
        descriptionDOM.innerText = task.description

        descriptionDOM.classList.add('task-description')

        metaDOM.classList.add('task-meta')
        const dateDOM = document.createElement('span')
        dateDOM.classList.add('due-date')
        dateDOM.innerText = task.dueDate.toDateString()

        const priorityDOM = document.createElement('span')
        priorityDOM.classList.add('priority')
        priorityDOM.classList.add(`priority-${task.priority}`)
        priorityDOM.innerText = `priority : ${task.priority}`



        metaDOM.appendChild(dateDOM)
        metaDOM.appendChild(priorityDOM)

        detailsDOM.appendChild(labelDOM)
        detailsDOM.appendChild(descriptionDOM)
        detailsDOM.appendChild(metaDOM)

        taskDOM.appendChild(inputDOM)
        taskDOM.appendChild(detailsDOM)


        return taskDOM
    }

    function populateTaskList(project,taskListDOM){
        for (let task of project.getTasks()){
            taskListDOM.appendChild(createTaskDOM(task))
        }
    }

    function createProjectDOM(project){
        const projectDOM = document.createElement('div')
        const titletDOM = document.createElement('h2')
        const descriptionDOM = document.createElement('p')
        const taskListDOM = document.createElement('ul')

        titletDOM.innerText = project.title
        descriptionDOM.innerText = project.description
        descriptionDOM.classList.add("project-description")

        taskListDOM.classList.add("task-list")
        populateTaskList(project,taskListDOM)
        
        projectDOM.appendChild(titletDOM)
        projectDOM.appendChild(descriptionDOM)
        projectDOM.appendChild(taskListDOM)



        return projectDOM
    }

    function displayProject(project){
        PROJECT_DIV.innerHTML = ''
        PROJECT_DIV.appendChild(createProjectDOM(project))

    }

    return {
        TASK_LIST_DOM,
        PROJECT_LIST_DOM,
        PROJECT_DIV,
        displayProject
    }
})()