# jsxs
A collection of tools and shortcuts for augmenting your JavaScript programming experience

# Shortcuts
*In life there are no shortcuts. Luckily, if your life is JavaScript, this is no longer the case.*

Before:
```
  Math.round(Math.random())
  Array(10).fill(null).map((x, i) => i+1)
  array.reduce((a,b) => a+b, 0)
  array.reduce((a,b) => a+b, 0) / array.length
  
  Object.keys(o)
  Object.getOwnPropertyNames(o.__proto__)
  Object.assign({}, ...args)
  Object.defineProperty(o, 'prop', {})
  Object.setPrototypeOf(obj, proto)
```
After:
```
  round(random())
  range(1, 10)
  sum(array)
  avg(array)
  
  o.keys()
  o.properties()
  assign({}, ...args)
  defineProperty(o, 'prop', {})
  setProto(obj, proto)
  
```

# And much more!
