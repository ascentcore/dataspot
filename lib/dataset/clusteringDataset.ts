import arcDataset from './clustering/arcDataset'
import blobDataset from './clustering/blobDataset'
import concentricRingsDataset from './clustering/concentricRingsDataset'
import fillSpaceDataset from './clustering/fillSpaceDataset'
import noisyWithBlobDataset from './clustering/noisyWithBlobDataset'
import potatoDataset from './clustering/potatoDataset'

/**
 * Class documentation
 *
 * @sample_only documentation/clusteringDataset
 */
export default class ClusteringDataset {
    public static arc: Function = arcDataset

    public static blob: Function = blobDataset

    public static concentricRings: Function = concentricRingsDataset

    public static fillSpace: Function = fillSpaceDataset

    public static noisyWithBlob: Function = noisyWithBlobDataset

    public static potatoDataset: Function = potatoDataset
}
