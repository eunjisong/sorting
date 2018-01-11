describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect(split([11,22])).toEqual([[11],[22]]);
    });
    it('handles an empty array', function(){
        expect(split([])).toEqual([]);
    })
    it('handles odd array', function(){
        expect(split([1,2,3])).toEqual([[1,2],[3]])
    })
  });

  describe('Merge function', function(){
    it('is able to handle single-length arrays',function(){
      expect(merge([2],[1])).toEqual([1,2]);
    })

    it('is able to handle an empty array',function(){
      expect(merge([])).toEqual("you need two arrays to run this function!");
    })

    it('is able to merge two sorted arrays into one sorted array', function(){
      //take the first element from the first two available arrays, compare them, and put them together.
        expect(merge([1,3,5],[2,4])).toEqual([1,2,3,4,5]);
    });
  });

  describe('MergeSort function', function(){
    it('splits an array into an array of single-digit arrays', function(){
      //run Split recursively until all arrays have a length of 1
        expect(mergeSort([1,2,3,4,5])).toEqual([1],[2],[3],[4],[5]);
    });
  });

