// Memoized function to save the addition of numbers
const memoize = func => {
  const cache = {};
  return (...args) => {
  // console.log(cache)
     let strKey = args.join(',');
      if(!cache[strKey]){
        console.log('Adding to cache!');
        cache[strKey] = func.apply(this, args);
      } 
       console.log('Fetching from cache!');
       return cache[strKey];
   }
}

// Given reducer method
const add = (...args) => {
  return args.reduce((s, e) => {
    return s += e;
  }, 0);
}

// Returned from memoize function
const memoizedAddFunction = memoize(add);

memoizedAddFunction(1, 2, 3); // Calculated
memoizedAddFunction(1, 2, 3); // Cached
