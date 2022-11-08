import React, {useContext} from 'react'
import PostNavbar from './PostNavbar'
import BannerPost from './BannerPost'
import { AppContext } from '../../Context/AppContext'

function GetAnuncios() {

  useContext(AppContext);

  return (
    <>
        <PostNavbar/>
        <BannerPost/>
    </>
  )
}

export default GetAnuncios