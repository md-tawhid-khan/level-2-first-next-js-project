
import styles from "./About.module.css"

export const metadata={
    title:'next/about',
    describtion:'this is metadata page'
}

const AboutPage = () => {
    return (
        <div>
            <h1 className={styles.text_color}>Hello About Page</h1>
        </div>
    );
};

export default AboutPage;