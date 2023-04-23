import React from 'react'

const AdvancedTimeSheet = () => {
    return (
        <>
            <div>
                <label className="block text-gray-700 text-[12px] py-2">
                    Optional Task Detail
                </label>
                <input className="shadow appearance-none bg-inputG border rounded w-full py-3 text-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='text' placeholder='Enter details' />
            </div>
            <div>
                <label className="block text-gray-700 text-[12px] py-2">
                    Hours
                </label>
                <input className="shadow appearance-none bg-inputG border rounded w-full py-3 text-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='time' placeholder='Enter hours' />
            </div>
            <div>
                <label className="block text-gray-700 text-[12px] py-2">
                    Milleage
                </label>
                <input className="shadow appearance-none bg-inputG border rounded w-full py-3 text-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='number' placeholder='Enter milleage' />
            </div>
            <div>
                <label className="block text-gray-700 text-[12px] py-2">
                    Out-of-pocket expenses
                </label>
                <input className="shadow appearance-none bg-inputG border rounded w-full py-3 text-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='number' placeholder='Enter numeric' />
            </div>
        </>
    )
}

export default AdvancedTimeSheet