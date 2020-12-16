<template>
    <Layout>
        <div class="navBar">
            <Icon class="leftIcon" name="left" @click="goBack"/>
            <span class="title">编辑标签</span>
            <span class="rightIcon"></span>
        </div>
        <div class="form-wrapper">
            <FormItem @update:value="updateTag" :value="tag.name" field-name="标签名" placeholder="请输入备注信息" />
        </div>
        <div class="button-wrapper">
            <Button @click="remove">删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
import { tagListModel } from "@/models/tagListModel";
import Vue from "vue";
import { Component } from 'vue-property-decorator';
import FormItem from "@/components/Money/FormItem.vue";
@Component({
    components: {FormItem}
})
export default class EditLabel extends Vue{
    tag?: {id: string, name: string} = undefined;
    created(){
        const id = this.$route.params.id;
        tagListModel.fetch();
        const tags = tagListModel.data;
        const tag = tags.filter(t => t.id===id)[0];
        if(tag){
            console.log(tag);
            this.tag = tag;
        }else{
            this.$router.replace("/404");
        }
    }
    updateTag(name: string){
        console.log(name);
        if(this.tag){
            tagListModel.update(this.tag.id, name);
        }
    }
    remove(){
        if(this.tag){
            if(tagListModel.remove(this.tag.id)){
                this.$router.back();
            }else{
                alert("删除失败");
            }
        }
    }
    goBack(){
        this.$router.back();
    }
}
</script>
<style lang="scss">
.navBar {
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .title {
    }
    > .leftIcon {
      width: 24px;
      height: 24px;
    }
    > .rightIcon {
      width: 24px;
      height: 24px;
    }
  }
  .form-wrapper {
    background: white;
    margin-top: 8px;
  }
  .button-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
</style>