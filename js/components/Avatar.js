var Avatar = React.createClass({

  getDefaultProps: function() {
    return {
      path: "https://pbs.twimg.com/profile_images/726046996516073472/49JpQhuf.jpg"
    };
  },

  render: function() {
    return (
      <div>
        <img src={this.props.path} />
      </div>
    );
  }
});

React.render(<Avatar path="https://kahoot.com/files/2017/05/bryan_trans-64x64.png" />, document.body);
