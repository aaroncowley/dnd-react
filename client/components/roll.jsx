import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

class Roll extends Component {
  state = {
    result: -1,
    die: -1,
    sidedDie: [
      { id: 1, sides: 4 },
      { id: 2, sides: 6 },
      { id: 3, sides: 8 },
      { id: 4, sides: 10 },
      { id: 5, sides: 12 },
      { id: 6, sides: 20 }
    ]
  };

  rollDice = () => {
    const max = 1000000;
    const rand = Math.floor(Math.random() * Math.floor(max));
    const die = this.state.die;

    console.log(die, rand);

    let num = 0;
    switch (die) {
      case 1:
        num = 4;
        break;
      case 2:
        num = 6;
        break;
      case 3:
        num = 8;
        break;
      case 4:
        num = 10;
        break;
      case 5:
        num = 12;
        break;
      case 6:
        num = 20;
        break;
      default:
        break;
    }
    console.log(rand % num);
    this.setState({ result: (rand % num) + 1 });
  };

  updateDie = num => {
    console.log(num);
    this.setState({ die: num });
  };

  render() {
    const { result, die } = this.state;
    const dice = this.state.sidedDie;
    return (
      <React.Fragment>
        <h1>
          Result:
          <span className="label label-default">
            {result === -1 ? "???" : result}
          </span>
        </h1>

        <Dropdown>
          <button
            className="btn btn-primary btn-md m-2"
            onClick={this.rollDice}
          >
            Roll
          </button>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {die === -1
              ? "Select Dice"
              : "D" + this.state.sidedDie[die - 1].sides.toString()}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {dice.map(d => (
              <Dropdown.Item
                onSelect={() => {
                  this.updateDie(d.id);
                }}
              >
                {"D" + d.sides.toString()}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

export default Roll;
