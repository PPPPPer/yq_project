import {server} from '../../../tools/server'

// 右上，全国趋势图
export class TrendMapApi {
  static getData(data) {
    return server.connection('GET', '/epidemic/getDynamicGrowth', data)
  }
}
