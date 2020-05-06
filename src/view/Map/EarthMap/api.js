import {server} from '../../../tools/server'

// 中间，疫情情况
export class EarthMapApi {
  static getData(data) {
    return server.connection('GET', '/epidemic/getProvincesEpidemic', data)
  }
}
