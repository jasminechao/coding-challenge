require "sinatra"
require "sinatra/reloader" if development?
require "pry-byebug"
require "better_errors"
configure :development do
  use BetterErrors::Middleware
  BetterErrors.application_root = File.expand_path('..', __FILE__)
  set :public_folder, File.expand_path('../public', __FILE__)
end

get '/' do
  erb :index
end
