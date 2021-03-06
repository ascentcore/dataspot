/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-webpack-loader-syntax */
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import codeString from '!!raw-loader!../../../samples/documentation/preprocessing/labelEncoder'

export default function() {
    return (
        <div>
            <h3>Label Encoder Sample</h3>
            <SyntaxHighlighter language='javascript'>{codeString}</SyntaxHighlighter>
        </div>
    )
}
