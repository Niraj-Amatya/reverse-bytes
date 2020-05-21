A stream of data is received in 8 bit segments (in bytes), and the order of the bytes needs to be reversed.

For example:
```
// 4 bytes
11111111 00000000 00001111 10101010
  byte1    byte2    byte3    byte4
 
// Should be reverse so that we receive:  

10101010 00001111 00000000 11111111
  byte4    byte3    byte2    byte1
```

The total number of bits will always be a multiple of 8. The input to the function is an array of bits:

reverseBytes([1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]) => [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
