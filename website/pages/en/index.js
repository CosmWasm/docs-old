/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.tagline}
        <small>{siteConfig.title}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('intro/overview')}>Get the Docs</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align={props.align || 'center'}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const FeatureCallout = () => (
      <Block background="dark" align="left" id="callout">
        {[
          {
            content:
              `<ul>
                <li>Tight integration with <a href="https://github.com/cosmos/cosmos-sdk">Cosmos SDK</a> and the <a href="https://cosmos.network">Cosmos ecosystem</a>.</li>
                <li>Mature tooling for developing and testing smart contracts.</li>
                <li><a href=${docUrl('getting-started/smart-contracts#lessons-learned-from-ethereum')}>Secure architecure design</a> to avoid almost all attack vectors present in Ethereum.</li>
                <li><a href="https://cosmos.network/ibc/">IBC integration</a> planned at the same time with the Cosmos Hub - prepare for the world of multi-chain contracts</li>
              </ul>`,
            image: `${baseUrl}img/undraw_project_completed.svg`,
            imageAlign: 'right',
            title: 'Key Features',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block align="left" id="description" background="light">
        {[
          {
            content:
              `<p>
              For starters, they can run on multiple chains, making use of Cosmos's groundbreaking
              <a href="https://cosmos.network/ibc/">InterBlockchain Communication protocol</a>.
              </p><p>
              Secondly, they are secure with most of the known attack vectors evidenced on <a href=${docUrl('getting-started/smart-contracts#lessons-learned-from-ethereum')}>Ethereum closed by design</a>. 
              CosmWasm is safe from Reentrancy, Arithmetic under/overflows, Default Visibilities, and more.
              </p><p>
              Finally, they can leverage the speed of wasm and power of rust, to perform any algorithm you desire.
              Just import <a href="https://docs.rs/rust_decimal/1.0.3/rust_decimal/index.html">fixed point decimal math</a>
              for deterministic calculations
              or <a href="https://docs.rs/blake2b/0.7.0/blake2b/">blake2b hashing algorithm</a>
              if your chain doesn't already have it natively. 
              </p><p>
              Embrace the CosmWasm smart contracts with confidence, and build your own without 
              worrying about the delicacy of the contract like in the Solidity world.
              </p>
              `,
            image: `${baseUrl}img/undraw_dev_productivity.svg`,
            imageAlign: 'left',
            title: 'Go beyond Ethereum Smart Contracts',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Mainnet-tested BFT bPOS consensus out of the box.',
            image: `${baseUrl}img/favicon.ico`,
            imageAlign: 'top',
            title: 'Build on the Cosmos SDK',
          },
          {
            content: 'Use a mature, safe language with great IDE integration.',
            image: `${baseUrl}img/rust-icon.svg`,
            imageAlign: 'top',
            title: 'Write contracts in Rust',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom" background="dark">
          <h2>Who is Using This?</h2>
          <p>CosmWasm is used in testnets by the following projects</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More CosmWasm Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
      {/* 
          <LearnHow />
          <TryOut /> */}
          <FeatureCallout />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
