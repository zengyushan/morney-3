import EditLabel from '@/views/EditLabel.vue';
<template>
    <Layout></Layout>
</template>

<script lang="ts">
import { tagListModel } from "@/models/tagListModel";
import Vue from "vue";
import { Component } from 'vue-property-decorator';

@Component
export default class EditLabel extends Vue{
    created(){
        const id = this.$route.params.id;
        tagListModel.fetch();
        const tags = tagListModel.data;
        const tag = tags.filter(t => t.id)[0];
        if(tag){
            console.log(tag);
        }else{
            this.$router.replace("/404");
        }
    }
}
</script>
<style lang="scss">
</style>