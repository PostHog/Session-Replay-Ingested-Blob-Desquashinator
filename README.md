# Session Replay Ingested Blob Desquashinator

This is a tool to help you extract the contents of a blob that has been ingested by Session Replay. For debugging purposes, you may need to download a session blob from S3.

The contents of the blobs are gzip encoded to make them human-readable this tool lets you unzip those contents into a new file

### What?! How?!

```
pnpm i
pnpm run build
node unzip-text.js /Users/paul/Downloads/1682519549488 output.txt
```

replacing `/Users/paul/Downloads/1682519549488` with the actual path to the file you want to unzip and `output.txt` with the path to the file you want to write the unzipped contents to.
