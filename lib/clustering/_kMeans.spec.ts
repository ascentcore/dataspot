import ClusteringDataset from '../datasets/clustering'
import KMeans, { KMeansConfig } from './kMeans'

const fitData = ClusteringDataset.blob(1500)
const testData = ClusteringDataset.blob(2)
let serializedConfig1: any
let serializedConfig2: any

describe('K-means', () => {
    it('performs clustering with k-means (no convergence check)', () => {
        const kMeans = new KMeans(<KMeansConfig>{ clusters: 3 })
        expect(() => {
            kMeans.predict(testData)
        }).toThrow(
            'Algorithm was not initialized. Call fitData, fitDataAsnyc or load pretrained configuration using loadState'
        )
        const fitPredictions = kMeans.fit(fitData)
        expect(fitPredictions.length).toEqual(fitData.length)
        const predictions: number[] = kMeans.predict(testData)
        serializedConfig1 = kMeans.serialize()
        expect(predictions[0]).toEqual(predictions[1])
        expect(predictions[2]).toEqual(predictions[3])
        expect(predictions[4]).toEqual(predictions[5])
        expect(predictions[0]).not.toEqual(predictions[3])
        expect(predictions[0]).not.toEqual(predictions[5])
        expect(predictions[2]).not.toEqual(predictions[5])
    })
    it('performs clustering with k-means (convergence: 5)', () => {
        const kMeans = new KMeans(<KMeansConfig>{ clusters: 3, convergenceIterations: 5 })
        expect(() => {
            kMeans.predict(testData)
        }).toThrow(
            'Algorithm was not initialized. Call fitData, fitDataAsnyc or load pretrained configuration using loadState'
        )
        kMeans.fit(fitData)
        const predictions: number[] = kMeans.predict(testData)
        serializedConfig2 = kMeans.serialize()
        expect(predictions[0]).toEqual(predictions[1])
        expect(predictions[2]).toEqual(predictions[3])
        expect(predictions[4]).toEqual(predictions[5])
        expect(predictions[0]).not.toEqual(predictions[3])
        expect(predictions[0]).not.toEqual(predictions[5])
        expect(predictions[2]).not.toEqual(predictions[5])
    })
    it('able to load a state', () => {
        const localTestData = ClusteringDataset.blob(2)
        const kMeansFromSerialized1 = new KMeans()
        kMeansFromSerialized1.loadState(serializedConfig1)
        let predictions: number[] = kMeansFromSerialized1.predict(localTestData)
        expect(predictions[0]).toEqual(predictions[1])
        expect(predictions[2]).toEqual(predictions[3])
        expect(predictions[4]).toEqual(predictions[5])
        expect(predictions[0]).not.toEqual(predictions[3])
        expect(predictions[0]).not.toEqual(predictions[5])
        expect(predictions[2]).not.toEqual(predictions[5])
        const kMeansFromSerialized2 = new KMeans()
        kMeansFromSerialized2.loadState(serializedConfig2)
        predictions = kMeansFromSerialized2.predict(localTestData)
        expect(predictions[0]).toEqual(predictions[1])
        expect(predictions[2]).toEqual(predictions[3])
        expect(predictions[4]).toEqual(predictions[5])
        expect(predictions[0]).not.toEqual(predictions[3])
        expect(predictions[0]).not.toEqual(predictions[5])
        expect(predictions[2]).not.toEqual(predictions[5])
    })
})
