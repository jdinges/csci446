class Player
  @health
  def play_turn(warrior)
    if warrior.feel.empty?
      puts"health = #{@health}\nwHealth = #{warrior.health}\n"
      if taking_damage?(warrior)
        warrior.walk!
      elsif @health < 12
        warrior.rest!
      else
        warrior.walk!
      end
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
