import createId from '@/lib/createId';
const localStorageKeyName = "tagList";
const tagStore = {
    //tag
    tagList: [] as Tag[],
    fetchTags(){
        this.tagList = JSON.parse(localStorage.getItem(localStorageKeyName) || "[]");
        return this.tagList;
    },
    findTag(id: string){
        return this.tagList.filter(t => t.id === id)[0];
    },
    createTag(name: string){
        const names = this.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            alert('标签名重复');
            return "duplicated";
        }
        const id = createId().toString();
        this.tagList.push({ id, name: name });
        this.saveTags();
        alert('成功');
        return "success";
    },
    removeTag(id: string){
        let index = -1;
        for(let i=0;i<this.tagList.length;i++){
            if(this.tagList[i].id === id){
                index = i;
                break;
            }
        }
        this.tagList.splice(index,1);
        this.saveTags();
        return true;
    },
    updateTag(id: string,name: string){
        const idList = this.tagList.map(item => item.id);//返回id的集合
        //在更新的这个标签的id如果存在
        if (idList.indexOf(id) >= 0) {
            const names = this.tagList.map(item => item.name);
            //如果name重复
            if (names.indexOf(name) >= 0) {
                return 'duplicated'
            } else {
                const tag = this.tagList.filter(item => item.id === id)[0];
                tag.name = name;
                this.saveTags();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    saveTags(){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
    }
}

tagStore.fetchTags();
export default tagStore;