import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";

const Home = () => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	return (
		<div class={style.home}>
			<div class={style.about}>
				<div class={style.imageContainer}>
					<div class={style.image} />
				</div>
				<div class={style.quote}>
					<div class={style.details}>
						Search Engine Optimization (SEO) is an ever-changing world, and our SEO strategies evolve with these changes. We use keywords and strategically placed web elements to reach your company’s search goals.
					</div>
					<div class={style.author}>- The Local Newspaper</div>
				</div>
			</div>
			<div class={style.bio}>
				<p class={style.bioleft}>
					Digital Marketing
				</p>
				<p class={style.bioright}>
					Travel
				</p>
			</div>
		</div>
	);
};

export default Home;
