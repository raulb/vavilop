class ApplicationController < ActionController::Base
  
  class BrowserIsIE6OrLower < Exception; end;
  
  rescue_from BrowserIsIE6OrLower,            :with => :old_browser
  
  layout 'application'

  def portfolio 
  end

  def blog 
  end

  def experience 
  end

  def contact 
  end
  
  def old_browser
    render :file => "/public/404.html", :status => 200, :layout => false
  end
  
end
