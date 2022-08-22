import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import logo from '../../assets/images/logo.svg'
import './styles.scss'
import '../../assets/scss/grid/container.scss'
import '../../assets/scss/grid/row.scss'
import '../../assets/scss/grid/col.scss'
import Layout from '../../components/layouts'

interface DataProps {
  exampleMessage: string
}

const List = () => {
  const [data, setData] = useState<DataProps>()

  const fetchData = useCallback(async () => {
    axios
      .get("http://localhost:4000/")
      .then((response) => setData(response.data))
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <Layout>
      <div className="App container fluid">
        <div className="row">
          <div className="col-12">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data?.exampleMessage}
              </a>
            </header>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default List
