const localStorageItem = "recordList";
const recordListModel = {
    clone(data: RecordItem[] | RecordItem){
        return JSON.parse(JSON.stringify(data));
    },
    fetch() {
        return JSON.parse(localStorage.getItem(localStorageItem) || "[]") as RecordItem[];
    },
    save(data: RecordItem[]) {
        localStorage.setItem(localStorageItem, JSON.stringify(data));
    }
}
export { recordListModel };