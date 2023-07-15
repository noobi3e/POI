import { FC } from 'react'

interface AddNewStaffFormProps {}
export const AddNewStaffForm: FC<AddNewStaffFormProps> = () => {
  return (
    <>
      <div className='fixed top-0 left-0 w-full h-[100dvh] z-10'>
        <div className='absolute top-0 left-0 w-full h-full backdrop-blur-[3px] bg-sky-950 bg-opacity-40 z-20' />

        <section className='z-30 border p-5 bg-white m-auto relative w-max mt-10 rounded-md shadow-md'>
          <h3 className='text-xl font-semibold'>Add New Staff</h3>

          <div className='grid mt-5 gap-5 grid-cols-2'>
            <label htmlFor='name' className='flex flex-col text-sky-950'>
              <span className='capitalize font-[500]'>
                name <strong className='text-red-500'>*</strong>{' '}
              </span>
              <input
                type='text'
                className='border bg-slate-100 py-2 px-4 rounded-md outline-none focus:bg-slate-200 focus:border-slate-400'
              />
            </label>
            <label htmlFor='name' className='flex flex-col text-sky-950'>
              <span className='capitalize font-[500]'>
                name <strong className='text-red-500'>*</strong>{' '}
              </span>
              <input
                type='text'
                className='border bg-slate-100 py-2 px-4 rounded-md outline-none focus:bg-slate-200 focus:border-slate-400'
              />
            </label>
            <label
              htmlFor='name'
              className='flex flex-col text-sky-950 col-span-full'>
              <span className='capitalize font-[500]'>
                name <strong className='text-red-500'>*</strong>
              </span>
              <input
                type='text'
                className='border bg-slate-100 py-2 px-4 rounded-md outline-none focus:bg-slate-200 focus:border-slate-400'
              />
            </label>
          </div>
        </section>
      </div>
    </>
  )
}
