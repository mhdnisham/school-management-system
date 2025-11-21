import React from 'react'
import AdClasess from './AdClasess'
import { Outlet, useNavigate } from 'react-router-dom'
import { path } from 'framer-motion/m'

const nav=[
  {name:"Classes",path:"adclasses"},
  {name:"Assign Teachers",path:"adassineteachers"},
  {name:"Manage Student",path:'managestudent'},
  {name:"Class Summery",path:'adsummery'}

]

function AdClassManagment() {
const navigation=useNavigate()

  return (
    <div>
      <div className='overflow-x-auto'>
          <div className="flex gap-3 p-2 w-max">
            {nav.map((btn, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 font-medium rounded-lg 
                             hover:bg-blue-100 transition-all duration-200 shadow-sm whitespace-nowrap"
                  onClick={()=>navigation(btn.path)}
              >
                <span>{btn.name}</span>
              </button>
            ))}
          </div>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default AdClassManagment