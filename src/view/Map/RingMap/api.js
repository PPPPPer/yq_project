import {server} from '../../../tools/server'

// 右下，各种类型总人数
export class RingMapApi {
  static getData(data) {
    return server.connection('GET', '/epidemic/getDomesticEpidemic', data)
  }
}
