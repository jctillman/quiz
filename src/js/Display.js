var Display = React.createClass({
  render: function(){
  	var text = this.props.display.again ? "Take Quiz Again" : "Take Quiz";
  	if (this.props.display.again){
  		var sm = (
  				<div className="row">
  					<div className="one columns"></div>
  					<div className="ten columns">
  					<a href="http://twitter.com/intent/tweet?status=What Kind of a Quiz Taker are you?+someurl.html">
  						<i className="fa fa-twitter-square fa-2x"></i>
  					</a> &nbsp;&nbsp;
  					<a href="http://www.facebook.com/share.php?u=someurl.html&title=What Kind of a Quiz Taker are you?">
  						<i className="fa fa-facebook-official fa-2x"></i>
  					</a> &nbsp;&nbsp;
  					<a href="https://plus.google.com/share?url=someurl.html">
  						<i className="fa fa-google-plus-square fa-2x"></i>
  					</a> &nbsp;&nbsp;
  					<hr/> 
  					</div>
  					<div className="one columns"></div>
  				</div> 
  				)
  	}else{
  		var sm = <hr/>
  	}

    return (  
      <div>
	      <div className="row">
	       	<div className="one column">&nbsp;</div>
	      	<div className="ten columns">
	       		<h5 dangerouslySetInnerHTML={ {'__html': this.props.display.text} }  ></h5>  
	       	</div>
	       	<div className="one column">&nbsp;</div> 
	      </div>
	      {sm}
	      <div className="row">
	      	<div className="five columns">&nbsp;</div>
	      	<div className="two columns">
	      	  <input type="button" className="button-primary" onClick={this.props.buttonClick} value={text}></input> 
	       	</div> 
	      	<div className="five columns">&nbsp;</div>
	      </div>

      </div>
    )
  }
});