# jsxs
A collection of tools and shortcuts for augmenting your JavaScript programming experience

## Usage
Start a REPL:
```
npm start

jsxs>
```

## Shortcuts
*In life there are no shortcuts. Luckily, if JavaScript is your life, this is no longer the case.*
### Aliases for all your favorite js built-ins
```
// Object
  const o = {}
  keys(o) => Object.keys(o) 
  values(o) => Object.values(o)
  entries(o) => Object.entries(o) 
  
  assign(o, ...args) => Object.assign(o, ...args) 
  create(o) => Object.create(o)
  
  freeze(o) => Object.freeze(o) 
  seal(o) => Object.seal(o) 
  preventExtensions(o) => Object.preventExtensions(o)

  defineProperty => Object.defineProperty
  defineProperties => Object.defineProperties
  getProto => Object.getPrototypeOf
  setProto => Object.setPrototypeOf
  
// Math
  max(1,2,3) => Math.max(1,2,3)
  min([3,2,1]) => Math.min(3,2,1)
  
  random => Math.random
  floor => Math.floor
  ceil => Math.ceil
  round => Math.round
  
// Custom
  Object.spread(o) => ({ ...o })
  Array.rest(iterable) => [...iterable]
  Array.range(3) => [0, 1, 2]
  Array.range(1, 4) => [1, 2, 3]
  Array.range(1, 10, 2) => [1, 3, 5, 7, 9]
  Object.fromEntries([['x', 1], ['y', 2]]) => { 'x':1, 'y':2 }
```
## Mods
### All the method chains you want!
objects:
```
const { keys, values, entries } = require('jsxs/mods')
const o = { x:1, y:2, z:3 }
o.keys() // ['x', 'y', 'z']
o.values() // [1, 2, 3]
o.entries() // [['x', 1], ['y', 2], ['z', 3]]
```
arrays:
```
const { take, skip, distinct } = require('jsxs/mods')
let a = [0, 1, 2, 1, 0]
a.take(3) // [0, 1, 2]
a.skip(2) // [2, 1, 0]
a.distinct() // [0, 1, 2]
```
sets:
```
const { set } = require('jsxs')
const { union, intersect, diff } = require('jsxs/mods')
let a = set(1,2,3)
let b = set(3,4,5)
a.union(b) // set(1,2,3,4,5)
a.intersect(b) // set(3)
a.diff(b) // set(1,2)
```
## Imports
### Rudimentary ES6 import syntax supported in REPL
*Converts imports to CommonJS syntax*
```
import './myFile'
import {x, y} from './myFile'
import {varX as aliasX, varY as aliasY} from './fileName'
import * as myModule from './fileName'
```

# And much more to come!
