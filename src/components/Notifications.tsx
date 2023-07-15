import { FC } from 'react'

interface NotificationsProps {}
export const Notifications: FC<NotificationsProps> = () => {
  return (
    <ul className='px-5 flex flex-col'>
      <Notification />
      <Notification />
      <Notification />
    </ul>
  )
}

const Notification = () => (
  <li className='py-5 border-b flex items-center gap-5'>
    <div className='w-10 aspect-square bg-red-500 rounded-full' />

    {/* Info box */}
    <div className='flex flex-col'>
      <h2>Narendre modi liked your post</h2>
      <p className='text-[13px]'>
        <code>👍</code> 0 mins ago
      </p>
    </div>

    {/* Noti */}
    <button className='ml-auto'>
      <code>😷😷😷</code>
    </button>
  </li>
)
