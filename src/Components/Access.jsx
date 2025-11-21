import React from 'react'


function Access({ 
    Icon ,
    text ,
    onClick = () => console.log('Item clicked') 
}) {
    return (
        <button
            onClick={onClick}
            className="w-full max-w-sm flex items-center p-4 bg-white rounded-xl shadow-md 
                       cursor-pointer transition duration-300 ease-in-out 
                       hover:shadow-lg hover:border-blue-300 border border-transparent 
                       text-gray-800"
        >
            <div className="flex items-center justify-center w-10 h-10 rounded-full 
                            bg-blue-50/70 border border-blue-100 mr-4 flex-shrink-0">

                <Icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
            </div>

            <span className="text-base font-medium">
                {text}
            </span>
        </button>
    )
}

export default Access