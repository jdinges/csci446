class Player
  @health
  @hitWall
  def play_turn(warrior)
    #puts"health = #{@health}\nwHealth = #{warrior.health}\n"
    #puts"backward = #{warrior.feel(:backward)}\n"
    #puts"forward = #{warrior.feel}\n"
    if warrior.feel(:backward).empty? && warrior.feel.empty?
      
      if taking_damage?(warrior)
        
        if warrior.health < 9
          warrior.walk!(:backward)
        else
          warrior.walk!
        end
        
      elsif @health < 20
        warrior.rest!
      elsif @hitWall
        warrior.walk!
      else
        warrior.walk!(:backward)
      end
      
    elsif "#{warrior.feel(:backward)}".eql? "wall"
      puts"HIT A MOTHEFUCKING WALL!"
      @hitWall = true
      warrior.walk!
      
    elsif warrior.feel.captive? 
      warrior.rescue!
      
    elsif warrior.feel(:backward).captive?
      warrior.rescue!(:backward)
      
    else
      warrior.attack! 
    end
    
    @health = warrior.health
  end
  
  def taking_damage?(warrior)
    if !@health
      @health = warrior.health
    end
    
    if @health > warrior.health
      return true
    else
      return false
    end
    
  end
  
end
