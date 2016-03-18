// document.write('it works');

/*
  *postBox
*/

var PostBox = React.createClass({
  render: function() {
    return (
      <div className="PostBox">
        Why hello there!
      </div>
    )
  }
});

ReactDOM.render(
  <PostBox />,
  document.getElementById('content')
);