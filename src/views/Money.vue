<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <Notes @update:value="onUpdateNotes" />
    <Tags :data-source.sync="tags" @update:selected="onUpdateTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Notes from '@/components/Money/Notes.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Tags from '@/components/Money/Tags.vue';
import { Component, Watch } from 'vue-property-decorator';

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
};

@Component({
  components: { Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  recordList: Record[] = [];
  record: Record = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0,
  };

  onUpdateTags(value: string[]) {
    console.log(this.record);
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    console.log(value);
    this.record.notes = value;
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
    this.recordList.push(JSON.parse(JSON.stringify(this.record)));
  }
  @Watch('recordList')
  onRecordListChange() {
    localStorage.setItem('recordList', JSON.stringify(this.recordList));
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

