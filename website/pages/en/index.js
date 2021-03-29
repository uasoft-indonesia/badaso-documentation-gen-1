/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const Icon = require("@material-ui/core/Icon").default;
const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const translate = require('../../server/translate.js').translate;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle has-text-weight-bold">
        <div className="is-unselectable">{props.title}</div>
        <small>{props.tagline}</small>
        <small></small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="badaso-btn btn-primary has-text-weight-bold" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/badaso.png`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('getting-started/introduction')}><translate>Get Started</translate></Button>
            {/* <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button> */}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Item = (props) => {
      let items = []
      props.contents.forEach((item, index) => {
        items.push(
          <div class="blockElement has-zindex-100 alignCenter threeByGridBlock">
            <div class="blockContent">
              <Icon className="has-icon-big is-unselectable has-text-color-light">{item.icon}</Icon>
              <div>
                <span className="has-text-weight-bold has-text-size-6 has-text-color-light">{item.content}</span>
              </div>
              <span className="has-text-color-light">{item.title}</span>
            </div>
          </div>
        )
      });
      return items
    }

    const GithubBlock = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <div class="gridBlock has-position-relative">
          <Item contents={props.children} />
        </div>
      </Container>
    );

    const BadasoCRUD = () => (
      <Block background="light">
        {[
          {
            content: (
              <translate>Badaso is admin interface allows you to create CRUD functionality to your posts, pages, or any other table in your database.</translate>
            ),
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: (
              <translate>CRUD Generator</translate>
            ),
          },
        ]}
      </Block>
    );

    const Github = () => (
      <GithubBlock layout="threeColumn">
        {[
          {
            content: '250.000',
            // image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            icon: 'download',
            title: (
              <translate>Downloads</translate>
            )
          },
          {
            content: '125.000',
            // image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            icon: 'star_rate',
            title: (
              <translate>Stars</translate>
            )
          },
          {
            content: '45.000',
            imageAlign: 'top',
            icon: 'account_tree',
            title: (
              <translate>Forks</translate>
            )
          },
        ]}
      </GithubBlock>
    );

    const BadasoIsAwesome = () => (
      <Block>
        {[
          {
            content: (
              <translate>Badaso can save you so much time and it'll make building applications even more fun!</translate>
            ),
            image: `${baseUrl}img/undraw_website_builder.svg`,
            imageAlign: 'right',
            title: (
              <translate>Badaso is Awesome</translate>
            ),
          },
        ]}
      </Block>
    );

    const Users = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
            <p className="has-text-color-dark">{user.caption}</p>
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2><translate>Who is Using Badaso?</translate></h2>
          {/* <p>This project is used by all these people</p> */}
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              <translate>All Badaso Users</translate>
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer p-0">
          {/* <Features /> */}
          {/* <FeatureCallout /> */}
          <BadasoIsAwesome />
          <BadasoCRUD />
          <Users />
          <div style={{backgroundImage: 'url(' + baseUrl + 'img/badaso.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} class="has-background-overlay has-position-relative">
            <Github className="has-primary-background" />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
