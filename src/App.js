import React, { Component } from 'react';
import './App.css';
import { CartContext } from './CartContext';
import CartTotal from './CartTotal';
import CartItem from './CartItem';

import Button from '@material-ui/core/Button';


//카트 아이템 리스트와 정보
const Inventory = [
  {
    title: "Drink",
    products: [
      { id: 1, title: "Milk", price: 500 },
      { id: 2, title: "Water", price: 800 },
      { id: 3, title: "Coffee", price: 1000 }
    ]
  },
  {
    title: "Fruit",
    products: [
      { id:4, title: "Orange", price: 900 },
      { id:5, title: "Banana", price: 1200 },
      { id:6, title: "Apple", price: 2000 }
    ]
  }
];

  class App extends Component {
  // 선택된 아이템을 담을 스테이트
  state = {
    items: []
  };

  // 이벤트 함수들
  // 카트에 담기
  onAddToCart = this.onAddToCart.bind(this);
  onAddToCart(p) {
    this.setState({
      itesm: [...this.state.items, p]
    });
  }

  // 카트에서 제거
  onRemoveFromCart = this.onRemoveFromCart.bind(this);
  onRemoveFromCart(i) {
    const newArray = [...this.state.items];
    newArray.splice(i, 1);

    this.setState({
      items: newArray
    });
  }

  render() {
    return (
      <CartContext.Provider>
      <div className="App">
        <h1>React-cart</h1>
          <Button variant="contained" color="secondary">
            HI NATURE
          </Button>
        <CartItem price={Inventory.map(item => (<div>{item.title}</div>))} />
        <footer className="App-total-footer">
          <div>
            <CartTotal />
          </div>
        </footer>
      </div>
      </CartContext.Provider>
    );
  }
}

export default App;
