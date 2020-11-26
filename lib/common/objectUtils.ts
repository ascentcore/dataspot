import rfdc from 'rfdc'

const rfdcInstance = rfdc()

export default class ObjectUtils {
    static deepClone<T>(obj: T): T {
        return rfdcInstance(obj)
    }
}
