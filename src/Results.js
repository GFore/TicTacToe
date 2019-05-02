import React from 'react';
import MyResponsivePie from './PieChart.js';

const data = [
  {
    "id": "stylus",
    "label": "stylus",
    "value": 289,
    "color": "hsl(155, 70%, 50%)"
  },
  {
    "id": "scala",
    "label": "scala",
    "value": 184,
    "color": "hsl(95, 70%, 50%)"
  },
  {
    "id": "php",
    "label": "php",
    "value": 12,
    "color": "hsl(267, 70%, 50%)"
  },
  {
    "id": "hack",
    "label": "hack",
    "value": 428,
    "color": "hsl(59, 70%, 50%)"
  },
  {
    "id": "java",
    "label": "java",
    "value": 323,
    "color": "hsl(50, 70%, 50%)"
  }
]

class Results extends React.Component {
  render() {
    const {results} = this.props; // p1Wins, p2Wins, ties}
    const played = results.p1Wins + results.p2Wins + results.ties;

    if (played > 0) {
      return (
        <div className="game-results">
          <h4>Game Results</h4>
          <hr />
          <div className="result-block">Games Played: {played}<br /></div>
          <div className="result-block">
            <div className="result-block">
              P1 Wins<br />{results.p1Wins}<br />
            </div>
            <div className="result-block">
              P1 Win%<br />{((results.p1Wins / played) * 100).toFixed(1)}%<br />
            </div>
          </div>
          <div className="result-block">
            <div className="result-block">
              P2 Wins<br />{results.p2Wins}<br />
            </div>
            <div className="result-block">
              P2 Win%<br />{((results.p2Wins / played) * 100).toFixed(1)}%<br />
            </div>
          </div>
          <div className="result-block">
            <div className="result-block">
              Ties<br />{results.ties}<br />
            </div>
            <div className="result-block">
              Tie%<br />{((results.ties / played) * 100).toFixed(1)}%<br />
            </div>
          </div>
          <div className="pie">
            <MyResponsivePie data={data} />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Results;