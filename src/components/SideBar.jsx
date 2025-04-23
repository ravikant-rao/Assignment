import { HambergContext } from '../context'

const SideBar = () => {

  return (
    <div className='bg-zinc-200 h-[90vh] w-44'>
      <ul className='p-6'>
            <li className='px-3 py-1 cursor-pointer rounded-lg hover:bg-gray-100'>Shorts</li>
            <li className='px-3 py-1 cursor-pointer rounded-lg hover:bg-gray-100'>Subscription</li>
            <li className='px-3 py-1 cursor-pointer rounded-lg hover:bg-gray-100'>Recent</li>
            <li className='px-3 py-1 cursor-pointer rounded-lg hover:bg-gray-100'>News</li>
        </ul>
    </div>
  )
}

export default SideBar