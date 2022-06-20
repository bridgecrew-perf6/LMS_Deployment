import { NavLink } from "react-router-dom";


const Tab = ({ list }) => {
    return(
        <div className="flex justify-center">
                {
                    list.map( item => (
                        <NavLink 
                            key={item.text}
                            to={item.path} 
                            className={({isActive}) => `capitalize font-medium text-2xl py-2 px-6 mx-3 border-solid rounded-3xl ` + (isActive ? 'border border-[#415A80] text-[#415A80]' : 'border-trasparent text-black')}
                            end
                        >
                            { item.text }
                        </NavLink>
                    ))
                }
        </div>
    )
}

export default Tab;