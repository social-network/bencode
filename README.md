# bencode-esm

The code is basically a copy of [node-bencode](https://github.com/webtorrent/node-bencode) , but written in ESM first manner (import / export) , as well as with its own types for typescript.

I also plan to clean up some functions to remove stuff which doesn't need to be exposed. Initially I will remove all tests so I can alreayd start to make use of it in my other projects, will probably add them back before releasing v1 of this repo.

# Thanks

Thanks to the original authors Mark Schmale & Jonas Hermsmeier, as well as [the other contributors](https://github.com/webtorrent/node-bencode/blob/master/CONTRIBUTORS) to the node-bencode project.