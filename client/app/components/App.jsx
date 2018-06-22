/*
    ./client/components/App.jsx
*/
import React from 'react';
import { Button, Container, Divider, Grid, Header, Icon,
  Image, Segment, Visibility,
} from 'semantic-ui-react';
import Scroll, { scroller } from 'react-scroll';
import FixedMenu from './FixedMenu';
import HeaderMenu from './HeaderMenu';
import Work from './Work';
import HEADSHOT_SRC from '../assets/images/headshot.jpg';
import STRAVA_SRC from '../assets/images/strava-logo.jpg';
import AMHERST_SRC from '../assets/images/amherst-logo.png';
import SF_SKYLINE from '../assets/images/sf-skyline.jpg';

// email URL
const EMAIL_NATE = 'mailto:nscorley@gmail.com?Subject=Hello%20Nate!';

// reassign
const { Element } = Scroll;

export default class App extends React.Component {
  state = { visible: false }
  scrollToElement = (to) => {
    scroller.scrollTo(to, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -50,
    });
  };

  hideFixedMenu = () => this.setState({ visible: false });
  showFixedMenu = () => {
    if (window.innerWidth > 900) this.setState({ visible: true });
  }
  handleMenuClick = (e, { name }) => {
    this.scrollToElement(name);
  }

  render() {
    return (
      <div>
        <FixedMenu
          handleMenuClick={this.handleMenuClick}
          visible={this.state.visible}
        />
        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em 6em' }}
            vertical
          >
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Container fluid>
                    <span>
                      <HeaderMenu
                        handleMenuClick={this.handleMenuClick}
                      />
                    </span>
                  </Container>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Container text textAlign="center">
                  <Element name="hello">
                    <Image
                      inline
                      shape="circular"
                      size="medium"
                      src={HEADSHOT_SRC}
                      className="header-image"
                    />
                    <Header
                      as="h1"
                      content="Hi, I'm Nate."
                      inverted
                      style={{
                      fontSize: '4em',
                      fontWeight: 'normal',
                      marginBottom: 0,
                    }}
                    />
                    <Header
                      as="h2"
                      content="A full-stack engineer from San Francisco, California."
                      inverted
                      style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                    />
                    <Button
                      onClick={() => this.scrollToElement('work')}
                      primary
                      size="huge"
                      animated="vertical"
                    >
                      <Button.Content hidden><Icon name="arrow down" /></Button.Content>
                      <Button.Content visible>
                         Hi Nate! Tell me more!
                      </Button.Content>
                    </Button>
                  </Element>
                </Container>
              </Grid.Row>
            </Grid>
          </Segment>
        </Visibility>

        <Segment vertical style={{ padding: '8em 0em' }}>
          <Grid container stackable>
            <Element name="work">
              <Work />
            </Element>
          </Grid>
        </Segment>

        <Element name="about">
          <Segment vertical>
            <Grid style={{ padding: '8em 0em' }}>
              <Grid container stackable verticalAlign="middle" className="about">
                <br /><br />
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Header as="h3" style={{ fontSize: '2em' }}>
                      <span>I code.</span>
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                      Recently, I&#39;ve been building websites with ReactJS and
                      Django. In the past, I&#39;ve worked on everything from
                      self-learning chess engines to algorithmic stock trading
                      systems.
                    </p>
                  </Grid.Column>
                  <Grid.Column textAlign="center">
                    <Icon
                      circular
                      onClick={() => window.open('https://github.com/nscorley')}
                      link
                      className="coder-icon"
                      name="github"
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Header as="h3" style={{ fontSize: '2em' }}>
                      I bike.
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                      When I&#39;m not tucked behind my monitors, you can find me
                      cycling, running, or backpacking. Feel free to follow me
                      on&nbsp;
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.strava.com/athletes/5228967"
                      >
                        Strava
                      </a>.
                    </p>
                  </Grid.Column>
                  <Grid.Column textAlign="center">
                    <Image
                      as="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.strava.com/athletes/5228967"
                      shape="circular"
                      className="strava-icon"
                      src={STRAVA_SRC}
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Header as="h3" style={{ fontSize: '2em' }}>
                      I study.
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                      As an Art History major, I like to think that
                      I develop with an interdisciplinary perspective.
                    </p>
                  </Grid.Column>
                  <Grid.Column textAlign="center">
                    <Image
                      as="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.amherst.edu"
                      shape="circular"
                      className="amherst-icon"
                      src={AMHERST_SRC}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid>
          </Segment>
        </Element>
        <Divider />
        <Element name="contact">
          <Segment
            style={{ padding: '8em 0em', borderBottom: 'none' }}
            vertical
          >
            <Container text>
              <Header as="h3" style={{ fontSize: '2em' }}>
                <span>This Nate guy seems cool. How can I learn more?</span>
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Glad you think so. Go ahead and{' '}
                <a href={EMAIL_NATE} rel="noopener noreferrer">
                  reach out
                </a>{' '}
                to me with any further questions.
              </p>
              <Divider
                as="h4"
                className="header"
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
              >
                <Button as="a" size="large" href={EMAIL_NATE}>
                  Email Nate
                </Button>
              </Divider>
            </Container>
          </Segment>
        </Element>
        <Container fluid>
          <Image src={SF_SKYLINE} className="sf-skyline" />
        </Container>
      </div>
    );
  }
}
