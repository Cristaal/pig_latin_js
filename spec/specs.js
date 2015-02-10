describe('pigLatin', function() {
  it("adds 'ay' to the end of words that start with vowels", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("moves first consonant to the end of word and adds 'ay'", function() {
    expect(pigLatin("cat")).to.equal("atcay");
  });

  it("moves the first two consecutive consonants to the end of the word and add 'ay'", function() {
    expect(pigLatin("shelter")).to.equal("eltershay")
  });

  it("moves u's that come after q's", function() {
    expect(pigLatin("quest")).to.equal("estquay")
  });
});
