class ApplicationController < ActionController::Base
  layout 'application'

  def portfolio 
  end

  def blog 
  end

  def experience 
  end

  def contact 
  end
  
  class BrowserIsIE6OrLower < Exception; end;
  
end
