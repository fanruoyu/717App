<template>
    <div class="kinds">
       <headers></headers>
       <sections></sections>
    </div>
</template>
<script>
import Headers from '../../../components/Kinds/Headers/Headers.vue'
import Sections from '../../../components/Kinds/Sections/Sections.vue'
export default {
    components: {
        Headers,
        Sections
    }
}
</script>

<style scoped>
.kinds {
    height: 100%;
    width:100%;
    display: flex;
    flex-direction: column;
}
</style>