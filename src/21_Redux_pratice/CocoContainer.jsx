import {buyCoco, addCoco} from './Coco/Cocoaction'
import { connect } from 'react-redux'

const CocoContainer = (Props) => {
  return (
    <div className='text-center mt-56'>
        <h1 className='text-3xl font-semibold'>Number of coco : {Props.coco}</h1>
        <div className='flex gap-16 mt-7 justify-center'>
            <button className='border border-black px-5 py-2' onClick={Props.buyCoco}>BUY_COCO</button>
            <button className='border border-black px-5 py-2' onClick={Props.addCoco}>PURCHASE_COCO</button>
        </div>
    </div>
  )
}

let mapStateToProps = State => {
    return{
        coco: State.coco
    }
}

let mapDispatchToProps = dispatch => {
    return{
        buyCoco: () => dispatch(buyCoco()),
        addCoco: () => dispatch(addCoco())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CocoContainer)