=begin 

 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 The sum of these multiples is 23.

 Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
 Additionally, if the number is negative, return 0(for languages that do have them).
 Note: If the number is a multiple of both 3 and 5, only count it once.

=end

def sol(num)
  num_array = []

  if num.negative?
    0
  else
    (1...num).to_a.map do |i|
      (i % 3).zero? || (i % 5).zero? ? num_array << i : num_array
    end
  end

  num_array.sum
end

puts sol 10

# Second solution
def solution(number)
  (1...number).select { |i| (i % 3).zero? || (i % 5).zero? }.inject(:+)
end

puts solution 10
