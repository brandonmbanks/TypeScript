//// [asyncArrowFunction8_es6.ts]

var foo = async (): Promise<void> => {
  var v = { [await]: foo }
}

//// [asyncArrowFunction8_es6.js]
var foo = () => __awaiter([this, Promise], function* () {
    var v = { [yield ]: foo };
});
