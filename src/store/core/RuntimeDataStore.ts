class RuntimeDataStore<T extends object> {
    public data: T = {} as T;

    constructor() {
    }

    public setData<K extends keyof T>(fieldName: K, value: T[K]) {
        this.data[fieldName] = value;
    }
}

export default RuntimeDataStore;
