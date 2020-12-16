const localStorageItem = "recordList";
const recordListModel = {
    data: [] as RecordItem[],
    clone(data: RecordItem[] | RecordItem){
        return JSON.parse(JSON.stringify(data));
    },
    fetch() {
        this.data = JSON.parse(localStorage.getItem(localStorageItem) || "[]") as RecordItem[];
        return this.data;
    },
    save(data: RecordItem[]) {
        localStorage.setItem(localStorageItem, JSON.stringify(this.data));
    }
}
export { recordListModel };