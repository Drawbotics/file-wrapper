# File Wrapper

A small class wrapping a node file to provide some common fields.


## Usage Example

```javascript
const fs = require('fs-extra');
const File = require('file-wrapper');


async function main() {
  const filePath = '/folder/file.txt';
  const fileData = await fs.readFile(filePath);

  const file = new File(filePath, fileData);

  console.log(file.name);  // file.txt
  console.log(file.dir);   // /folder
  console.log(file.data);  // file contents
  console.log(file.path);  // /folder/file.txt
}
```


## LICENSE

MIT. See [LICENSE](LICENSE).
