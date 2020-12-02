import ClusteringDataset from '../datasets/clustering'
import MeanShift from './meanShift'

const fitData = ClusteringDataset.blob(40)
const testData = ClusteringDataset.blob(2)
let serializedConfig1: any

describe('K-means', () => {
    it('performs clustering with k-means (no convergence check)', () => {
        const meanShift = new MeanShift()
        const fitPredictions = meanShift.fit(fitData)
        expect(fitPredictions.length).toEqual(fitData.length)
        const predictions: number[] = meanShift.predict(testData)
        serializedConfig1 = meanShift.serialize()
        expect(predictions[0]).toEqual(predictions[1])
        expect(predictions[2]).toEqual(predictions[3])
        expect(predictions[4]).toEqual(predictions[5])
        expect(predictions[0]).not.toEqual(predictions[3])
        expect(predictions[0]).not.toEqual(predictions[5])
        expect(predictions[2]).not.toEqual(predictions[5])
    })

    it('can load state', () => {
        const meanShift = new MeanShift()
        meanShift.loadState(serializedConfig1)
        const predictions: number[] = meanShift.predict(testData)
        expect(predictions[0]).toEqual(predictions[1])
        expect(predictions[2]).toEqual(predictions[3])
        expect(predictions[4]).toEqual(predictions[5])
        expect(predictions[0]).not.toEqual(predictions[3])
        expect(predictions[0]).not.toEqual(predictions[5])
        expect(predictions[2]).not.toEqual(predictions[5])
    })
})
