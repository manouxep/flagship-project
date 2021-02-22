# react-native-murmurhash

An optimized React Native implementation of the MurmurHash algorithms.

## Note

This lib is an adjustment of two other project:

- [murmurhash-js](https://github.com/garycourt/murmurhash-js) made by Gary Court
- [node-murmurhash](https://github.com/perezd/node-murmurhash) made by Derek Perez

## Getting started

Install the npm module:

```
npm install react-native-murmurhash
```

Import in your react native app

```
import * as murmurhash from 'react-native-murmurhash';
```

Use it

```js
// generates a v2 hash
murmurhash.v2("some input", "some seed value (optional)");

// generates a v3 hash
murmurhash.v3("some input", "some seed value (optional)");
```

It takes a string as first argument. Second argument is optional and takes a number.

## More about murmur hash algorithm

- [MurmurHash Homepage](http://sites.google.com/site/murmurhash/)
- [Wikipedia Entry on MurmurHash](http://en.wikipedia.org/wiki/MurmurHash)

## License

The MIT License (MIT)

Copyright (c) 2020 Gary Court, Derek Perez, Emilien Domenge-Heritier

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
