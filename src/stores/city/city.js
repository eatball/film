/**
 * Copyright (C), 1998-2019, 腾讯科技有限公司
 * FileName: city
 * @Author:   Alun
 * Date:     2019/7/7 13:35
 * Description:
 * History:
 * <author>          <time>                <version>          <desc>
 * Alun               2019/7/7 13:35       0.0.1-SNAPSHOT     首次创建
 */



const state = {
  nm:window.localStorage.getItem('cityName') || '北京',
  id:window.localStorage.getItem('cityId') || 1
}
const actions = {

}
const mutations = {
  CITY_INFO(state, payload){
    state.nm = payload.nm
    state.id = payload.id
  }
}

export default {
  namespaces:true,
  state,
  actions,
  mutations
}












