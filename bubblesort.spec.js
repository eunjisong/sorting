describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array of 1', function(){
        expect(bubbleSort([1])).toEqual([1]);
    });

    it('handles an unsorted array', function(){
        expect(bubbleSort([17,12,1,23,98])).toEqual([1,12,17,23,98]);
    });
});