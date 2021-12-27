import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { createServer, Model } from 'miragejs'

createServer({

  models: {
    transaction:Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id:1,
          title:'freelance',
          type:'deposit',
          category:'venda',
          amount:6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id:2,
          title:'aluguel',
          type:'withdraw',
          category:'dispesas',
          amount:1000,
          createdAt: new Date('2021-02-12 10:00:00')
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      
      return schema.create('transaction',data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
