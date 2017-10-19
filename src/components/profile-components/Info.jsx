import React, {Component} from 'react';

class Info extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    const info = this.props.info ? this.props.info : null;

    return (
      <div className="info profile-component">
        <h1>{info.firstName} {info.lastName}</h1>
        <h2>{info.title}</h2>
        <ul className="social-media-info">
          {
            info.socialMedia.map((media, index) => {
              return (
                <li className={ `social-${media.type}` } key={index}>
                  <a href={media.url}>{media.type}</a>
                </li>
              )
            })
          }
        </ul>
        <img src={info.profileImage} />
        <ul className="contact-info">
          <li>{info.contactInfo.phone}</li>
          <li>{info.contactInfo.email}</li>
          <li>{info.contactInfo.address}</li>
        </ul>
      </div>
    );
  }
}
export default Info;
