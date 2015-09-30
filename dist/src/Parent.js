var App = React.createClass({displayName: "App",
  render: function(){
    return (  
      React.createElement("div", null, 

        React.createElement("div", null, " This is the parent. "), 
        React.createElement(Child, {name: "app"})
      )
    )
  }
});