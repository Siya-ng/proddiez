import React, { Component } from 'react'
import './App.css'

import Nav from './Nav'
import Product from './Product'

// from the db
const products = [
  {
    title: 'Product Hunt Project X',
    subtitle: 'Something different from the Product Hunt team',
    subCount: 2716
  },
  {
    title: 'MeetPro',
    subtitle: 'Meet with investors, no warm introduction needed ✨',
    subCount: 85
  },
  {
    title: 'Plutio',
    subtitle: '🚨 One place for everything to run your freelance business 👌',
    subCount: 524
  },
  {
    title: 'Tesla Powerbank',
    subtitle: 'A Tesla supercharger for your phone!',
    subCount: 816
  },
  {
    title: 'Briefcase by AppSumo',
    subtitle: 'Netflix for software',
    subCount: 581
  },
  {
    title: 'Product Reviews',
    subtitle: 'Concise and unbiased software product reviews',
    subCount: 375
  },
  {
    title: 'Ello 3.0',
    subtitle: 'A social network for artists',
    subCount: 268
  },
  {
    title: 'Orbitkey Ring',
    subtitle: 'The keyring, reinvented',
    subCount: 188
  },
  {
    title: 'Who is mining?',
    subtitle: 'A simple tool to see which sites are mining cryptocurrency',
    subCount: 148
  }
]

class App extends Component {
  constructor (props) {
    super()

    // this is where i init the state
    this.state = {
      counter: 12,
      keyword: '',
      products: products,
      newProduct: {}
    }
  }

  clickButton (e) {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  handleKeyup (e) {
    var typedValue = e.target.value
    this.setState({
      keyword: typedValue,
      newProduct: {
        title: typedValue,
        subtitle: 'Test',
        subCount: 0
      }
    })
  }

  addProduct (e) {
    this.setState({
      products: [
        ...this.state.products,
        this.state.newProduct
      ],
      newProduct: {}
    })
  }

  handleSearch (e) {
    let filteredProducts = products.filter(product => {
      return product.title.toLowerCase().includes(e.target.value)
    })
    this.setState({
      products: filteredProducts
    })
  }

  render () {
    const navProp = {
      username: 'Shumin',
      title: 'Proddiez',
      useremail: 'shumin@gmail.com'
    }

    const allProducts = this.state.products.map((product, index) => {
      return <Product key={index} productObj={product} />
    })

    return (
      <div>
        <Nav
          navProp={navProp}
        />
        <div className='container'>
          <div className='row'>
            <div className='input-field col s6'>
              <input id='new-product' type='text'
                onKeyUp={(e) => this.handleKeyup(e)}
              />
              <label className='active' htmlFor='new-product'>
                New Product
              </label>
              <button className='btn' onClick={(e) => this.addProduct(e)}>+</button>
            </div>
            <div className='input-field col s6'>
              <input id='search-product' type='text'
                onKeyUp={(e) => this.handleSearch(e)}
              />
              <label className='active' htmlFor='search-product'>
                Search
              </label>
            </div>
          </div>
          <div className='row App-products'>
            { allProducts }
          </div>
        </div>
      </div>
    )
  }
}

export default App
