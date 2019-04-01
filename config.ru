require File.join(File.dirname(__FILE__), 'app.rb')
require 'sinatra'
require 'sinatra/base'

if Sinatra::Base.development?
  require 'dotenv'
  Dotenv.load
  require 'byebug'
end

run MyApp
