import { Provider } from 'react-redux'
import { store } from './redux'
import { PageHeader } from '../shared/ui/header'
import './styles/antCustomStyles.less'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import { Sidebar } from '../shared/ui/navigation'
import GlobalAntDesignStyles from './styles/GlobalAntDesignStyles'
import { SearchPage, BookDetailPage, FavouritePage, MainPage } from '../pages'
import GlobalStyle from './styles/GlobalStyle'

const App = () => {
  return (
    <>
      <GlobalAntDesignStyles />
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Layout style={{ height: '100vh' }}>
            <PageHeader />
            <Layout>
              <Sidebar />
              <Layout>
                <Switch>
                  <Route exact path={'/'}>
                    <MainPage />
                  </Route>
                  <Route exact path={'/favourite'}>
                    <FavouritePage />
                  </Route>
                  <Route exact path={'/book/:bookId'}>
                    <BookDetailPage />
                  </Route>
                  <Route exact path={'/search'}>
                    <SearchPage />
                  </Route>
                </Switch>
              </Layout>
            </Layout>
          </Layout>
        </BrowserRouter>
      </Provider>
    </>
  )
}
export default App
