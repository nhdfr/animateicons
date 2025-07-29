import { Button } from "@/components/ui/button";

const page = () => {
	console.log("page component rendered");
	return (
		<div>
			hello world
			<Button>Click me</Button>
		</div>
	);
};

export default page;
