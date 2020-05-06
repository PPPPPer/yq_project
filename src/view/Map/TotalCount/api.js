import {server} from '../../../tools/server'

// 中下，总感染，总治愈
export class TotalCountApi {
  static getData(data) {
    return server.connection('GET', '/epidemic/getDomesticEpidemic', data)
  }
}
