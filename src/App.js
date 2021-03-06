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
        <CartItem 
          // Inventory.products.price를 가져오는 방법은 무엇인가??
          price={Inventory.map(item => (<div>{item.title}</div>))} 
        />
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

// 아이템리스트에서 카트에 담기 빼기 구현 어려움.
// 일단 카트에 담겨진 상태에서 선택, 전체선택, 합계 구현해 보기

// 필요한 데이터의 흐름 파악하기
// 필요한 이벤트 함수들을 확실히 파악하기

// 배열다루는 법을 더 연습할 것.(es6 문법포함)