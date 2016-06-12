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
        console.log(_this.state.data[0].data.title);
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
      </div>
    );
  }

});

var PostList = React.createClass({

  render: function() {
    var postNodes = this.props.data.map(function(post, index) {
      return (
        <Posts key={index} author={post.data.author}>{post.data.title}</Posts>
      );
    })
    return (
      <div className="postList">
        {postNodes}
      </div>
    );
  }

});

var Posts = React.createClass({

  render: function() {
    return(
      <div className="posts">
        <Title className="title">{this.props.title}</Title>
        <Author className="author">{this.props.author}</Author>
      </div>
    )
  }

});

var Author = React.createClass({
  render: function() {
    return(
      <h3 className="authorName">{this.props.data}author goes here</h3>
    )
  }

});

var Title = React.createClass({

  render: function() {
    return(
      <p className="title">{this.props.title}title goes here</p>
    )
  }

});

ReactDOM.render(
  <PostHolder url="https://www.reddit.com/r/leagueoflegends.json" />,
  document.getElementById('content')
);