import './assets/spectre.min.css'
import './assets/styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <div style={{ padding: 20 }}>
            <Component {...pageProps} />
        </div>
    )
}
