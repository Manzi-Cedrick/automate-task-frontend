import React from 'react'

const BasicTimeSheet = () => {
    return (
        <>
            <div>
                <label className="block text-gray-700 text-[12px] py-2">
                    Date Picker
                </label>
                <input className="shadow appearance-none bg-inputG border rounded w-full py-3 text-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" placeholder="pick date" />
            </div>
            <div>
                <label className="block text-gray-700 text-[12px] py-2">
                    Customer
                </label>
                <select className="shadow appearance-none bg-inputG border rounded w-full py-3 text-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value={'none'}>Choose Customer </option>
                    <option value={'user-1'}>Manzi Cedrick </option>
                    <option value={'user-2'}>MAnzi Israel </option>
                </select>
            </div>
            <div>
                <label className="block text-gray-700 text-[12px] py-2">
                    Task
                </label>
                <select className="shadow appearance-none bg-inputG border rounded w-full py-3 text-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value={'none'}>Choose Task </option>
                    <option value={'design'}>Design </option>
                    <option value={'frontend'}>Frontend  </option>
                </select>
            </div>
            <div>
                <label className="block text-gray-700 text-[12px] py-2">
                    Sub task
                </label>
                <select className="shadow appearance-none bg-inputG border rounded w-full py-3 text-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value={'none'}>Choose Task </option>
                    <option value={'design'}>Design </option>
                    <option value={'frontend'}>Frontend  </option>
                </select>
            </div>
        </>
    )
}

export default BasicTimeSheet