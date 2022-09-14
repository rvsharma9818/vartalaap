import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class MainPageService {


    constructor(private http: HttpClient) {
    }

    getConnectUser() {


        return this.http.get('https://vartlaaap.herokuapp.com/user/bytoken')
    }
    updateUserProfileImg(image) {
        const fd = new FormData()
        fd.append('profileImage', image)
        return this.http.patch(`https://vartlaaap.herokuapp.com/user/image/`, fd)
    }
    disconnectUser(userId) {
        localStorage.clear()
        return this.http.patch('https://vartlaaap.herokuapp.com/user/disconnect', { userId })
    }
    updateUserPassword(oldPassword, newPassword) {
        return this.http.patch(`https://vartlaaap.herokuapp.com/user/password/`, { oldPassword, newPassword })
    }
    updateUserInfo(user) {
        return this.http.patch(`https://vartlaaap.herokuapp.com/user`, { user })
    }
}