=begin  
 The marketing team is spending way too much time typing in hashtags.
 Let's help them with our own Hashtag Generator!

 Here's the deal:

 It must start with a hashtag (#).
 All words must have their first letter capitalized.
 If the final result is longer than 140 chars it must return false.
 If the input or the result is an empty string it must return false.

=end

# Submitted answer
def generateHashtag(str)
  result = []
  result << str.split(' ').map(&:capitalize)
  if result.join(' ').length.positive? && result.join.length < 140
    result.unshift('#').join('')
  else
    false
  end
end

p generateHashtag 'Hello there thanks for trying my Kata'
p generateHashtag 'Hello     World'
p generateHashtag 'code wars'
p generateHashtag 'code' + ' ' * 140 + 'wars'
p generateHashtag ' ' * 200
p generateHashtag ''
p generateHashtag 'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
