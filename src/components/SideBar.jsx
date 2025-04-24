import { HambergContext } from '../context'

const SideBar = () => {

  return (
    <div className='bg-zinc-200 h-[90vh] w-48 dark:bg-black dark:border-r-1 dark:text-white'>
      <ul className='p-6'>
            <li className='px-3 py-1 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:text-black'>Shorts</li>
            <li className='px-3 py-1 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:text-black'>Subscription</li>
            <li className='px-3 py-1 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:text-black'>Recent</li>
            <li className='px-3 py-1 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:text-black'>News</li>
        </ul>
    </div>
  )
}

export default SideBar