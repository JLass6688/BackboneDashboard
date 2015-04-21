$(document).ready(function(event) {



//==========================================
//				Third Rows View
//==========================================
	var ThirdCardView = Backbone.View.extend({
		tagName: "article",
		className: "block-third",
		template: _.template("<h3> <%= title %> </h3> <p> <%= message %> </p><span class='close'>(x) dismiss</span>"),
		initialize: function(data){
			this.render(data);
		},
		render: function(data){
			var data = data;
			this.$el.html(this.template(data));
			var row = $('.row')[1];
			$(row).append(this.$el);
		}
	})

//==========================================
//			Populating Third Rows
//==========================================
	var data = {title: "Card 1", message: "This is another card."};
	var box1 = new ThirdCardView(data);

	data = {title: "Card 2", message: "Yet another card yaaaa"};
	var box2 = new ThirdCardView(data);

	data = {title: "Card 3", message: "Wait, is that what I think it is? Another card yaaaaa!"};
	var box3 = new ThirdCardView(data);




//==========================================
//			Quarter Row View
//==========================================
	var QuarterCardView = Backbone.View.extend({
		tagName: "article",
		className: "block-quarter",
		template: _.template("<h3> <%= title %> </h3> <p> <%= message %> </p><span class='close'>(x) dismiss</span>"),
		initialize: function(data){
			this.render(data);
		},
		render: function(data){
			var data = data;
			this.$el.html(this.template(data));
			var row = $('.row')[3];
			var red = Math.floor(Math.random() * 256);
			var green = Math.floor(Math.random() * 256);
			var blue = Math.floor(Math.random() * 256);
			$(this.$el).css("background-color", "rgb("+red+","+green+","+blue+")");
			$(row).append(this.$el);
		}
	})

//==========================================
//			Populating Quater Rows
//==========================================
	var data = {title: "Card 1", message: "This is another card."};
	var box1 = new QuarterCardView(data);

	data = {title: "Card 2", message: "Yet another card yaaaa"};
	var box2 = new QuarterCardView(data);

	data = {title: "Card 3", message: "Wait, is that what I think it is? Another card yaaaaa!"};
	var box3 = new QuarterCardView(data);

	data = {title: "Card 4", message: "Wait, is that what I think it is? Another card yaaaaa!"};
	var box4 = new QuarterCardView(data);




//==========================================
//			Half Row View (version1)
//==========================================
	var HalfCardView = Backbone.View.extend({
		tagName: "article",
		className: "block-half",
		template: _.template("<h3> <%= title %> </h3> <p> <%= message %> </p><span class='close'>(x) dismiss</span>"),
		initialize: function(data){
			this.render(data);
		},
		render: function(data){
			var data = data;
			this.$el.html(this.template(data));
			var row = $('.row')[2];
			$(row).append(this.$el);
		}
	})

//==========================================
//			Populating Half Rows (version 1)
//==========================================
	var data = {title: "Card 1", message: "This is another card."};
	var box1 = new HalfCardView(data)

//==========================================
//			Half Row View (version2)
//==========================================
	var HalfCardView2 = Backbone.View.extend({
		tagName: "article",
		className: "block-half",
		template: _.template("<h3> <%= title %> </h3> <p> <%= message %> </p><span class='close'>(x) dismiss</span>"),
		initialize: function(data){
			this.render(data);
		},
		render: function(data){
			var data = data;
			this.$el.html(this.template(data));
			var row = $('.row')[2];
			$(this.$el).css("background-color", "blue");
			$(row).append(this.$el);
		}
	})

//==========================================
//			Populating Half Rows (version 2)
//==========================================

	var data = {title: "Card 2", message: "Yet another card yaaaa"};
	var box2 = new HalfCardView2(data);




//==========================================
//			Logo
//==========================================
	var LogoCardView = Backbone.View.extend({
		tagName: "h1",
		className: "logo",
		template: _.template("<%= logo %>"),
		initialize: function(data){
			this.render(data);
		},
		render: function(data){
			var data = data;
			this.$el.html(this.template(data));
			var row = $('.row')[0];
			$(row).append(this.$el);
		}
	})

//==========================================
//			Populating Logo Card
//==========================================
	var data = {logo: "Logo Here"};
	var box1 = new LogoCardView(data);



//==========================================
//			Models
//==========================================
	var cardModel = Backbone.Model.extend({
		initialize: function() {
			this.fetch();
			console.log("Hey, a card is here!");
		}
	});

	var cardList = Backbone.Collection.extend({
		model: cardModel,
		url: '/api/cards',
		initialize: function() {
			console.log('Collection is a go!');
			this.fetch();
		}
	});

	var listOfCards = new cardList();


});








