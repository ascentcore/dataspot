import './assets/spectre.min.css'
import './assets/styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <header className='navbar' style={{ padding: 10, marginBottom: 20, borderBottom: '1px solid #FAFAFA' }}>
                <section className='navbar-section'>
                    <a href='/' className='navbar-brand mr-2'>
                        Dataspot
                    </a>
                    <a href='/functions' className='btn btn-link'>
                        Functions
                    </a>
                    <a href='/datasets' className='btn btn-link'>
                        Datasets
                    </a>
                    <a href='/benchmarks' className='btn btn-link'>
                        Benchmarks
                    </a>
                    <a href='/regressions' className='btn btn-link'>
                        Regressions
                    </a>
                    <a href='/segmentation' className='btn btn-link'>
                        Segmentation
                    </a>
                    <a href='/hierarchy' className='btn btn-link'>
                        Hierarchy
                    <a href='/clustering' className='btn btn-link'>
                        Clustering
                    </a>
                </section>
            </header>
            <div className='container'>
                <Component {...pageProps} />
            </div>
        </div>
    )
}
