import ReactGA from 'react-ga'

export const initialize = () => {
  ReactGA.initialize('UA-110317820-4')
}

export const sendClickLog = (label, id = null) => {
  if (!window.ga) {
    return
  }
  id ? window.ga('click', label, id) : window.ga('click', label)
}

export const logPageView = (pathname) => {
  const isDev = process.env.NODE_ENV !== 'production'
  if (isDev) {
    return
  }

  ReactGA.set({ page: pathname })
  ReactGA.pageview(pathname)
}
