var App = React.createClass({displayName: "App",

  getInitialState: function(){
  		return {
  			contents: [
  				{
  					text: "How often do you share the results results of a personality quiz?", 
  					options: [
  						{ text: "Almost always", result: {extr: 10} },
  						{ text: "Sometimes", result: {extr: 5} },
  						{ text: "Basically never", result: {extr: 0} }
  					] 
  				},
  				{
  					text: "Do you ever tilt your answers to get the result you want, or are you scrupulously honest?",
  					options: [
  						{ text: "I tilt all the time", result: { } },
  						{ text: "Maybe a little", result: {} },
  						{ text: "I'm always honest", result: {know: 10} }
  					]
  				},
  				{
  					text: "How often do you take personality quizes?",
  					options: [
  						{ text: "Almost every time I see them", result: {bord: 10} },
  						{ text: "Fairly frequently", result: {bord: 5} },
  						{ text: "Basically never", result: {} } 
  					]	
  				},
  				{
  					text: "After getting an unanticipated answer to a quiz, what would you more likely think?",
  					options: [
  						{ text: "\"Hm, maybe there are things about myself I don't understand yet.\"", result: {know: 5}},
  						{ text: "\"What a dumb quiz.\"", result: {extr: 5} },
  						{ text: "This is a dumb question", result: {bord: 5}}
  					]
  				},
  				{
  					text: "Would you characterize what you are doing now as \"Wasting time\"?",
  					options: [
  						{ text: "Yep", result: {} }, 
  						{ text: "Nah", result: {} }
  					]
  				}

  			],
  			display: {
  				text: "There are online personality quizes that can help you find out if you are" + 
          "<ul><li>an INTJ,</li><li>Hermione Granger <i class=\"fa fa-magic\"></i>,</li>" +
  				"<li>the color <span style=\"color: orange\">orange</span>,</li><li><b>Darth Vader</b>,</li>" + 
          "<li>or a Ford Fiesta <i class=\"fa fa-car\"></i>.</li></ul>  But what of the important question in life?</br>What kind of a taker of online " + 
  				"quizes are you?</br>Find out now!",
  				again: false
  			}
  		}
  }, 

  startQuiz: function(){
  	this.setState({display: null});
  	console.log("!");

  },

  finished: function(values){
  	var self = this;
  	var result = values.reduce(function(building, answerIndex, questionIndex){
  		console.log(building)
  		return Object.keys(building).reduce(function(ret, key){
  			console.log(self.state, questionIndex, answerIndex)
  			var m = self.state.contents[questionIndex].options[answerIndex].result;
  			ret[key] = building[key] + ( (key in m) ? m[key] : 0);
  			return ret;
  		}, {});
  	}, {extr: 0, know: 0, bord: 0} );
  	
  	var choice = Object.keys(result).reduce(function(best, cur){
  		return (result[best] >= result[cur]) ? best : cur ;
  	}, Object.keys(result)[0]); 
 
  	if(choice == "know"){
  		self.setState({display: {
  			text: "You are most motivated by the desire for <b>self knowledge</b> when you take a quiz.</br>"+
        "That's laudable... although you're almost certainly looking in the wrong place. " +
  			"Perhaps you should consider looking elsewhere.",
  			again: true
  		}});
  	}else if(choice == "bord"){
  		self.setState({display: {
  			text: "You are most motivated by <b>boredom</b> when you take a quiz.</br>Well, at least you're realistic." +
  			"",
  			again: true, 
  		}});
  	}else if(choice == "extr"){
  		self.setState({display: {
  			text: "You are most motivated by <b>extroversion</b> or the desire to communicate with others" + 
        "to others when you take a quiz.</br>" + 
        "That's great, although hopefully you have frequent, more meaningful communications",
  			again: true 
  		}});
  	}

  },

  render: function(){

	  if (this.state.display !== null){
	    return (    
	      React.createElement("div", {id: "app", className: "container"}, 
	      	React.createElement(Splash, null), 
	        React.createElement(Display, {display: this.state.display, buttonClick: this.startQuiz})
	      )
	    )
	  }else{
	      return ( 
		    React.createElement("div", {id: "app", className: "container"}, 
		     React.createElement(Splash, null), 
		     React.createElement(Quiz, {contents: this.state.contents, finished: this.finished})
		    )
	    )
	  }
  }
});