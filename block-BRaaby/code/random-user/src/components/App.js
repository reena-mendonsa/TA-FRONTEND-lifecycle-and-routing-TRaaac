import React from "react";
import RandomUser from "./RandomUser";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      user: "",
      value: "",
      display: "",
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          data: data.results[0],
        })
      );
  }
  getRandom = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          data: data.results[0],
          value: "",
        })
      );
  };
  randomUser = (text) => {
    var fullName =
      this.state.data.name.title +
      " " +
      this.state.data.name.first +
      " " +
      this.state.data.name.last;

    switch (text) {
      case "user":
        this.setState({
          value: fullName,
        });
        break;
      case "email":
        this.setState({
          value: this.state.data.email,
        });
        break;
      case "age":
        this.setState({
          value: this.state.data.dob.age,
        });
        break;
      case "address":
        this.setState({
          value: this.state.data.location.street.name,
        });
        break;
      case "phone":
        this.setState({
          value: this.state.data.phone,
        });
        break;
      case "password":
        this.setState({
          value: this.state.data.cell,
        });
        break;
      default:
        break;
    }
    this.setState({ display: text });
  };

  render() {
    if (!this.state.data) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <React.Fragment>
          <RandomUser
            user={this.state.data}
            getRandom={this.getRandom}
            randomUser={this.randomUser}
            getValue={this.state.value}
          />
        </React.Fragment>
      );
    }
  }
}

export default App;
