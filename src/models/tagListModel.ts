const localStorageItem = "tagList";
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch:()=>Tag[];
    create:(name:string) => "success" | "duplicated"; //success表示成功 duplicated表示name重复
    save:()=>void
}
const tagListModel: TagListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(localStorage.getItem(localStorageItem) || "[]");
        return this.data;
    },
    create(name: string){
        const names = this.data.map(item => item.name);
        if(names.indexOf(name) >=0){
            return "duplicated";
        }
        this.data.push({id:name,name:name});
        this.save();
        return "success";
    },
    save() {
        localStorage.setItem(localStorageItem, JSON.stringify(this.data));
    }
}
export { tagListModel };