# Prototypes — Study Guide

JavaScript inheritance is **not** class-copying. Every object has a link to another object (its **prototype**). When you read a property, JS walks that chain until it finds the property or hits `null`.

Study order: read a section here → run the matching file:

```bash
node 2.prototypes/1.inheritance.js
```

Lesson 5 deepens what lesson 3 already uses (`new` + `.prototype`). The numbering is fine; treat 5 as “how `new` wires the chain.”

---

## Mental model

```
circle instance  →  Circle.prototype  →  Object.prototype  →  null
```

**Property lookup:**

1. Look on the object itself (own properties)
2. If missing, look on its prototype
3. Keep going up until found, or reach `null`

That walk is prototypical inheritance. Lessons 1–8 are the same idea from different angles.

---

## Cheat sheet

| API | What it does |
|---|---|
| `Object.create(parent)` | New object whose prototype is `parent` |
| `Object.getPrototypeOf(obj)` | Returns the prototype object `obj` links to |
| `Constructor.prototype` | Shared object that `new Constructor()` instances inherit from |
| `obj.constructor` | Usually points back to the function that created `obj` (via `.prototype.constructor`) |
| `Object.getOwnPropertyDescriptor(obj, key)` | Flags for one own property: `writable`, `enumerable`, `configurable` |
| `Object.defineProperty(obj, key, desc)` | Create/change a property with those flags |
| `Object.keys(obj)` | Own **enumerable** keys only |
| `for...in` | Own + **enumerable inherited** keys |
| `obj.hasOwnProperty(key)` | `true` only if the key lives on `obj` itself |

**`__proto__` vs `.prototype` (easy mix-up):**

- `obj.__proto__` / `Object.getPrototypeOf(obj)` → the instance’s link to its parent object
- `Constructor.prototype` → the shared object that `new` attaches as that link

Prefer `Object.getPrototypeOf` over `__proto__` in real code.

---

## Lesson walkthrough

### 1. Inheritance — [`1.inheritance.js`](1.inheritance.js)

**Problem:** `Circle` and `Square` both define the same `draw` / `duplicate` methods. Copy-paste does not scale.

**Idea:** Put shared behavior on a parent prototype once, instead of rewriting it on every constructor.

**Try:** Notice the duplication. Ask: if there were one parent `Shape`, where would the shared methods live?

---

### 2. Prototypes and prototypical inheritance — [`2.prototypes-and-prototypical-inheritance.js`](2.prototypes-and-prototypical-inheritance.js)

**Core:** Objects inherit from other objects.

```js
const child = Object.create(parent);
// Object.getPrototypeOf(child) === parent
```

`child.toString()` is found on `parent` via the chain. `child.name` is an own property.

**Try:** Add a property on `parent` and read it from `child`. Override `toString` on `child` and call it again (own wins over inherited).

---

### 3. Multilevel inheritance — [`3.multilevel-inheritance.js`](3.multilevel-inheritance.js)

**Chain with constructors:**

```
circle → Circle.prototype → Object.prototype → null
```

- `circle.draw()` → found on `Circle.prototype`
- `circle.toString()` → found on `Object.prototype`

**Try:** Walk up with `Object.getPrototypeOf` a few times. Add `Circle.prototype.move` and call it from `circle`.

---

### 4. Property descriptors — [`4.property-descriptors.js`](4.property-descriptors.js)

Every property has flags, not just a value:

| Flag | Meaning |
|---|---|
| `writable` | Can you change the value? |
| `enumerable` | Does it show up in `for...in` / `Object.keys`? |
| `configurable` | Can you delete it or change its flags? |

Built-in methods like `Object.prototype.toString` are often **non-enumerable** — that is why `for...in` skips them.

**Try:** Make a property non-enumerable and loop with `for...in`. Re-inspect the descriptor after `defineProperty`.

---

### 5. Constructor prototypes — [`5.constructor-prototypes.js`](5.constructor-prototypes.js)

Every function has a `.prototype` object. `new Circle(1)`:

1. Creates a new object
2. Sets that object’s prototype to `Circle.prototype`
3. Runs the constructor with `this` bound to the new object

So:

```js
Object.getPrototypeOf(circle) === Circle.prototype  // true
circle.constructor === Circle                         // true (via Circle.prototype.constructor)
```

**Try:** Create another circle; both should share the same `Circle.prototype`. Log `circle.constructor` and `Circle.prototype.constructor`.

---

### 6. Prototype vs instance members — [`6.prototype-vs-instance-members.js`](6.prototype-vs-instance-members.js)

| Kind | Where it lives | Shared? |
|---|---|---|
| Instance member | Set on `this` in the constructor | No — each object has its own |
| Prototype member | On `Constructor.prototype` | Yes — one copy for all instances |

```js
c1.draw === c2.draw  // true  — same function on the prototype
c1.radius === c2.radius  // false — different instance data
```

Put **data that differs per object** on the instance. Put **shared methods** on the prototype (saves memory; one function, many objects).

**Try:** Add `Circle.prototype.move` and call it on both circles. Put a method on `this` inside the constructor and compare `c1.method === c2.method` (should be `false`).

---

### 7. Iterating instance and prototype members — [`7.iterating-instance-and-prototype-members.js`](7.iterating-instance-and-prototype-members.js)

| Tool | What you get |
|---|---|
| `Object.keys(circle)` | Own enumerable only → `["radius"]` |
| `for...in` | Own + enumerable inherited → `radius`, then `draw` |
| `hasOwnProperty("radius")` | `true` |
| `hasOwnProperty("draw")` | `false` — inherited |

**Try:** In a `for...in` loop, skip inherited keys with `hasOwnProperty`. Compare `Object.keys` with `Object.getOwnPropertyNames`.

---

### 8. Avoid extending built-in objects — [`8.avoid-extending-built-in-objects.js`](8.avoid-extending-built-in-objects.js)

**Anti-pattern:** `Array.prototype.shuffle = function () { ... }`

Why avoid it:

- Breaks assumptions other code makes about built-ins
- Future JS might add a real method with the same name
- Surprises other developers

**Better:** a plain helper (or your own subclass), not mutating `Array` / `String` / `Object`.

**Try:** Prefer `shuffle(array)` over extending `Array.prototype`. Pick another built-in you should not extend.

---

## Common confusions

**Why is `c1.draw === c2.draw` true?**  
Both look up `draw` on the same `Circle.prototype` object. One shared function.

**Why doesn’t `toString` show up in `for...in`?**  
It lives on `Object.prototype` with `enumerable: false`. Lookup still finds it when you call `obj.toString()`.

**`__proto__` vs `.prototype` again?**  
- Instance side: link from object → parent (`getPrototypeOf`)  
- Constructor side: the shared bag of methods (`Circle.prototype`)  
`new` connects them: instance’s prototype link points at `Circle.prototype`.

**Own vs inherited?**  
Own = set directly on the object (`this.radius`, or `child.name = ...`). Inherited = found only by walking the chain (`draw` on the prototype).

---

## Quick map

| File | One-liner |
|---|---|
| `1.inheritance.js` | Duplicated methods → need a shared parent |
| `2.prototypes-and-prototypical-inheritance.js` | `Object.create`; lookup walks the chain |
| `3.multilevel-inheritance.js` | `instance → .prototype → Object.prototype → null` |
| `4.property-descriptors.js` | writable / enumerable / configurable |
| `5.constructor-prototypes.js` | `new` wires instance to `Constructor.prototype` |
| `6.prototype-vs-instance-members.js` | Data on `this`; methods on `.prototype` |
| `7.iterating-instance-and-prototype-members.js` | `Object.keys` vs `for...in` vs `hasOwnProperty` |
| `8.avoid-extending-built-in-objects.js` | Don’t mutate built-in prototypes |
