import './assets/spectre.min.css'
import './assets/spectre-icons.min.css'
import './assets/styles.css'

const margin = 200

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <div style={{ marginLeft: margin }} id='labEnvironment'>
            <div
                style={{
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    width: margin,
                    position: 'fixed',
                    left: 0,
                    bottom: 0,
                    top: 0,
                    overflow: 'auto'
                }}
            >
                <ul className='nav'>
                    <li className='nav-item'>
                        <a href='/'>Lab</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#'>Heuristics</a>
                        <ul className='nav'>
                            <li className='nav-item'>
                                <a href='/samples/heuristics/benchmark'>Banchmark</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/samples/heuristics/circleFit'>Circle Fit Problem</a>
                            </li>
                        </ul>
                    </li>
                    <li className='nav-item'>
                        <a href='#'>Regressions</a>
                        <ul className='nav'>
                            <li className='nav-item'>
                                <a href='/samples/regressions/linearRegression'>Linear Regression</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/samples/regressions/multivariateLinearRegression'>
                                    Multivariate Linear Regression
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href='/samples/regressions/polynomialRegression'>Polynomial Regression</a>
                            </li>
                        </ul>
                    </li>
                    <li className='nav-item'>
                        <a href='#'>Clustering</a>
                        <ul className='nav'>
                            <li className='nav-item'>
                                <a href='/samples/clustering/kmeans'>KMeans</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/samples/clustering/dbscan'>DBScan</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/samples/clustering/datasets'>Datasets</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/samples/clustering/comparison'>Comparison</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/samples/clustering/segmentation'>Image Segmentation</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/samples/clustering/hierarchy'>Hierarchical Clustering</a>
                            </li>
                        </ul>
                    </li>
                    <li className='nav-item'>
                        <a href='#'>Functions</a>
                        <ul className='nav'>
                            <li className='nav-item'>
                                <a href='/samples/functions/activation'>Activation Functions</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/samples/functions/benchmark'>Benchmark Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li className='nav-item'>
                        <a href='#'>Utils</a>
                        <ul className='nav'>
                            <li className='nav-item'>
                                <a href='/samples/preprocessing/labelEncoder'>Label Encoder</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div style={{ padding: 10 }}>
                <Component {...pageProps}></Component>
            </div>
        </div>
    )
}
