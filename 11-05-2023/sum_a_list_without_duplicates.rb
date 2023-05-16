=begin
 Please write a function that sums a list, but ignores any duplicate items in the list.

 For instance, for the list [3, 4, 3, 6] , the function should return 10.

=end

def sum_no_duplicates(l)
  obj = {}
  arr = []

  l.each { |i| obj[i] ? obj[i] += 1 : obj[i] = 1 }

  obj.each { |key, value| value == 1 ? arr << key : 0 }

  arr.reduce(:+)
end

=begin

p sum_no_duplicates([3, 4, 3, 6])
p sum_no_duplicates([1, 1, 2, 2, 3])
p sum_no_duplicates([10, 0, 6, 2, 10, 8, 8, 5])

=end

# This answer is yet to be submitted.
# Fails a few edge case tests.
