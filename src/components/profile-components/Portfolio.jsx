import React, {Component} from 'react';

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    const portfolio = this.props.portfolio ? this.props.portfolio : null;



    return (
      <div className="portfolio profile-component">
        <h2>Portfolio</h2>
        <div className="portfolio-content">
          <ul>
            {
              portfolio.map((data, index) =>{
                return (
                  <li key={index}>
                    <div className="portfolio-single">
                      <div className="portfolio-single-image">
                        <img src={data.image}/>
                      </div>
                      <div className="portfolio-single-content">
                        <h3>
                          <a href={data.link}>{data.title}</a>
                        </h3>
                        <small>{data.date}</small>
                        <p>{data.detail}</p>
                      </div>


                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
export default Portfolio;
