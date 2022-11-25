'use client'

import React, { useState } from 'react';
import axios from 'axios'
import { BsFillHeartFill } from 'react-icons/bs'

import Mystyles from '../styles/mystyles.module.scss'

type Props = {
  slug: string
  like: number
}

const LikeButton = (props: Props) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    if (!active) {
      axios.put(`/api/like?slug=${props.slug}`, {})
      setActive(true)
    }
  }

  return (
    <div className={Mystyles.like}>
      <button
        className={Mystyles.likebutton}
        onClick={handleClick}>
          <BsFillHeartFill size={30} color={'#ccc'} />
      </button>
      <div>{props.like}</div>
    </div>
  )
}

export default LikeButton
