#!/usr/bin/ruby

class Troll
  attr_accessor :ugliness, :smelliness, :strength, :grunt
  
  def initialize
    @grunt = "UNGAH"
  end
  
  def speak
    42.times {|i| puts "#{@grunt}"}
  end
  
  def reverse
    puts"#{@grunt.reverse}"
  end
  
  def self.propegate
    t = Troll.new
    t.grunt = "eegah"
    t
  end
end

t = Troll.new
#t.speak
#t.reverse

t2 = Troll.propegate
t2.reverse

array = %w(the next time you see me I won't be the same person you once knew)

array.each {|x| puts x }