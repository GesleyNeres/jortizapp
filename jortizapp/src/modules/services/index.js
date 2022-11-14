import { setBearerToken } from '@/http/index.js'
import serializer from '@/utils/serializer'

export const setHeaderToken = token => setBearerToken(token)

export const setLocalToken = token => localStorage.setItem('NRSUSRAPP', token)

export const getLocalToken = () => localStorage.getItem('NRSUSRAPP')


export const deleteLocalData = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('client')
    localStorage.removeItem('service')
    localStorage.removeItem('NRSUSRAPP')
    localStorage.removeItem('employee')
    localStorage.removeItem('payment')
}

export const setLocalUserPersistent = (id, data) => localStorage.setItem(id,serializer.serialize(data))

export const getLocalUserPersistent = (id) => serializer.deserialize(localStorage.getItem(id))

export const setLocalClientsPersistent = (id, data) => localStorage.setItem(id,serializer.serialize(data))

export const getLocalClientsPersistent = (id) => serializer.deserialize(localStorage.getItem(id))

export const setLocalServicesPersistent = (id, data) => localStorage.setItem(id,serializer.serialize(data))

export const getLocalServicesPersistent = (id) => serializer.deserialize(localStorage.getItem(id))

export const getLocalEmployeesPersistent = (id) => serializer.deserialize(localStorage.getItem(id))

export const setLocalEmployeesPersistent = (id, data) => localStorage.setItem(id,serializer.serialize(data))

export const getLocalPaymentsPersistent = (id) => serializer.deserialize(localStorage.getItem(id))

export const setLocalPaymentsPersistent = (id, data) => localStorage.setItem(id,serializer.serialize(data))


