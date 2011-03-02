class ErrorsController < ApplicationController
  def routing
   render :file => "#{Rails.root}/public/404.html", :status => 404, :layout => false
  end
  
  # rescue_from ActiveRecord::RecordNotFound,   :with => :render_404
  # rescue_from ActionController::RoutingError, :with => :render_404

  # rescue_from Exception, :with => :render_500 
  
end