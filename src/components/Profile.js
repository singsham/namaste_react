import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "dummy",
      avatar_url: "",
    };
    console.log("constructor called");
  }

  async componentDidMount() {
    const result = await fetch("https://api.github.com/users/singsham");
    const profile = await result.json();
    this.setState(profile);
    console.log("did mount called");
  }

  componentDidUpdate() {
    console.log("did update called");
  }

  componentWillUnmount() {
    console.log("will unmount called");
  }

  render() {
    console.log("rendered called");
    return (
      <div>
        This is About Profile
        <h2>{this.state.name} </h2>
        <img src={this.state.avatar_url} />
      </div>
    );
  }
}

export default Profile;
