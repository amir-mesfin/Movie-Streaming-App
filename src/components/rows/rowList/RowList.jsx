import React from 'react'
// import style from './rowList.module.css'
import Row from '../row/Row'
import requests  from '../../../utils/requests'
function RowList() {
  return (
    <>
    <Row 
          title="MLA Originals"
          fetchUrl={requests.fetchNetflixOriginals}
    />
    </>
  )
}

export default RowList
