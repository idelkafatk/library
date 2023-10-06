import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux'
import axios from 'axios'

const App = () => {
  const libraryApi = axios.create({
    baseURL: 'https://openlibrary.org/api/',
  })

  const [bookData, setBookData] = useState(null) // Состояние для хранения данных о книге

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await libraryApi.get('books', {
          params: {
            bibkeys: 'ISBN:0451526538',
            callback: 'mycallback',
          },
        })

        setBookData(response.data)
      } catch (error) {
        console.error('Ошибка при получении книги', error)
      }
    }

    fetchBook()
  }, []) // Запускаем запрос один раз при монтировании компонента

  return (
    <Provider store={store}>
      <div>
        <h1>Hi</h1>
        {bookData && (
          <div>
            <h2>Book Information</h2>
            <pre>{JSON.stringify(bookData, null, 2)}</pre>
          </div>
        )}
      </div>
    </Provider>
  )
}
export default App
