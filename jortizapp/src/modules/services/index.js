import { setBearerToken } from '@/http/index.js'
import serializer from '@/utils/serializer'

export const setHeaderToken = token => setBearerToken(token)

export const setLocalToken = token => localStorage.setItem('NRSUSRAPP', token)

export const getLocalToken = () => localStorage.getItem('NRSUSRAPP')


export const deleteLocalData = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('NRSUSRAPP')
    /* localStorage.removeItem('client')
    localStorage.removeItem('employee')
    localStorage.removeItem('payslip') */
    /* localStorage.removeItem('service') */
}

export const setLocalUserPersistent = (id, data) => localStorage.setItem(id,serializer.serialize(data))

export const getLocalUserPersistent = (id) => serializer.deserialize(localStorage.getItem(id))
