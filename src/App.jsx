import { Route, Switch } from 'react-router-dom';
import Cart from './components/cart';
import productList from './components/products/product-list';
import Header from './components/header';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header></Header>
      <div className={styles.appContainer}>
        <Switch>
          <Route path="/" exact component={productList}></Route>
          <Route path="/cart" exact component={Cart}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
