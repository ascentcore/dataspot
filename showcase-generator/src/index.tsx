import '../../pages/assets/spectre.css'
import '../assets/styles.css'

import plot from '../../samples/frontend/mesh'

const el = document.getElementById('app')
if (el !== null) {
    plot(el)
}
