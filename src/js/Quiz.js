var Quiz = React.createClass({

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
              <div>
	      			  <input type="button" className="button-primary" onClick={self.advanceQuiz(index)} value={option.text}></input>  
              </div>
	      			);
	      	});
	    return ( 
		    <div>
          <div className="row">
            <div className="one column">&nbsp;</div>
            <div className="ten columns">
              <h5>{current.text}</h5> 
            </div>
            <div className="one column">&nbsp;</div>
          </div>
          <div className="row">
            <div className="one column">&nbsp;</div>
            <div className="ten columns">
              {options}
            </div>
            <div className="one column">&nbsp;</div>
          </div>
		     
		    </div>
    	)
	}else{
		return (
			<div>
			</div>
		)
	}
  }
});