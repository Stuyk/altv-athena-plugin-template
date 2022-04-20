<template>
    <div class="test">
        Example Plugin Test
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// Global Components
import Icon from '@components/Icon.vue';
import Button from '@components/Button.vue';

export const ComponentName = 'ExamplePlugin';
export default defineComponent({
    name: ComponentName,
    components: {
        Button,
        Icon,
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
