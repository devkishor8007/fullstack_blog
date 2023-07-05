"use client"

import { useFormik } from 'formik';
import Input from "@/components/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { BlogSchema } from '@/helper/validator.schema';



const Page = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: BlogSchema,
    onSubmit: (values) => {
      axios.post('/api/blog', values)
        .then(() => {
          setTimeout(() => {
            router.push('/')
            router.refresh()
          })
        }).catch((error: any) => {
        })
    },
  });
  return (
    <div className=''>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex flex-col justify-center text-xs md:text-sm h-[450px] w-[200px] md:w-[350px] mx-auto gap-2 mb-[200px]'>
          <div>
            <label htmlFor="title">title</label>

            <Input placeholder='Enter your title' id='title' name='title' type='text' onChange={formik.handleChange} value={formik.values.title} />
            {formik.errors.title && formik.touched.title && (
              <div className='text-red-500 mb-2'>{formik.errors.title}</div>
            )}
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Input placeholder='Enter your description' id='description' name='description' type='text' onChange={formik.handleChange} value={formik.values.description} />
            {formik.errors.description && formik.touched.description && (
              <div className='text-red-500 mb-2'>{formik.errors.description}</div>
            )}
          </div>

          <button className='bg-cyan-400 w-1/2 justify-center p-2 ml-auto mr-auto mt-2 rounded-2xl hover:text-white hover:bg-black' type="submit">Create</button>
        </div>
      </form>
    </div>

  )
}

export default Page
