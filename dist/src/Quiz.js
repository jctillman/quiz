var Quiz = React.createClass({displayName: "Quiz",

  getInitialState: function(){
  	return { 
  		current: 0, 
  		values: this.props.contents.map(function(n){return 0;})
  	}
  },

  advanceQuiz: function(index){
  	var self = this;
  	return function(){
  		var values = self.state.values;
  		var current = self.state.current;
  		values[self.state.current] = Math.min(index, self.state.values.length-1);
  		current++;
  		self.setState({
  			current: current,
  			values: values
  		});
  		if (current == values.length){
  			self.props.finished(values);
  		}
  	}
  	
  },

  render: function(){
  	var self = this;
  	if (this.state.current < this.state.values.length){
	  	var current = this.props.contents[this.state.current]
	  	var options = current.options.map(function(option,index){
	      		return (
              React.createElement("div", null, 
	      			  React.createElement("input", {type: "button", className: "button-primary", onClick: self.advanceQuiz(index), value: option.text})
              )
	      			);
	      	});
	    return ( 
		    React.createElement("div", null, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "one column"}, " "), 
            React.createElement("div", {className: "ten columns"}, 
              React.createElement("h5", null, current.text)
            ), 
            React.createElement("div", {className: "one column"}, " ")
          ), 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "one column"}, " "), 
            React.createElement("div", {className: "ten columns"}, 
              options
            ), 
            React.createElement("div", {className: "one column"}, " ")
          )
		     
		    )
    	)
	}else{
		return (
			React.createElement("div", null
			)
		)
	}
  }
});