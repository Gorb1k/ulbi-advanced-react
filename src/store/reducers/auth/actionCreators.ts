import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatchType} from "../../index";
import axios from "axios";
import UserService from "../../../api/UserService";

export const AuthAC = {
    setUser: (user:IUser):SetUserAction => ({type:AuthActionEnum.SET_USER, payload: user}),
    setError: (error:string):SetErrorAction => ({type:AuthActionEnum.SET_ERROR, payload: error}),
    setIsAuth: (isAuth:boolean):SetAuthAction => ({type:AuthActionEnum.SET_AUTH, payload: isAuth}),
    setIsLoading: (isLoading:boolean):SetIsLoadingAction => ({type:AuthActionEnum.SET_IS_LOADING, payload: isLoading}),
    login: (username:string, password:string) => async (dispatch:AppDispatchType) => {
        try {
            dispatch(AuthAC.setIsLoading(true))
            setTimeout( async () => {
                const response = await UserService.getUsers()
                const mockUser = response.data.find((user) => user.username === username && user.password === password)
                if (mockUser) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUser.username)
                    dispatch(AuthAC.setUser(mockUser))
                    dispatch(AuthAC.setIsAuth(true))
                    dispatch(AuthAC.setIsLoading(false))
                } else {
                    dispatch(AuthAC.setError('Вы ввели неправильный логин или пароль'))
                }
            }, 1000)
        }catch (e) {
            dispatch(AuthAC.setError('Ошибка при логине'))
        }
    },
    logout: () => async (dispatch:AppDispatchType) => {
        try {
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            dispatch(AuthAC.setUser({} as IUser))
            dispatch(AuthAC.setIsAuth(false))
        }catch (e) {
            console.log(e)
        }
    }
}