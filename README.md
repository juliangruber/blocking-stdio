
# blocking-stdio

Since node 6, stdio is non blocking by default. Besides having several advantages, one obvious disatvantage is that sometimes the program exits before all output has been printed. This module changes it back to blocking!

## Usage

Include this at the top of your process:

```js
require('blocking-stdio')();
```

## Warning

Do __NOT__ include this in a library. This module modifies global state and thus should __ONLY__ be used in an application. Don't modify global stuff in libraries, people.

## Kudos

Thanks @isaacs! [https://twitter.com/izs/status/732317861067153408](https://twitter.com/izs/status/732317861067153408).


## License

  MIT
