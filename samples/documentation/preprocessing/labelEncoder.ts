import LabelEncoder from '@ascentcore/dataspot/preprocessing/labelEncoder'

export default (async () => {
    const animals = ['🐕', '🐈', '🐕', '🐹', '🐕', '🐈', '🐈', '🐹']

    const labelEncoder = new LabelEncoder()
    const encoded = labelEncoder.fitTransform(animals)
    
    console.log(encoded) // displays [0, 1, 0, 2, 0, 1, 1, 2]
    console.log(labelEncoder.inverse([0, 1, 2])) // displays ["🐕", "🐈", "🐹"]

    const newAnimals = ['🐕', '🐈', '🐕', '🐤', '🦉', '🐸', '🦉', '🦉', '🐸', '🐤', '🐤']
    const newEncoding = labelEncoder.fitTransform(newAnimals)

    console.log(newEncoding) // displays [0, 1, 0, 3, 4, 5, 4, 4, 5, 3, 3]
    console.log(labelEncoder.inverse([0, 1, 2, 3, 4, 5])) // displays ["🐕", "🐈", "🐹", "🐤", "🦉", "🐸"]
})()
