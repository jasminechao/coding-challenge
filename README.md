This is the source code for the Asana Rebel coding challenge.

What's inside?
--------------

* Modular Sinatra app using ruby
* Minitest and Rack-test for unit-level and routes tests
* Rakefile, Gemfile, .gitignore

Structure Decision
------------------

I chose Sinatra to tackle this challenge because it is known for its minimal effort in creating web apps. While I have more experience in building Rails apps, Sinatra was better suited for the challenge. The challenge gave me an opportunity to think more carefully about the architecture and tooling.

Design Decision
------------------

A simple form seemed suitable for the GET request, as well as a dedicated space to insert the properly formatted address from the Google Maps API.

Setup
-----

Clone the repo

    git clone git@github.com:jasminechao/coding-challenge.git

Run the server

    shotgun

Go to [http://127.0.0.1:9393](http://127.0.0.1:9393) (you may need to reload)
