import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Welcome() {
	const [handlePageTitleChange] = useOutletContext();
    const pageTitle = "Welcome"

	useEffect(() => {
        handlePageTitleChange(pageTitle)
    }, []);

	return (
		<>
            <div className="text-2xl">This is welcome</div>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
				aliquam laboriosam quidem beatae doloribus eaque ad porro voluptatum!
				Sint hic voluptatum nobis dolore repellendus suscipit. Quod a tempore
				voluptatum! Rerum.
			</p>
		</>
	);
}

export default Welcome;
