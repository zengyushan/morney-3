<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <FormItem field-name="备注" @update:value="onUpdateNotes" placeholder="在这里输入备注"/>
    <Tags :data-source.sync="tags" @update:selected="onUpdateTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import FormItem from '@/components/Money/FormItem.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Tags from '@/components/Money/Tags.vue';
import { Component, Watch } from 'vue-property-decorator';

import {recordListModel} from "@/models/recordListModel";
import {tagListModel} from "@/models/tagListModel";
const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();


@Component({
  components: { Tags, FormItem, Types, NumberPad },
})
export default class Money extends Vue {
  tags = tagList;
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
    tags: [],
    FormItem: '',
    type: '-',
    amount: 0
  };

  onUpdateTags(value: string[]) {
    console.log(this.record);
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    console.log(value);
    this.record.FormItem = value;
  }
  onUpdateType(value: string) {
    console.log(value);
    this.record.type = value;
  }
  onUpdateAmount(value: string) {
    console.log(value);
    this.record.amount = parseFloat(value);
  }
  saveRecord() {
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createAt = new Date();
    this.recordList.push(record2);
  }
  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/helper.scss';
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
</style>

