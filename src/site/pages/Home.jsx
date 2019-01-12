import { pick } from 'lodash'
import * as React from 'react'
import { connect } from 'react-redux'
import { withRouteData } from 'react-static'
import { createStructuredSelector } from 'reselect'
import { compose, setDisplayName, lifecycle, withProps } from 'recompose'
import { Container, Row, Col } from 'reactstrap'

// import logoImg from 'Img/faast-logo.png'
import Header from 'Site/components/Header'
import Features from 'Site/components/Features'
import Footer from 'Site/components/Footer'
import SwapWidget from 'Site/components/SwapWidget'

import { fetchGeoRestrictions } from 'Common/actions/app'
import { retrieveAssets } from 'Common/actions/asset'
import { getAllAssetsArray, areAssetsLoaded } from 'Common/selectors/asset'

import MoonBackground from 'Img/moon-background.jpg'
import MacbookScreenshot1 from 'Img/macbook-screenshot-01.png'

export default compose(
  setDisplayName('Home'),
  connect(createStructuredSelector({
    assets: getAllAssetsArray,
    areAssetsLoaded: areAssetsLoaded
  }), {
    retrieveAssets,
    fetchGeoRestrictions
  }),
  withProps(({ assets }) => ({
    assetList: assets.filter(({ deposit, receive }) => deposit || receive)
      .map((asset) => pick(asset, 'symbol', 'name', 'iconUrl'))
  })),
  lifecycle({
    componentWillMount() {
      const { fetchGeoRestrictions, retrieveAssets } = this.props
      fetchGeoRestrictions()
      retrieveAssets()
    }
  }),
  withRouteData,
)(({ supportedAssets, areAssetsLoaded, assetList }) => {
  supportedAssets = areAssetsLoaded ? assetList : supportedAssets
  return (
    <div>
      <div>
        <Header/>
        <div className='jumbotron jumbotron-fluid hero-technology mb-0' style={{
          backgroundImage: `url(${MoonBackground})`,
          height: '759px',
          backgroundPosition: '50% 25px',
          backgroundSize: '1400px',
          backgroundRepeat: 'no-repeat',
          marginTop: '-160px',
          paddingTop: '220px',
          backgroundColor: 'rgba(0,26,23)',
        }}>
          <Container>
            <Row>
              <Col sm='12' lg='6' className='text-left pl-md-5 pl-0 ml-4'>
                <a href='https://medium.com/faast/faast-swap-api-is-now-available-959091bc85ca' target='_blank noopener'>
                  <div className='notification'>
                    <span className='new-pill'>new</span>
                  Read about the Faa.st affiliate program
                  </div>
                </a>
                <h1 className='hero-title mb-4' style={{ fontWeight: 'normal' }}>
                  <span className='special-word'>Instantly</span> trade directly from your Ledger, Trezor, or MetaMask.
                </h1>
                <p className='hero-subtitle mb-4' style={{ fontWeight: 'normal' }}>
                  The <span className='special-word'>safest</span> way to to build a diversified cryptocurrency portfolio
                </p>
                <p><a className='btn btn-primary btn-lg hero-button py-2' role='button' href='/app'>
            Create A Portfolio
                </a></p>
              </Col>
              <Col className='pr-3 d-md-block d-none'>
                <SwapWidget assets={supportedAssets}/>
              </Col>
              <div className='intro d-md-none d-block mx-auto' style={{ paddingTop: '60px', maxWidth: 400 }}>	
                <img className='img-fluid' src={MacbookScreenshot1} style={{ height: '100%', width: '730px' }}/>	
              </div>
            </Row>
          </Container>
        </div>
      </div>
      <Features supportedAssets={supportedAssets} />
      <Footer/>
    </div>
  )
})
