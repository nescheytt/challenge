import React from 'react'

// styles
import './styles.scss'

const mockList = [
  {
    href: '/',
    label: 'Electrónica, Audio y Video',
    key: 'electronica-audio-video',
  },
  {
    href: '/',
    label: 'iPod',
    key: 'ipod',
  },
  {
    href: '/',
    label: 'Reproductores',
    key: 'reproductores',
  },
  {
    href: '/',
    label: 'iPod touch',
    key: 'ipod-touch',
  },
  {
    href: '/',
    label: '32 GB',
    key: '32-gb',
  },
]

const Breadcrumb = () => {
  return (
    <div className="breadcrumb-container">
      <ul className="breadcrumb-ul">
        {mockList.map(item => {
          return (
            <li key={item.key} className="breadcrumb-li">
              <a href={item.href} className="breadcrumb-link">{item.label}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Breadcrumb
