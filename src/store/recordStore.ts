import clone from '@/lib/clone';

const localStorageItem = "recordList";

const recordStore = {
    recordList: [] as RecordItem[],
    fetchRecords() {
        this.recordList = JSON.parse(localStorage.getItem(localStorageItem) || "[]") as RecordItem[];
        return this.recordList;
    },
    saveRecords() {
        localStorage.setItem(localStorageItem, JSON.stringify(this.recordList));
    },
    createRecord(record: RecordItem){
        const record2: RecordItem = clone(record);
        record2.createAt = new Date();
        this.recordList && this.recordList.push(record2);
        recordStore.saveRecords();
    }
}
recordStore.fetchRecords();

export default recordStore;