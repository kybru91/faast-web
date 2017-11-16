export const resetAll = () => ({
  type: 'RESET_ALL'
})

export const setEncryptedWallet = (address, wallet) => ({
  type: 'SET_ENCRYPTED_WALLET',
  payload: {
    address,
    wallet
  }
})

export const setHardwareWallet = (address, wallet) => ({
  type: 'SET_HARDWARE_WALLET',
  payload: {
    address,
    wallet
  }
})

export const setAssets = (assets) => ({
  type: 'SET_ASSETS',
  payload: assets
})

export const loadingPortfolio = (bool) => ({
  type: 'LOADING_PORTFOLIO',
  payload: bool
})

export const setPortfolio = (data) => ({
  type: 'SET_PORTFOLIO',
  payload: data
})

export const setPortfolioItem = (symbol, item) => ({
  type: 'SET_PORTFOLIO_ITEM',
  payload: { symbol, item }
})

export const setSwap = (list) => ({
  type: 'SET_SWAP',
  payload: list
})

export const addSwapDeposit = (symbol) => ({
  type: 'ADD_SWAP_DEPOSIT',
  payload: symbol
})

export const removeSwapDeposit = (symbol) => ({
  type: 'REMOVE_SWAP_DEPOSIT',
  payload: symbol
})

export const addSwapReceive = (depositSymbol, receiveSymbol) => ({
  type: 'ADD_SWAP_RECEIVE',
  payload: { depositSymbol, receiveSymbol }
})

export const removeSwapReceive = (depositSymbol, receiveSymbol) => ({
  type: 'REMOVE_SWAP_RECEIVE',
  payload: { depositSymbol, receiveSymbol }
})

export const resetSwap = () => ({
  type: 'RESET_SWAP'
})

export const setMock = (mock) => ({
  type: 'SET_MOCK',
  payload: mock
})

export const insertSwapData = (depositSymbol, receiveSymbol, data) => ({
  type: 'INSERT_SWAP_DATA',
  payload: { depositSymbol, receiveSymbol, data }
})

export const updateSwapTx = (depositSymbol, receiveSymbol, data) => ({
  type: 'UPDATE_SWAP_TX',
  payload: { depositSymbol, receiveSymbol, data }
})

export const updateSwapOrder = (depositSymbol, receiveSymbol, data) => ({
  type: 'UPDATE_SWAP_ORDER',
  payload: { depositSymbol, receiveSymbol, data }
})

export const toggleOrderModal = () => ({
  type: 'TOGGLE_ORDER_MODAL'
})

export const showOrderModal = () => ({
  type: 'SHOW_ORDER_MODAL'
})

export const hideOrderModal = () => ({
  type: 'HIDE_ORDER_MODAL'
})
