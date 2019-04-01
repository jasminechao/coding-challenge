require_relative '../../coding-challenge/app.rb'
require_relative '../test/test_helper'
require 'test/unit'
require 'rack/test'

class MyAppTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def app
    MyApp.new
  end

  def test_root
    get '/'
    assert last_response.ok?
  end
end
