import {BiChevronsRight} from "react-icons/bi";


const Alert = ({close, label, title, onclick}) => {

    return (
        <div className={`fixed inset-0 z-50 bg-gray-400 backdrop-blur bg-opacity-25 flex flex-col items-center justify-center`}>
            <div className="p-5 w-96 card-custom flex flex-col gap-2 md:my-10 bg-gray-100 rounded">
                <div className="p-3 border border-gray-500/30 rounded-lg relative w-full">
                    <div className="flex flex-row justify-between items-center px-2 text-cyan-800 dark:text-cyan-400 cursor-pointer">
                        <span className="dark:text-gray-200 absolute -top-3 bg-gray-100 dark:bg-gray-800 px-2 border border-gray-300 dark:border-gray-700 rounded">{title}</span>
                        <BiChevronsRight size={30} onClick={() => close()} className="hover:text-cyan-400 cursor-pointer absolute -top-4 left-4 bg-gray-100 dark:bg-gray-800 px-1 rotate-180"/>
                    </div>
                    <div className="flex flex-col gap-4 py-7">
                       <span className="flex dark:text-gray-200 items-center justify-center">
                           {label}
                       </span>
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <div onClick={() => onclick()} className="bg-cyan-500 border border-cyan-500 hover:bg-cyan-600 cursor-pointer py-1 w-20 rounded-md text-center text-white">
                                بله
                            </div>

                            <div onClick={() => close()}
                                 className="bg-gray-100 border border-cyan-500 cursor-pointer py-1 w-20 rounded-md text-center text-cyan-500">
                                انصراف
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alert;
