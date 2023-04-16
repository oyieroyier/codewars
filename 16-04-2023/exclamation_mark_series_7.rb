=begin

 Remove words from the sentence if they contain exactly one exclamation mark.
 Words are separated by a single space, without leading/trailing spaces.

Examples
 remove("Hi!") === ""
 remove("Hi! Hi!") === ""
 remove("Hi! Hi! Hi!") === ""
 remove("Hi Hi! Hi!") === "Hi"
 remove("Hi! !Hi Hi!") === ""
 remove("Hi! Hi!! Hi!") === "Hi!!"
 remove("Hi! !Hi! Hi!") === "!Hi!"


=end

def remove(s)
  s
    .split(' ')
    .map { |word| word.count('!') == 1 ? nil : word }
    .compact
    .join(' ')
end
