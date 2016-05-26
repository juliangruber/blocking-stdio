module.exports = function () {
  var streams = [process.stdout, process.stderr];
  streams
    .filter(function (stream) {
      return stream._handle && stream._handle.setBlocking;
    })
    .forEach(function (stream) {
      stream._handle.setBlocking(true);
    });
};
