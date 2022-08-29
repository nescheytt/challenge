import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

// components
import Layout from '../../components/layouts'
import Breadcrumb from '../../components/breadcrumb'
import Card from '../../components/card'

// styles
import './styles.scss'
import '../../assets/scss/grid/container.scss'
import '../../assets/scss/grid/row.scss'
import '../../assets/scss/grid/col.scss'

const SearchResult = () => {
  const [card, setCard] = useState<any>()
  const [search, setSearch] = useSearchParams()

  useEffect(() => {
    const fetchPost = async () => {
       const response = await fetch(
          `https://api.mercadolibre.com/sites/MLA/search?q=${search.get('search')}&limit=4`
       );
       const data = await response.json()
       setCard(data)
    }

    fetchPost()
 }, [search])

  return (
    <Layout>
      <div className="container fluid">
        <div className="row">
          <div className="col-12">
            <Breadcrumb />

            <div className="page-search-result">
              {card?.results.map((item: any, i: React.Key | null | undefined) => {
                return(
                  <Card key={i} item={item} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SearchResult
