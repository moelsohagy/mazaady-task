import api from '@/axios'

export default {
  getAllCategories() {
    return api().get('get_all_cats')
  },
  findOne(id) {
    return api().get(`stores/${id}`)
  },
}
