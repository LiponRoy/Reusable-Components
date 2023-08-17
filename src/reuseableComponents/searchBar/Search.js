import React from 'react';


const Search = ({placeholder, value, onChange }) => {
    
	return (
		<div>
			<input type='text' placeholder={placeholder} value={value} onChange={onChange} 
			className=' w-full md:w-1/3 py-2 my-4 pl-2 border-2 border-[#FF9F43] rounded-md' />
			
		</div> 
	);
};

export default Search;