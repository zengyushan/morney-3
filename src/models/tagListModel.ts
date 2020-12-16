import createId from "@/lib/createId";
const localStorageItem = "tagList";
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
const tagListModel: TagListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(localStorage.getItem(localStorageItem) || "[]");
        return this.data;
    },
    create(name: string) {
        const names = this.data.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            return "duplicated";
        }
        const id = createId().toString();
        this.data.push({ id, name: name });
        this.save();
        return "success";
    },
    update(id, name) {
        const idList = this.data.map(item => item.id);//返回id的集合
        //在更新的这个标签的id如果存在
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name);
            //如果name重复
            if (names.indexOf(name) >= 0) {
                return 'duplicated'
            } else {
                const tag = this.data.filter(item => item.id === id)[0];
                tag.name = name;
                this.save();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    remove(id: string){
        let index = -1;
        for(let i=0;i<this.data.length;i++){
            if(this.data[i].id === id){
                index = i;
                break;
            }
        }
        this.data.splice(index,1);
        this.save();
        return true;
    },
    save() {
        localStorage.setItem(localStorageItem, JSON.stringify(this.data));
    }
}
export { tagListModel };