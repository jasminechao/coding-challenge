require "sinatra/base"
require "pry-byebug"
require "better_errors"

class MyApp < Sinatra::Base
  get '/' do
    @apiKey  = ENV['GOOGLE_API_KEY']
    erb :index
  end

  configure do
    set :app_file, __FILE__
  end

end
