import { AddNewStaffForm } from '@/components/AddNewStaffForm'
import { Notifications } from '@/components/Notifications'

const Home = () => {
  return (
    <>
      <section className='border rounded-md bg-white m-auto mt-10 w-max'>
        <h2 className='border-b py-2 px-2'>All Notifications</h2>

        <Notifications />
      </section>
      <AddNewStaffForm />
    </>
  )
}

export default Home
