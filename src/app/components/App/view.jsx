import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Connect from 'Components/Connect'
import TradeHistory from 'Components/TradeHistory'
import WalletOpened from 'Components/WalletOpened'
import Dashboard from 'Components/Dashboard'
import Modify from 'Components/Modify'
import SearchResults from 'Components/SearchResults'
import ModalRoute from 'Components/ModalRoute'
import TradeDetailModal from 'Components/TradeDetailModal'
import SwapWidget from 'Components/SwapWidget'
import AssetDetail from 'Components/AssetDetail'
import AssetIndex from 'Components/AssetIndex'
import AffiliateLogin from 'Components/Affiliate/Login'
import AffiliateSignup from 'Components/Affiliate/Signup'
import AffiliateDashboard from 'Components/Affiliate/Dashboard'
import AffiliateSettings from 'Components/Affiliate/Settings'
import AffiliatePayouts from 'Components/Affiliate/Payouts'
import AffiliateSwaps from 'Components/Affiliate/Swaps'
import AffiliateAccountModal from 'Components/Affiliate/AccountModal'

import {
  root, dashboard, rebalance, connect, viewOnlyAddress,
  tradeHistory, tradeDetail, swapWidget, assetDetail, assetIndex,
  affiliateLogin, affiliateSignup, affiliateDashboard, affiliateSettings,
  affiliatePayouts, affiliateSwaps, affiliateAccountModal
} from 'Routes'

const AppView = ({ hasNoWallets }) => (
  <Fragment>
    <Switch>
      <Route exact path={root.path} render={() => (
        hasNoWallets
          ? (<Redirect to='/connect' />)
          : (<Redirect to='/dashboard' />)
      )} />

      {/* Routes requiring a connected wallet */}
      <WalletOpened path={dashboard.path} component={Dashboard}/>
      <WalletOpened path={rebalance.path} component={Modify}/>

      {/* Routes that don't require a connected wallet */}
      <Route path={connect.path} component={Connect}/>
      <Route path={viewOnlyAddress.path} component={SearchResults}/>
      <Route path={swapWidget.path} component={SwapWidget}/>
      <Route path={tradeHistory.path} component={TradeHistory}/>
      <Route path={assetDetail.path} component={AssetDetail}/>
      <Route path={assetIndex.path} component={AssetIndex}/>
      <Route path={affiliateLogin.path} component={AffiliateLogin}/>
      <Route path={affiliateSignup.path} component={AffiliateSignup}/>
      <Route path={affiliateDashboard.path} component={AffiliateDashboard}/>
      <Route path={affiliateSettings.path} component={AffiliateSettings}/>
      <Route path={affiliatePayouts.path} component={AffiliatePayouts}/>
      <Route path={affiliateSwaps.path} component={AffiliateSwaps}/>
      

      {/* Legacy routes */}
      <Redirect exact from='/balances' to={dashboard.path}/>
      <Redirect exact from='/modify' to={rebalance.path}/>

      {/* Fallback for unknown routes */}
      <Redirect to={dashboard.path}/>
    </Switch>

    {/* Routes that show a modal over one of the above pages */}
    <ModalRoute closePath={tradeHistory.path} path={tradeDetail.path} render={(props) => (
      <TradeDetailModal tradeId={props.match.params.tradeId} {...props}/>
    )}/>
    <ModalRoute closePath={affiliateDashboard.path} path={affiliateAccountModal.path} render={(props) => (
      <AffiliateAccountModal {...props}/>
    )}/>
  </Fragment>
)

export default AppView
