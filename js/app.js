// document.write('it works');

/*
  *postBox
*/

var PostHolder = React.createClass({

  getInitialState: function() {
    return { data: [] };
  },

  loadPostsFromSite: function() {
    var _this = this;
    $.ajax({
      url: this.props.url,
      method: 'GET',
      datatype: 'json',
      success: function(data) {
        _this.setState({ data: data.data.children })
        console.log(_this.state.data);
      }
    });
  },

  componentDidMount: function() {
    this.loadPostsFromSite();
  },

  render: function() {
    return (
      <div className="postHolder">
        <PostList data={this.state.data} />
        Why hello there!
      </div>
    );
  }

});

var PostList = React.createClass({

  render: function() {
    var postNodes = this.props.data.map(function(post, index) {
      return (
        <Post key={index} title={post.data.title}></Post>

      );
    })
    return (
      <div className="postList">
        {postNodes}
      </div>
    );
  }

});

var Post = React.createClass({

  render: function() {
    return(
      <div className="post">
        <h2 className="postTitle">
          {this.props.author}
        </h2>
      </div>
    )
  }

});

ReactDOM.render(
  <PostHolder url="https://www.reddit.com/r/leagueoflegends.json" />,
  document.getElementById('content')
);