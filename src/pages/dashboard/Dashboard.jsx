import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Dashboard() {
	const [handlePageTitleChange] = useOutletContext();
    const pageTitle = "Dashboard"

	useEffect(() => {
        handlePageTitleChange(pageTitle)
    }, []);

	return (
		<>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
				aliquam laboriosam quidem beatae doloribus eaque ad porro voluptatum!
				Sint hic voluptatum nobis dolore repellendus suscipit. Quod a tempore
				voluptatum! Rerum.
			</p>
		</>
	);
}

export default Dashboard;
