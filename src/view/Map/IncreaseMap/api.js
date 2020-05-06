import {server} from '../../../tools/server'

// 左下，新增情况
export class IncreaseMapApi {
  static getData(data) {
    return server.connection('GET', '/epidemic/getEpidemicGrowthArea', data)
  }
}
