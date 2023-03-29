=begin 
 An isogram is a word that has no repeating letters, consecutive or non-consecutive.
 Implement a function that determines whether a string that contains only letters is an isogram.
 Assume the empty string is an isogram. Ignore letter case.
=end

def isogram(word)
  !(word.downcase.split('').uniq.join.length != word.length)
end

puts isogram 'moOse'
puts isogram 'isogram'
puts isogram 'anagram'
puts isogram 'Betray'
