<template lang="pug">
.tasks
    .title.title_small.tasks__title {{ $t('tasks.title') }}
    .tasks__wrapper 
        tasks-item(
            v-for="(task,index) in tasks"
            :key="index"
            :content="task"
            @click.native="taskCheck(index)"
        )
        
</template>

<script>
import { mapGetters } from "vuex";

import tasksItem from "~/components/tasks/tasks-item.vue";

export default {
    name: 'tasksBlock',

    components: {
        tasksItem
    },

    computed: {
		...mapGetters({
			returnInfo: "popup/returnInfo",
			tasks: "userTasks/allTasks",
		})
	},

    data() {
        return {
        }
    },

    methods: {
        taskCheck(e) {
            this.$store.commit("userTasks/loading", [e, true])
        }
    }
}

</script>

<style lang="scss" scoped>
.tasks {
    &__wrapper {
        margin-top: mobile-vw(25);
    }
}
</style>