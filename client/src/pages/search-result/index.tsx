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
  const [categories, setCategories] = useState<any>()
  const [search, setSearch] = useSearchParams()

  const fetchPost = async () => {
    const response = await fetch(`/api/items?q=${search.get('search')}`)
    const data = await response.json()
    setCard(data?.items)
    setCategories(data?.categories)
  }

  useEffect(() => {
    fetchPost()
 }, [search])

  return (
    <Layout>
      <div className="container fluid">
        <div className="row">
          <div className="col-12">
            <Breadcrumb categories={categories} />

            <div className="page-search-result">
              {card?.map((item: any, i: React.Key) => {
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
