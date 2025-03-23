import React from 'react'

export const ProductDescription = () => {
    return (
        <div className='ring-1 ring-slate-900/10 rounded-lg'>
            <div className='fex gap-3'>
                <button className='medium-14 p-3 w-32 border-b-2 border-secondary'>Description</button>
                <button className='medium-14 p-3 w-32'>Care Guide</button>
                <button className='medium-14 p-3 w-32'>Color Guide</button>
            </div>
            <hr className='h-[1px] w-full' />
            <div className='flex flex-col gap-3 p-3'>
                <div>
                    <h5 className='h5'>Detail</h5>
                    <p className='text-sm'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ex minima culpa facilis, amet illo consectetur voluptates, unde expedita nam incidunt corrupti cumque. Libero neque natus ducimus officia eum dolore.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quam vitae velit dolores ducimus deleniti eligendi cupiditate cumque dolore officiis quis, ex incidunt. Doloremque quam labore consectetur modi accusantium natus.</p>
                    <div>
                        <h5 className='h5'>Benifit</h5>
                        <ul className='list-disc pl-5 text-sm text-gray-30 flex -flex-col gap-1'>
                            <li>High-quality materials</li>
                            <li>Easy to clean</li>
                            <li>Easy to use</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
