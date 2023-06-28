"use client"

import {RiDeleteBin5Line} from 'react-icons/ri'
import {BsFillPencilFill} from 'react-icons/bs'

const Singleblog = async({data, key,currentUser}: any) => {
    return (
        <div className="w-[1100px] border-2 p-2">
            <div>
                <div className="flex gap-2 justify-between items-center">
                    {/* <Image width={400} height={300} alt="" src={data.image} /> */}
                    <div className='w-[530px] flex flex-col gap-4 leading-[1.5]'>
                        <h1>{data.title}</h1>
                        <p className='mt-2'>{data.description}</p>
                    </div>
                </div>

                {
                    data.userId ===currentUser?.id && (
                        <div className="flex items-center gap-4 mt-4">
                        {/* <RiDeleteBin5Line onClick={onDelete} className=" cursor-pointer text-[1.5rem]"/>
                        <BsFillPencilFill onClick={() => router.push(`/blogs/${data.id}`)} className=" cursor-pointer text-[1.2rem]"/> */}
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Singleblog