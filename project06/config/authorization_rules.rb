authorization do
  role :admin do
    has_permission_on [:games, :users], :to => [:index, :show, :new, :create, :edit, :update, :destroy]
  end
  
  role :user do
    has_permission_on :games, :to => [:index, :show, :new, :create, :edit, :update]
    has_permission_on :users, :to => [:show, :edit, :update]
  end
  
  role :guest do
    has_permission_on :games, :to => [:index, :show]
    has_permission_on :users_sessions, :to => [:index, :show, :new, :create, :edit, :update, :destroy]
    has_permission_on :users, :to => [:show, :create, :new]
  end
end