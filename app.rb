require 'bundler'
Bundler.require()


#=======================================CONNECTION
ActiveRecord::Base.establish_connection(
	:adapter => 'postgresql',
	:database => 'all_the_cards'
)


#=======================================MODELS
require './models/card'


#=======================================INDEX
get '/' do
  erb :index
end


#=======================================API ROUTES

get '/api/cards' do 

	content_type :json
	Card.all.to_json

end

get '/api/cards/:id' do 

	content_type :json
	card = Card.find(params[:id].to_i)
	card.to_json

end

post '/api/cards' do 

	content_type :json
	card = Card.create(params[:card])
	card.to_json

end

put '/api/cards/:id' do 

	content_type :json
	card = Card.find(params[:id].to_i)
	card.update(params[:card])
	card.to_json

end

patch '/api/cards/:id' do 

	content_type :json
	card = Card.find(params[:id].to_i)
	card.update(params[:card])
	card.to_json

end

delete '/api/cards/:id' do 

	content_type :json
	card = Card.find(params[:id].to_i)
	card.delete
	{message: 'Great Successss'}.to_json

end











