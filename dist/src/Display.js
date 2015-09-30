var Display = React.createClass({displayName: "Display",
  render: function(){
  	var text = this.props.display.again ? "Take Quiz Again" : "Take Quiz";
  	if (this.props.display.again){
  		var sm = (
  				React.createElement("div", {className: "row"}, 
  					React.createElement("div", {className: "one columns"}), 
  					React.createElement("div", {className: "ten columns"}, 
  					React.createElement("a", {href: "http://twitter.com/intent/tweet?status=What Kind of a Quiz Taker are you?+someurl.html"}, 
  						React.createElement("i", {className: "fa fa-twitter-square fa-2x"})
  					), "   ", 
  					React.createElement("a", {href: "http://www.facebook.com/share.php?u=someurl.html&title=What Kind of a Quiz Taker are you?"}, 
  						React.createElement("i", {className: "fa fa-facebook-official fa-2x"})
  					), "   ", 
  					React.createElement("a", {href: "https://plus.google.com/share?url=someurl.html"}, 
  						React.createElement("i", {className: "fa fa-google-plus-square fa-2x"})
  					), "   ", 
  					React.createElement("hr", null)
  					), 
  					React.createElement("div", {className: "one columns"})
  				) 
  				)
  	}else{
  		var sm = React.createElement("hr", null)
  	}

    return (  
      React.createElement("div", null, 
	      React.createElement("div", {className: "row"}, 
	       	React.createElement("div", {className: "one column"}, " "), 
	      	React.createElement("div", {className: "ten columns"}, 
	       		React.createElement("h5", {dangerouslySetInnerHTML:  {'__html': this.props.display.text} })
	       	), 
	       	React.createElement("div", {className: "one column"}, " ")
	      ), 
	      sm, 
	      React.createElement("div", {className: "row"}, 
	      	React.createElement("div", {className: "five columns"}, " "), 
	      	React.createElement("div", {className: "two columns"}, 
	      	  React.createElement("input", {type: "button", className: "button-primary", onClick: this.props.buttonClick, value: text})
	       	), 
	      	React.createElement("div", {className: "five columns"}, " ")
	      )

      )
    )
  }
});