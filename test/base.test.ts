import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";
import { EArray } from "../src/ArrayExtend.ts";

Deno.test("avg", () => {
    assertEquals(EArray([1, 2]).avg(), 1.5);
    assertEquals(EArray([]).avg(), 0);
    assertEquals(EArray([{ val: 1 }, { val: 2 }]).avg("val"), 1.5);
});

Deno.test("sum", () => {
    assertEquals(EArray([1, 2]).sum(), 3);
    assertEquals(EArray([]).sum(), 0);
    assertEquals(EArray([{ val: 1 }, { val: 2 }]).sum("val"), 3);
});

Deno.test("gap", () => {
    assertEquals(EArray([2, 3]).gap(), [1]);
    assertEquals(EArray([1, 1]).gap(), [0]);
    assertEquals(EArray([1, 2, 3]).gap(), [1, 1]);
});

Deno.test("extractField", () => {
    assertEquals(EArray([{ id: 1 }, { id: 2 }]).extractField("id"), [1, 2]);
    assertEquals(EArray([{ id: 1 }, { gas: 2 }, {}]).extractField("id"), [1]);
    assertEquals(EArray([{ id: 1 }, { id: 2 }]).extractField("test"), []);
});

Deno.test("delete", () => {
    let a = EArray([1, 1, 2, 3]);
    assertEquals(a.delete(1), [1]);
    assertEquals(a.array, [1, 2, 3]);

    a = EArray([1, 2, 3]);
    assertEquals(a.delete(5), []);
    assertEquals(a.array, [1, 2, 3]);

    a = EArray([1, 2, 3]);
    assertEquals(a.delete(1, 3), [1, 3]);
    assertEquals(a.array, [2]);

    a = EArray([1, 2, 3]);
    assertEquals(a.delete(), []);
    assertEquals(a.array, [1, 2, 3]);
});

Deno.test("deleteAll", () => {
    let a = EArray([1, 1, 2, 3]);
    assertEquals(a.deleteAll(1), [1, 1]);
    assertEquals(a.array, [2, 3]);

    a = EArray([1, 1, 2, 3]);
    assertEquals(a.deleteAll(1, 3), [1, 1, 3]);
    assertEquals(a.array, [2]);
});

Deno.test("last", () => {
    assertEquals(EArray([1, 1, 2, 3]).last, 3);
});

Deno.test("clear", () => {
    const a = EArray([1, 1, 2, 3]);
    a.clear();
    assertEquals(a.array, []);
});

Deno.test("unique", () => {
    assertEquals(EArray([1, 1, 2, 3]).unique(), [1, 2, 3]);
    assertEquals(EArray([]).unique(), []);
    assertEquals(EArray([1, 2, 3]).unique(), [1, 2, 3]);
    assertEquals(EArray([{ id: 1 }, { id: 1 }]).unique("id"), [{ id: 1 }]);
});

Deno.test("shuffle", () => {
    const a = EArray([1, 2, 3]).shuffle();
    // I don't know how to test random. So let's except it works
    assertEquals(a.length, 3);
});

Deno.test("contain", () => {
    assertEquals(EArray([1, 2, 3]).contain(1), true);
    assertEquals(EArray([1, 2, 3]).contain(1, 2), true);
    assertEquals(EArray([1, 2, 3]).contain(5), false);
    assertEquals(EArray([1, 2, 3]).contain(1, 5), false);
});
