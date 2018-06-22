import React from 'react';
import { Button, Container, Divider, Grid, Header, Icon,
  Image, Segment, Visibility, Card, Modal,
} from 'semantic-ui-react';
import Slider from 'react-slick';

// Modsy pictures
import CUSTOM_PROP from '../assets/images/modsy-images/custom-prop.png';
import GENERAL from '../assets/images/modsy-images/general.png';
import MOODBOARD_PRODUCTS from '../assets/images/modsy-images/moodboard-products.png';
import RENDERS from '../assets/images/modsy-images/renders.png';
import STYLE_QUIZ from '../assets/images/modsy-images/style-quiz.png';
import USERS_PAGE from '../assets/images/modsy-images/users-page.png';

// Celiac Camp pictures
import CC_REGISTER from '../assets/images/cc-images/cc-register.png';
import CC_HOME from '../assets/images/cc-images/cc-home.png';
import CC_WPS from '../assets/images/cc-images/cc-wps.png';
import CC_DONATE from '../assets/images/cc-images/cc-donate.png';
import CC_LOGIN from '../assets/images/cc-images/cc-login.png';
import CC_ADMIN from '../assets/images/cc-images/cc-admin.png';

// Morty Chess pictures
import MC_HOME from '../assets/images/mc-images/mc-home.png';
import MC_BOARD from '../assets/images/mc-images/mc-board.png';
import MC_ENGINE from '../assets/images/mc-images/mc-engine.png';
import MC_DOWNLOAD from '../assets/images/mc-images/mc-download.png';
import MC_README from '../assets/images/mc-images/mc-readme.png';
import MC_GIT from '../assets/images/mc-images/mc-git.png';

// SyllaScan pictures
import SS_HOME from '../assets/images/ss-images/ss-home.png';
import SS_PICK from '../assets/images/ss-images/ss-pick.png';
import SS_IMAGE from '../assets/images/ss-images/ss-image.png';
import SS_SETTINGS from '../assets/images/ss-images/ss-settings.png';
import SS_EVENTS from '../assets/images/ss-images/ss-events.png';

// WAMH pictures
import WAMH_EBOARD_ADMIN from '../assets/images/wamh-images/wamh-eboard-admin.png';
import WAMH_LOGIN from '../assets/images/wamh-images/wamh-login.png';
import WAMH_PROMO_ADMIN from '../assets/images/wamh-images/wamh-promo-admin.png';
import WAMH_ABOUT from '../assets/images/wamh-images/wamh-about.png';
import WAMH_INVOLVED from '../assets/images/wamh-images/wamh-involved.png';
import WAMH_PROMOTIONS from '../assets/images/wamh-images/wamh-promotions.png';
import WAMH_HOME from '../assets/images/wamh-images/wamh-home.png';

const projectInfos = {
  modsy: {
    displayName: 'Modsy',
    pictures: [STYLE_QUIZ, CUSTOM_PROP, GENERAL, MOODBOARD_PRODUCTS, RENDERS, USERS_PAGE],
    description: 'At Modsy, I utilized Django and ReactJS to independently construct administration tools that expedited, visualized, and scaled product workflow. In addition, I worked with engineers and designers to develop a 3D environment for visualizing furniture in the customer\'s home.',
    link: 'https://www.modsy.com',
  },
  cc: {
    displayName: 'Camp Arroyo',
    pictures: [CC_HOME, CC_LOGIN, CC_REGISTER, CC_ADMIN, CC_DONATE, CC_WPS],
    description: 'I originally built and continue to update and maintain the informational and organization website Camp Celiac at Camp Arroyo (organized by the Celiac Community Foundation of Northern California), a non-profit overnight summer camp for children with Celiac Disease who are unable to attend regular summer activities because of their lifelong limitations. I designed the website using ReactJS, Redux, and SemanticUI with an administrative back-end constructed using Firebase and NodeJS.',
    link: 'https://www.celiaccamp.com',
  },
  mc: {
    displayName: 'Morty Chess',
    pictures: [MC_HOME, MC_BOARD, MC_ENGINE, MC_DOWNLOAD, MC_README, MC_GIT],
    description: 'I led a team, assigned work, and delegated design of an open-source python and C++ chess engine. The program achieved an ELO rating of +2300 (among the highest for C++ chess engines) through application of deep apprenticeship learning. To aid in development, I conducted interviews with international artificial intelligence experts to learn about applying gradient descent algorithms to learning in chess. In addition, I constructed website to publicize the software in 2017.',
    link: 'http://www.mortychess.com',
  },
  ss: {
    displayName: 'SyllaScan',
    pictures: [SS_HOME, SS_PICK, SS_IMAGE, SS_SETTINGS, SS_EVENTS],
    description: 'We built an app that employed natural language processing and optical character recognition to convert a poster, syllabus, etc. into a list of calendar events, which are automatically scheduled onto the default calendar. The application was built entirely in Javascript, with ReactNative as the front-end. The project was conceived for the Amherst 2018 Hackathon - which we ended up winning!',
    link: 'https://devpost.com/software/syllascan',
  },
  wamh: {
    displayName: 'WAMH Radio',
    pictures: [WAMH_HOME, WAMH_PROMOTIONS, WAMH_LOGIN, WAMH_INVOLVED, WAMH_EBOARD_ADMIN,
      WAMH_PROMO_ADMIN, WAMH_ABOUT],
    description: 'The WAMH website includes live streaming, scheduling, information, and request/contact methods, all created with ReactJS, Redux, and Bootstrap. Moreover, the entire website is eminently editable through the administrator panel I created.',
    link: 'https://www.wamh.com',
  },
};

export default class Work extends React.Component {
  state = {
    showModal: false,
    project: 'modsy',
  }


  openInfoModal = (e, name) => {
    e.preventDefault();
    this.setState({ project: name, showModal: true });
  }

  closeInfoModal = () => {
    this.setState({ showModal: false });
  }


  render() {
    const settings = {
      infinite: true,
      speed: 500,
      dots: true,
      slidesToShow: 1,
      nextArrow: <Arrow />,
      prevArrow: <Arrow />,
    };

    function Arrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style }}
          onClick={onClick}
        />
      );
    }

    return (
      <Grid container stackable verticalAlign="middle">
        <Modal
          open={this.state.showModal}
          onClose={this.closeInfoModal}
          className="info-modal"
        >
          <Header icon="browser" content={projectInfos[this.state.project].displayName} />
          <Modal.Content id="info-modal-content">
            <Slider {...settings}>
              {projectInfos[this.state.project].pictures.map((image, key) => (
                <div key={`image-${key}`}>
                  <Image src={image} className="center-img" size="large" />
                </div>
              ))}
            </Slider>
            <Divider style={{ marginTop: '25px' }} />
            <p>
              {projectInfos[this.state.project].description}
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button primary as="a" target="_blank" href={projectInfos[this.state.project].link}>
              <Icon name="linkify" /> Check Out {projectInfos[this.state.project].displayName}
            </Button>
            <Button secondary onClick={this.closeInfoModal}>
              <Icon name="checkmark" /> Got it
            </Button>
          </Modal.Actions>
        </Modal>
        <Card.Group style={{ justifyContent: 'center', textAlign: 'center' }}>
          <Card
            as="a"
            onClick={e => this.openInfoModal(e, 'modsy')}
            image={STYLE_QUIZ}
            header="Modsy"
            description="I contracted with Modsy - a modern, 3D approach to home redesign - to provide site maintenace and build internal tooling."
          />
          <Card
            as="a"
            onClick={e => this.openInfoModal(e, 'wamh')}
            image={WAMH_HOME}
            header="WAMH Radio"
            description="I worked with the Pioneer Valley's WAMH Radio, 89.3FM, and built their interactive, high-profile website from scratch."
          />
          <Card
            as="a"
            onClick={e => this.openInfoModal(e, 'ss')}
            image={SS_HOME}
            header="SyllaScan"
            description="I was the primary mobile developer behind SyllaScan - the Amherst Hackathon 2018 1st Place project"
          />
          <Card
            as="a"
            onClick={e => this.openInfoModal(e, 'mc')}
            image={MC_HOME}
            header="MortyChess"
            description="I led a team to create MortyChess - a computer chess engine that achieved a grandmaster ELO rating, and became one of the strongest C++ engines."
          />
          <Card
            as="a"
            onClick={e => this.openInfoModal(e, 'cc')}
            image={CC_HOME}
            header="Camp Arroyo"
            description="Since 2011, I have been the active webmaster for Camp Celiac at Camp Arroyo, a non-profit, entirely volunteer camp serving children with life-long disabilities."
          />

        </Card.Group>
      </Grid>
    );
  }
}
