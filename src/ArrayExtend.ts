export class ArrayExtend {
    // deno-lint-ignore no-explicit-any
    readonly array: any[] = [];

    // deno-lint-ignore no-explicit-any
    constructor(arr: any[]) {
        this.array = arr;
    }

    /**
     * Get average value from number array.
     * Is you pass field name you can get average value
     * from array like this [{ field: 1 }, { field: 2 }, ...]
     * @param {string} field
     */
    avg(field?: string) {
        let out = 0;
        if (!this.array.length) {
            return 0;
        }
        if (field) {
            for (let i = 0; i < this.array.length; i++) {
                out += this.array[i][field] * 1;
            }
        } else {
            for (let i = 0; i < this.array.length; i++) {
                out += this.array[i];
            }
        }
        return out / this.array.length;
    }

    /**
     * Get sum of values from number array.
     * Is you pass field name you can get sum of values
     * from array like this [{ field: 1 }, { field: 2 }, ...]
     * @param {string} field
     */
    sum(field?: string) {
        let out = 0;
        if (field) {
            for (let i = 0; i < this.array.length; i++) {
                out += this.array[i][field] * 1;
            }
        } else {
            for (let i = 0; i < this.array.length; i++) {
                out += this.array[i];
            }
        }
        return out;
    }

    /**
     * Return gap between element.
     * For example [2, 3] goes to [1] becase 3 - 2 = 1
     */
    gap() {
        const out = [];
        for (let i = 0; i < this.array.length - 1; i++) {
            out.push(this.array[i + 1] - this.array[i]);
        }
        return out;
    }

    /**
     * Extract values from object array.
     * For example you have [{ id: 1 }, { id: 2 }]
     * extractField("id") returns you [1, 2] array.
     * @param {string} field
     */
    extractField(field: string) {
        const out = [];
        for (let i = 0; i < this.array.length; i++) {
            // deno-lint-ignore no-prototype-builtins
            if (this.array[i].hasOwnProperty(field)) {
                out.push(this.array[i][field]);
            }
        }
        return out;
    }

    /**
     * Remove passed value from array but only one.
     * Return undefined if not found.
     * @param {unknown} value
     */
    delete(...value: unknown[]): unknown[] {
        const removed: unknown[] = [];
        for (let i = 0; i < value.length; i++) {
            const index = this.array.indexOf(value[i]);
            if (index !== -1) {
                removed.push(...this.array.splice(index, 1));
            }
        }

        return removed;
    }

    /**
     * Remove passed value from array and remove them all.
     * Return an array of removed values.
     * @param {unknown} value
     */
    deleteAll(...value: unknown[]): unknown[] {
        const removed = [];
        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < this.array.length; j++) {
                if (this.array[j] === value[j]) {
                    removed.push(this.array.splice(j, 1)[0]);
                    j--;
                }
            }
        }
        return removed;
    }

    /*intersection(arr: Array<unknown>) {
        const out = [];
        const maxArr = this.array.length > arr.length ? this.array : arr;
        const minArr = this.array.length > arr.length ? arr : this.array;

        for (let i = 0; i < maxArr.length; i++) {
            if (minArr.includes(maxArr[i])) {
                out.push(maxArr[i]);
            }
        }

        return out;
    }*/

    /**
     * Last element
     */
    get last(): unknown {
        return this.array[this.array.length - 1];
    }

    /**
     * Shuffle array on random order.
     * For example [1, 2, 3] can be [3, 1, 2] or [1, 3, 2] or even [1, 2, 3]
     */
    shuffle(): unknown[] {
        const array = JSON.parse(JSON.stringify(this.array));

        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    /**
     * Just clear all array
     */
    clear() {
        this.array.length = 0;
    }

    /**
     * Return array where all duplicates was removed.
     * For example [1, 2, 3, 3] goes to [1, 2, 3]
     * Or [{ id: 1 }, { id: 1 }] goes to [{ id: 1 }]
     * @param {unknown} value
     */
    unique(field?: string) {
        if (field) {
            const out = [];
            for (let i = 0; i < this.array.length; i++) {
                let isExist = false;
                for (let j = 0; j < out.length; j++) {
                    if (out[j][field] === this.array[i][field]) {
                        isExist = true;
                        break;
                    }
                }
                if (!isExist) {
                    out.push(this.array[i]);
                }
            }
            return out;
        }
        return this.array.filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });
    }

    contain(...value: unknown[]): boolean {
        for (let i = 0; i < value.length; i++) {
            if (!this.array.includes(value[i])) {
                return false;
            }
        }
        return true;
    }
}

// deno-lint-ignore no-explicit-any
export function EArray(arr: any[]): ArrayExtend {
    return new ArrayExtend(arr);
}
