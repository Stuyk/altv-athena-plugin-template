<template>
    <div class="test">
        Example Plugin Test
    </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export const ComponentName = 'ExamplePlugin';
export default defineComponent({
    name: ComponentName,
    components: {
        Button: defineAsyncComponent(() => import('@components/Button.vue')),
        Icon:  defineAsyncComponent(() => import('@components/Icon.vue')),
    },
    data() {
        return {};
    },
    methods: {

    },
    computed: {

    },
    mounted() {
        if ('alt' in window) {
            alt.emit(`${ComponentName}:Ready`);
        }
    },
    unmounted() {},
});
</script>

<style scoped>
.test {
    background: black;
    min-width: 400px;
    max-width: 400px;
}
</style>
