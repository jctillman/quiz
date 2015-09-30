var Splash = React.createClass({displayName: "Splash",
  render: function(){ 
    return (  
      React.createElement("div", {id: "splash"}, 
	      React.createElement("div", {className: "row"}, 
	      	React.createElement("div", {className: "one column"}, " "), 
	      	React.createElement("div", {className: "ten columns"}, 
	      		React.createElement("h1", null, "What Kind of a Taker of Online Personality Quizes are You?")
	      	), 
	      	React.createElement("div", {className: "one column"}, " ")
	      ), 
	      React.createElement("div", {className: "row"}, 
	      	React.createElement("div", {className: "one column"}, " "), 
	      	React.createElement("div", {className: "ten columns"}, 
	      		React.createElement("h4", null, "The Quiz")
	      	), 
	      	React.createElement("div", {className: "one column"}, " ")
	      ), 
	      React.createElement("div", {className: "row"}, 
	      	React.createElement("div", {className: "twelve columns"}, 
	      		React.createElement("hr", null)
	      	)
	      )
      )
    )
  }
});