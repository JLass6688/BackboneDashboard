var yodaModel = Backbone.Model.extend();

var jake = new yodaModel();

jake.url = 'https://yoda.p.mashape.com/yoda';

jake.fetch();