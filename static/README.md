# LockHunter

It is a free tool to delete files blocked by something you do not know. LockHunter is useful for fighting against malware, and other programs that are blocking files without a reason. Unlike other similar tools it deletes files into the recycle bin so you may restore them if deleted by mistake.

[Home](https://lockhunter.com/index.htm)

## Command line options

LockHunter can be used from the command line using the following syntaxis:
```
LockHunter.exe [/unlock] [/delete [/delperm]] [/kill] [/silent] [/exit] [file_or_folder_path]
```

- file_or_folder_path - the path to a file, a folder or a leading part of the path. E.g. K:, C:\Program Files, C:\Docume.
/unlock or -u - unlocks the file_or_folder_path. It closes all handles to the files\folder that starts from file_or_folder_path and unloads .dlls which are residing in the files\folder that starts from file_or_folder_path.

- /delete or -d - unlocks and deletes the file_or_folder_path. If file_or_folder_path is a partial name of a path (e.g. "c:\Docu" is a partial name of "C:\Documents and Settings"), all the files and folders that starts from file_or_folder_path will be deleted. Note, if there's processes launched from file_or_folder_path they will prevent to delete the folder\file. Use /kill parameter to forcibly terminate such apps.

- /delperm or -dp - an optional parameter for /delete asking the program to delete the file_or_folder_path permanently bypassing the recycle bin. Use it only with /delete parameter, e.g. LockHunter.exe /delete /delperm c:\somefile.exe

- /kill or -k - terminates all the apps which are launched from file_or_folder_path. If file_or_folder_path is a partial name of a path (e.g. "c:\Docu" is a partial name of "C:\Documents and Settings"), all the processes which launch paths start from file_or_folder_path string will be terminated.

- /silent or -sm - no GUI will be displayed. The program starts in silent mode, does one of the passed commands (e.g. /unlock) and terminates.

- /exit or -x - exits automatically when all actions are done. This option might be required only when you wish to see the GUI, all displayed warnings but do not wish to press the button "exit" manually.

Notes:

1. In case of error (e.g. a file cannot be deleted) the program returns non-zero error code, otherwise it returns zero exit code. Find list of error codes here:
```
0 - operation completed successfully, a file was deleted or unlocked
1 - cannot delete or unlock a file
2 - technical error occured while processing operation
```
2. If the file_or_folder_path part of command line is not specified all other options will be ignored.
3. There's no need to use /unlock and /delete commands at the same time since /delete does unlocking and deleting the specified file or folder path.
4. /kill can be used with both /unlock and /delete commands in order to terminate processes launched from file_or_folder_path if any. Beware you may loose your data if a killed program contain unsaved information when use this option!