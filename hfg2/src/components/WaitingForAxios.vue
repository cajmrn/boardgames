<template>
        <v-progress-linear
            :active="!_done"
            :indeterminate="true"
            abosolute
            bottom
            theme="dark"  
        ></v-progress-linear>
</template>
<script>
export default {
    name: "WaitingForAxios",
    props:{
        _done: true
    }

}
</script>