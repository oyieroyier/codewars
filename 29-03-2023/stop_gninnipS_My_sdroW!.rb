=begin 
 Write a function that takes in a string of one or more words,
 and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata).
 Strings passed in will consist of only letters and spaces.
 Spaces will be included only when more than one word is present.
=end

def spin_words(string)
  string.split(' ').map { |i| i.length < 5 ? i : i.reverse }.join(' ')
end

puts spin_words 'Stop Spinning My Words'
