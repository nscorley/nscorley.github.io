/*
    ./client/components/App.jsx
*/
import React from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import FixedMenu from './FixedMenu';
import HeaderMenu from './HeaderMenu';
import HEADSHOT_SRC from '../assets/images/headshot.jpg';
import STRAVA_SRC from '../assets/images/strava-logo.jpg';
import AMHERST_SRC from '../assets/images/amherst-logo.png';
import CAMP_CELIAC_SRC from '../assets/images/camp-celiac-logo.jpg';
import MODSY_SRC from '../assets/images/modsylogo.png';
import OPTIVER_SRC from '../assets/images/optiver-logo.png';
import CHESS_SRC from '../assets/images/chess-icon.png';
import RESUME from '../assets/pdfs/nathaniel-corley-cs-resume.pdf';
import SF_SKYLINE from '../assets/images/sf-skyline.jpg';


// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({ offset: -100, scrollDuration: 600 });
// email URL
const EMAIL_NATE = 'mailto:nscorley@gmail.com?Subject=Hello%20Nate!';

export default class App extends React.Component {
  state = { selected: 'hello' };

  setSelected = selected => this.setState({ selected })
  hideFixedMenu = () => this.setState({ visible: false, selected: 'hello' })
  showFixedMenu = () => this.setState({ visible: true, selected: 'about' })
  handleMenuClick = (e, { name }) => this.setState({ selected: name });

  render() {
    const { visible } = this.state;
    return (
      <div>
        { visible ?
          <FixedMenu
            handleMenuClick={this.handleMenuClick}
            selected={this.state.selected}
          />
          : null }
        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Container fluid>
                    <ScrollableAnchor id="hello">
                      <span>
                        <HeaderMenu
                          handleMenuClick={this.handleMenuClick}
                          selected={this.state.selected}
                        />
                      </span>
                    </ScrollableAnchor>
                  </Container>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Container text textAlign="center">
                  <Image inline shape="circular" size="small" src={HEADSHOT_SRC} className="header-image" />
                  <Header
                    as="h1"
                    content="Hi, I'm Nate."
                    inverted
                    style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0 }}
                  />
                  <Header
                    as="h2"
                    content="A full-stack engineer from San Francisco, California."
                    inverted
                    style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                  />
                  <Button as="a" href="#about" onClick={() => this.setSelected('about')} primary size="huge">
                    Hi Nate! Tell me more!
                    <Icon name="right arrow" />
                  </Button>
                </Container>
              </Grid.Row>
            </Grid>
          </Segment>
        </Visibility>

        <Visibility
          once={false}
          continuous
          onPassed={{
            '30%': () => { this.setSelected('about'); },
            '90%': () => { this.setSelected('work'); },
          }}
        >
          <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Header as="h3" style={{ fontSize: '2em' }}>
                    <ScrollableAnchor id="about">
                      <span>I code things.</span>
                    </ScrollableAnchor>
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                 Recently, I&#39;ve been building websites with ReactJS and Django.
                 In the past, I&#39;ve worked on everything
                 from self-learning chess engines to algorithmic stock trading systems.
                  </p>
                </Grid.Column>
                <Grid.Column textAlign="center" >
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
                  <Header as="h3" style={{ fontSize: '2em' }}>I (occassionally) go outside.</Header>
                  <p style={{ fontSize: '1.33em' }}>
                 When I&#39;m not tucked behind my monitors, you can find me cycling,
                 running, or backpacking. Feel free to stalk me on&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://www.strava.com/athletes/5228967">
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
                  <Header as="h3" style={{ fontSize: '2em' }}>I go to school.</Header>
                  <p style={{ fontSize: '1.33em' }}>
                 Yup, I&#39;m still slaving away, learning abstract concepts that likely will
                 bare no influence on my life after graduation.
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
          </Segment>
        </Visibility>

        <Visibility
          once={false}
          continuous
          onPassed={{ '50%': () => { this.setSelected('contact'); } }}
        >
          <Segment vertical style={{ padding: '0em' }}>
            <Grid celled stackable>
              <Grid.Row textAlign="center" columns="equal">
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <ScrollableAnchor id="work">

                    <div>
                      <Image
                        as="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.modsy.com"
                        className="modsy-icon"
                        src={MODSY_SRC}
                      />
                      <p style={{ fontSize: '1.33em' }}>
                 I contracted with&nbsp;
                        <a
                          href="http://www.modsy.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                   Modsy
                        </a> - a modern, 3D
                 approach to home redesign - to provide site maintenace and
                 build internal tooling.
                      </p>
                    </div>
                  </ScrollableAnchor>
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Image
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.celiaccamp.com"
                    className="camp-celiac-icon"
                    src={CAMP_CELIAC_SRC}
                  />
                  <p style={{ fontSize: '1.33em' }}>
                 Since 2011, I have been the active webmaster for Camp Celiac,
                 a non-profit, entirely volunteer camp serving children with life-long disabilities.
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row textAlign="center" columns="equal">
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Image
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.optiver.com"
                    className="optiver-icon"
                    src={OPTIVER_SRC}
                  />
                  <p style={{ fontSize: '1.33em' }}>
                 I&#39;m the president of my college&#39;s Algorithmic Trading Club -
                 a student-run group that attends local competions (we won the
                 Optiver Marketmaking Competition in 2017) and develops trading strategies.
                  </p>
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Image
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/uhsprogrammingclub/Seanet"
                    className="chess-icon"
                    src={CHESS_SRC}
                  />
                  <p style={{ fontSize: '1.33em' }}>
                 I led a team to create&nbsp;
                    <a
                      href="https://github.com/uhsprogrammingclub/Seanet"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                   SeaNet
                    </a>
                 - a computer chess engine that achieved a grandmaster
                 ELO rating, and became one of the strongest C++ engines.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Visibility>

        <Visibility
          once={false}
          continuous
          onPassed={{ '10%': () => { this.setSelected('work'); } }}
        >
          <Segment style={{ padding: '8em 0em', borderBottom: 'none' }} vertical>
            <Container text>
              <Header as="h3" style={{ fontSize: '2em' }}>
                <ScrollableAnchor id="contact">
                  <span>This Nate guy seems cool. How can I learn more?</span>
                </ScrollableAnchor>

              </Header>
              <p style={{ fontSize: '1.33em' }}>
              Glad you think so. Go ahead and check out my&nbsp;
                <a
                  target="_blank"
                  href={RESUME}
                >
                resume
                </a>, and please&nbsp;
                <a
                  href={EMAIL_NATE}
                  rel="noopener noreferrer"
                >
                reach out
                </a> to me with any further questions.
              </p>
              <Divider
                as="h4"
                className="header"
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
              >
                <Button
                  as="a"
                  size="large"
                  target="_blank"
                  href={RESUME}
                  rel="noopener noreferrer"
                >
               Resume
                </Button>
                <Button
                  as="a"
                  size="large"
                  href={EMAIL_NATE}
                >
               Email Nate
                </Button>
              </Divider>
            </Container>
          </Segment>
        </Visibility>
        <Container fluid>
          <Image src={SF_SKYLINE} className="sf-skyline" />
        </Container>
      </div>
    );
  }
}
