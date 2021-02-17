# Extend Array

[![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Flatest-version%2Fx%2Fearray%2Fmod.ts)](https://doc.deno.land/https/deno.land/x/earray/mod.ts)
![Deno test](https://github.com/maldan/denolib-extend-array/workflows/Deno/badge.svg)

Extend standard js array with this module.

## Full documentation

Go here - https://doc.deno.land/https/deno.land/x/earray/mod.ts

## How to import

```ts
import { EArray } from "https://deno.land/x/earray@1.0.0/mod.ts";
```

## Example

```ts
// Average value
EArray([1, 2]).avg(); // 1.5

// Sum
EArray([1, 2]).sum(); // 3

// Remove duplicates
EArray([1, 1, 2, 2, 3]).unique(); // [1, 2, 3]

// Random shuffle
EArray([1, 2, 3]).shuffle(); // ~[3, 1, 2]?
EArray([1, 2, 3]).shuffle(); // ~[1, 3, 2]?

// Delete
EArray([1, 2, 3]).delete(1); // [2, 3]
EArray([1, 2, 3]).delete(1, 3); // [2]
EArray([1, 1, 1]).delete(1); // [1, 1]
EArray([1, 1, 1, 3]).deleteAll(1); // [3]

// Check contains
EArray([1, 2, 3]).contain(1); // true
EArray([1, 2, 3]).contain(1, 2); // true
EArray([1, 2, 3]).contain(1, 5); // false
```

## All function list

-   avg
-   sum
-   gap
-   extractField
-   delete
-   deleteAll
-   last
-   clear
-   unique
-   shuffle
-   contain
