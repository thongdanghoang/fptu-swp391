import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../model/UserModal'

const initialState: User = {
  version : 0,
  username: '',
  fullName: '',
  email: '',
  phone: '',
  gender: '',
  birthday: '',
  weight: 0,
  height: 0,
  emailVerified : false,
  phoneVerified : false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      const {
        version  = 0,
        username = '',
        fullName = '',
        email = '',
        phone = '',
        gender = '',
        birthday = '',
        weight = 0,
        height = 0,
        emailVerified  = false,
        phoneVerified  = false,
      } = action.payload
      state.version = version ? version : state.version
      state.username = username ? username : state.username
      state.fullName = fullName ? fullName : state.fullName
      state.email = email ? email : state.email
      state.phone = phone ? phone : state.phone
      state.gender = gender ? gender : state.gender
      state.birthday = birthday ? birthday : state.birthday
      state.weight = weight ? weight : state.weight
      state.height = height ? height : state.height
      state.emailVerified = emailVerified ? emailVerified : state.emailVerified
      state.phoneVerified = phoneVerified ? phoneVerified : state.phoneVerified
    },
    resetUser: (state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.assign(state, initialState);
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateUser , resetUser} = userSlice.actions

export default userSlice.reducer