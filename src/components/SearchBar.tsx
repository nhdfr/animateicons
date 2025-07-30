import React from "react";

const SearchBar: React.FC = () => {
	return (
		<div className="w-full">
			<input
				type="text"
				className="bg-primary/10 border-primary/20 focus:ring-primary/50 relative mt-5 w-full rounded-md border px-4 py-2 text-sm text-white shadow-lg placeholder:text-zinc-300 focus:ring-1 focus:outline-none"
				placeholder="Search for icons, animations, or categories..."
			/>
		</div>
	);
};

export default SearchBar;
