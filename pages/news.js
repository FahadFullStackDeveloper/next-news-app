import styles from '../styles/News.module.css';

import Head from 'next/head';

const News = () => {
    return (


		<div className={styles.container}>

            <Head>
                <title>News</title>
                <meta name="description" content="Some description about this news page"/>
                <meta name="keyword" content="Next JS News site, Next JS, SPA, Develop by Fahad Amin"/>
                <meta name="author" content="Fahad Amin"/>
            </Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					News Page
				</h1>

				<p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet massa orci. 
                    Sed consectetur iaculis dui ut cursus. Vestibulum ante ipsum primis in faucibus orci 
                    luctus et ultrices posuere cubilia curae; Praesent eu ultrices risus. 
                    Morbi quis fermentum lorem, non accumsan sem. Morbi convallis et libero non maximus.
				</p>

				{/* <div className={styles.grid}>
					<a href="https://nextjs.org/docs" className={styles.card}>
						<h2>Documentation &rarr;</h2>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href="https://nextjs.org/learn" className={styles.card}>
						<h2>Learn &rarr;</h2>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/canary/examples"
						className={styles.card}
					>
						<h2>Examples &rarr;</h2>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.card}
					>
						<h2>Deploy &rarr;</h2>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
				</div> */}
			</main>
		</div>
    );
}
 
export default News;