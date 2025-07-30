import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

const page = () => {
	console.log("page component rendered");

	return (
		<div className="from-bgDark to-bgDark relative min-h-screen overflow-hidden bg-gradient-to-br via-zinc-900">
			<Navbar />
			<HeroSection />
			<div className="relative z-100 mx-auto max-w-7xl px-6 lg:px-8">
				<SearchBar />
			</div>
		</div>
	);
};

export default page;
