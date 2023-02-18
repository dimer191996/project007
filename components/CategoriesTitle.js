
function CategoriesTitle({ title }) {

    return (
        <div>
            <div className=" my-5">
                <div className="  flex justify-center uppercase">
                    <div className="w-full flex justify-center items-center rounded bg-white py-2 px-2">
                    <div className="h-2 w-full bg-red-700"></div> 
                    <h5 className="text-black lg:w-4/5  w-5/6 bg-gray-200 rounded text-center px-2 font-bold">{title}</h5>
                    <div className="h-2 w-full bg-red-700"></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CategoriesTitle