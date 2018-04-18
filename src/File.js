const path = require('path');


class File {

  constructor(path, data) {
    if (typeof path === 'object') {
      data = path.data;
      path = path.path;
    }
    this.path = path;
    this.data = data;
  }

  get name() {
    return path.basename(this.path);
  }

  get dir() {
    return path.dirname(this.path);
  }

  get file() {
    return this.data;  // alias File.data to File.file
  }

}


module.exports = File;
