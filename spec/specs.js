describe('pig', function() {
  it("adds ay to end of a word if starts with a", function() {
    expect(pig("apple")).to.equal("appleay");
  });

  it("adds ay to end of a word if starts with any vowel", function() {
    expect(pig("epple")).to.equal("eppleay");
  });

  it("takes a single consonent and moves to end of word", function() {
    expect(pig("cat")).to.equal("atcay");
  });

  it("takes 2 consonents and moves to end of word", function() {
    expect(pig("ccat")).to.equal("atccay");
  });

  it("takes 2 constanents and moves to end of word if its qu", function() {
    expect(pig("quat")).to.equal("atquay");
  });

});


describe("indexofFirstVowel", function(){
  it("returns 0 for a word that starts with a vowel", function(){
    expect(indexOfFirstVowel("apple")).to.equal(0);
  });

  it("returns 1 for a word that starts with a single constenant", function(){
    expect(indexOfFirstVowel("bapple")).to.equal(1);
  });

  

});