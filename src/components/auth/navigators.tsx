import React from 'react'
import { SlideNavigator } from '../styled components/slide-navigators'

type Props = {}

const Navigators = (props: Props) => {
  return (
    <div>
        <SlideNavigator />
        <SlideNavigator width={45}/>
        <SlideNavigator />
        <SlideNavigator />
    </div>
  )
}

export default Navigators