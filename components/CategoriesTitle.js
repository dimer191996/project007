
function CategoriesTitle({ title }) {

    return (
        <div>
            <div className=" my-5">
                <div className="  flex justify-center">
                    <div className="w-full flex justify-center items-center rounded bg-white py-2 px-2">
                    <div className="h-2 w-full bg-red-700"></div> 
                    <h3 className="text-blacks w-4/5 text-center px-2 lg:text-2xl font-bold">{title}</h3>
                    <div className="h-2 w-full bg-red-700"></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CategoriesTitle