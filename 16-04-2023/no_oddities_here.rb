=begin

 Write a small function that returns the values of an array that are not odd.

 All values in the array will be integers. Return the good values in the order they are given.

=end

def no_odds(values)
  values.select(&:even?)
end
