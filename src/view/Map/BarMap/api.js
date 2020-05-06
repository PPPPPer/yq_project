import {server} from '../../../tools/server'

// 左上角，top10
export class BarMapApi {
  static getData(data) {
    return server.connection('GET', '/epidemic/getEpidemicArea', data)
  }
}
