import React, {Component} from 'react';
import Awards from './profile-components/Awards.jsx';
import Contact from './profile-components/Contact.jsx';
import Education from './profile-components/Education.jsx';
import Experience from './profile-components/Experience.jsx';
import Info from './profile-components/Info.jsx';
import Portfolio from './profile-components/Portfolio.jsx';
import Skills from './profile-components/Skills.jsx';
import Summary from './profile-components/Summary.jsx';


class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        info:
        {
          firstName: 'Caully',
          lastName: 'Quinoa',
          title: 'Sr. Web Developer',
          socialMedia: [
            {
              type: "Twitter",
              url: "http://twitter.com/joshcoles"
            },
            {
              type: "Instagram",
              url: "http://instagram.com/joshcoles"
            }
          ],
          profileImage: "https://i.pinimg.com/736x/c6/e2/16/c6e2162793ec9d2f3d64ce1b5f69112a--bearded-tattooed-men-hipster-beards.jpg",
          contactInfo: {
            phone: "(555) 555-5555",
            email: "fake@fake.com",
            address: "123 fake st."
          }
        },
        summary: {
          detail: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.'
        },
        experience: [
          {
            title: 'Sr. Front End Web Developer',
            company: 'Hootsuite',
            startDate: 'June 2013',
            endDate: 'present',
            detail: 'idiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.'
          },
          {
            title: 'Int. Back End Web Developer',
            company: 'Google',
            startDate: 'July 2011',
            endDate: 'June 2013',
            detail: 'ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.'
          },
          {
            title: 'Jr. Full Stack Web Developer',
            company: 'Microsoft',
            startDate: 'June 2010',
            endDate: 'July 2011',
            detail: 'ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.'
          }
        ],
        skills: [
          {
            name: 'ReactJS',
            category: 'Framework'
          },
          {
            name: 'Javascript ES6',
            category: 'Language'
          },
          {
            name: 'GitHub',
            category: 'Tools'
          },
          {
            name: 'PostgreSQL',
            category: 'Database'
          }
        ],
        education: [
          {
            school: 'MIT',
            program: 'Data Science',
            startDate: 'June 2010',
            endDate: 'July 2014',
            detail: 'ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.'
          },
          {
            school: 'UBC',
            program: 'Computer Science',
            startDate: 'June 2006',
            endDate: 'July 2009',
            detail: 'ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.'
          },
          {
            school: 'Lighthouse Labs',
            program: 'Web Development Bootcamp',
            startDate: 'June 2004',
            endDate: 'July 2004',
            detail: 'ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.'
          }
        ],
        portfolio:[
          {
            title: 'Money on The Board',
            link: 'http://www.someImage.com',
            image: 'https://i.pinimg.com/736x/d3/aa/ff/d3aaff3f37d8d8641a90f20d6b35430e--dude-perfect-backpack.jpg',
            date: 'June 2010',
            detail: 'ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.'
          },
          {
            title: 'Chatty App',
            link: 'http://www.someImage.com',
            image: 'https://i.pinimg.com/736x/d3/aa/ff/d3aaff3f37d8d8641a90f20d6b35430e--dude-perfect-backpack.jpg',
            date: 'June 2006',
            detail: 'ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.'
          },
          {
            title: 'Jungle',
            link: 'http://www.someImage.com',
            image: 'https://i.pinimg.com/736x/d3/aa/ff/d3aaff3f37d8d8641a90f20d6b35430e--dude-perfect-backpack.jpg',
            date: 'June 2004',
            detail: 'ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.'
          }
        ],
        awards: [
          {
            title: 'People\'s Choice Award',
            date: 'June 2010',
            detail: 'ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.'
          },
          {
            title: 'Deans Honor Roll',
            date: 'June 2006',
            detail: 'ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.'
          },
          {
            title: 'Nobel Peace Prize',
            date: 'June 2004',
            detail: 'ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.'
          }
        ]
      }
    }
  }


  render() {
    const user = this.state.user ? this.state.user : null
    return (
      <div className="user-profile">
        <h1>User Profile</h1>
        <Info info={ user.info } />
        <Summary summary={ user.summary } />
        <Experience experience={ user.experience }/>
        <Education education={ user.education } />
        <Skills skills={ user.skills }/>
        <Portfolio portfolio={ user.portfolio } />
        <Awards awards={ user.awards }/>
        <Contact />
      </div>
    );
  }
}
export default UserProfile;
