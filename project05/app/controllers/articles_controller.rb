class ArticlesController < ApplicationController
  # GET /articles
  # GET /articles.json
  
  before_filter :load_authors, :only => [:edit,:new, :update]
  
  def index
    #@articles = Article.all
    @articles = Article.paginate(:page => params[:page], :per_page => 10)
    
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @articles }
    end
  end

  # GET /articles/1
  # GET /articles/1.json
  def show
    @article = Article.find(params[:id])
    
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @article }
    end
  end

  # GET /articles/new
  # GET /articles/new.json
  def new
    @article = Article.new
    
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @article }
    end
  end

  # GET /articles/1/edit
  def edit
    @article = Article.find(params[:id])
    session[:return_to] ||= request.env['HTTP_REFERER']
  end

  # POST /articles
  # POST /articles.json
  def create
    @article = Article.new(params[:article])
    @article.edit_count = 0
    @article.date_created = Time.now.in_time_zone('Arizona').to_date
    respond_to do |format|
      if @article.save
        format.html { redirect_to @article, notice: 'Article was successfully created.' }
        format.json { render json: @article, status: :created, location: @article }
      else
        format.html { render action: "new" }
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /articles/1
  # PUT /articles/1.json
  def update
    @article = Article.find(params[:id])
    Article.increment_counter(:edit_count, @article.id)
    
    respond_to do |format|
      if @article.update_attributes(params[:article])
        format.html { redirect_to session[:return_to], notice: 'Article was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /articles/1
  # DELETE /articles/1.json
  def destroy
    @article = Article.find(params[:id])
    @article.destroy

    respond_to do |format|
      format.html { redirect_to articles_url }
      format.json { head :no_content }
    end
  end
  
  private
  
    def load_authors
      @authors = Author.all.collect
    end
end
