set cache as a HashMap
set tempArray
get(key): if cache contains this key              // O(1)
             return the relative value
          else
             return -1
put(key, value, weight): if cache contains this key              // O(1)
                             replace the element(node) with the new value
                         else
                             if cache is not full                // O(1)
                                add new node
                             else
                                foreach node in cache : calculate score following instruction                   // O(n)
                                                         if tempArray is empty -> push node's key with the score
                                                         else if node'score smaller than the first element in tempArray
                                                                -> push node's key and score to be the first element in tempArray
                                delete the node in cache with the key in the first element in tempArray
                                add new node
                                set tempArray to be an empty array

The computational complexity of get(key) is O(1)
The computational complexity of put(...) is O(n), n is the size of cache.