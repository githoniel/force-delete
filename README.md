# force-delete

force delete files or directories blocked by other process in Windows

PS: Only works in 32 and 64 bit Windows from XP

## Install

```
npm i fs-force-delete --save
```

## Example

```js
const forceDelete = require('fs-force-delete')

forceDelete('C:\\git\\testFilePath')
```

## API

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|[**`deletePath`**]|`{string}`| |the path to a file, a folder or a leading part of the path. E.g. K:, C:\Program Files, C:\Docume. /unlock or -u - unlocks the file_or_folder_path. It closes all handles to the files\folder that starts from file_or_folder_path and unloads .dlls which are residing in the files\folder that starts from file_or_folder_path.|
|[**`option`**]|`{object}`| `{}` |option|
|[**`kill`**]|`{boolean}`| `false` |terminates all the apps which are launched from path.|
|[**`staticPath`**]|`{string}`| `undefined` |path to this package's `/static`, use this when using webpack in electron.|

## Known Issue

1. When using without UAC, it will request UAC by GUI. If you refuse the UAC request, It still get delete success
2. When using without UAC, it will request UAC by GUI. If you grant the UAC request, It will return before the file is deleted. It will take about 1-2 second.
