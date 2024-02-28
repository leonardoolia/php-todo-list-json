const { createApp } = Vue;

const endpoint = 'http://localhost/Boolean/php-todo-list-json/api/tasks/index.php';

const app = createApp({
    name: 'Todo List',
    data: () => ({
        tasks: [],
        newTask: ''
    }),
    methods: {
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push({
                    id: this.tasks.length + 1,
                    text: this.newTask,
                    done: false,
                });
                this.newTask = '';
            }
        }
    },
    created() {
        axios.get(endpoint).then(res => {
            this.tasks = res.data
        })
    }



})

app.mount('#app')