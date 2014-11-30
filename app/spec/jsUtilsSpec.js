describe('jsUtils', function() {
    it("contains both elements", function() {
    	var first = [{name: 'John'}];
    	var second = [{name: 'Mary'}];
        expect(merge(first, second)).toContain({name:'John'});
        expect(merge(first, second)).toContain({name:'Mary'});
    });
});