type RecordItem = {
  tags: string[];
  FormItem: string;
  type: string;
  amount: number;
  createAt?: Date;
};
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => "success" | "duplicated"; //success表示成功 duplicated表示name重复
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  remove: (id: string) => boolean; //返回boolean
  save: () => void;
}
// interface Window {
//   tagList: Tag[];
//   createTag: (name: string)=> void;
//   findTag: (id: string)=>Tag | undefined;
//   removeTag: (id: string)=> boolean;
//   updateTag: TagListModel["update"]; //表示直接用上方的，是相同的
//   recordList: RecordItem[];
//   createRecord: (record: RecordItem) => void;
// }