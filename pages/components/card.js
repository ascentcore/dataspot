import D3Visualization from './d3visualization'

export default function Card({ dbref, db, docs }) {
    return (
        <div className='column col-4 col-sm-6 col-xs-12'>
            <div className='card'>
                <div className='card-header'>{dbref}</div>
                <div className='card-body'>
                    <D3Visualization
                        db={db}
                        document={dbref}
                        key={docs[`${dbref}-setup`]}
                        rev={docs[`${dbref}-data`]}
                    />
                </div>
            </div>
        </div>
    )
}
