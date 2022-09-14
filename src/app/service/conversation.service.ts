import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class ConversationService {

    token: string;
    constructor(private http: HttpClient) {
        this.setSesstion()

    }
    setSesstion() {
        this.token = localStorage.getItem('token')
    }
    sendMessage(conversationId: string, content: string, files: any) {
        const headers = new HttpHeaders().set('Authorization', this.token);
        const fd = new FormData()
        fd.append('conversationId', conversationId)
        fd.append('content', content)
        if (files) {
            for (const key of Object.keys(files)) {
                if (files[key].type.includes('image')) {
                    fd.append('images', files[key]);
                    console.log(files[key].type)
                }
                else if (files[key].type.includes('video')) {
                    fd.append('videos', files[key]);
                    console.log()
                }
            }

        }

        return this.http.post('https://vartlaaap.herokuapp.com/conversation', fd, {
            headers: headers
        })
    }
    getConversationByUsers(userid: string) {
        const headers = new HttpHeaders().set('Authorization', this.token);

        return this.http.get('https://vartlaaap.herokuapp.com/conversation/byusers/' + userid, {
            headers: headers
        })
    }
    getUserConversations() {
        const headers = new HttpHeaders().set('Authorization', this.token);

        return this.http.get('https://vartlaaap.herokuapp.com/conversation', {
            headers: headers
        })
    }
    searchAllUsers(term: string) {
        const headers = new HttpHeaders().set('Authorization', this.token);

        return this.http.get(`https://vartlaaap.herokuapp.com/user/search-users?term=${term}`, {
            headers: headers
        })
    }
    sendVocalMessage(convId: string, file: any) {
        const headers = new HttpHeaders().set('Authorization', this.token);
        const fd = new FormData()
        fd.append('audio', file)
        return this.http.post('https://vartlaaap.herokuapp.com/conversation/vocal/' + convId, fd, {
            headers: headers
        })
    }
    createConversation(destUserid: string) {
        const headers = new HttpHeaders().set('Authorization', this.token);

        return this.http.post('https://vartlaaap.herokuapp.com/conversation/conversation', { destination: destUserid }, {
            headers: headers
        })

    }
    getChatConversation(conversationId: string) {

        const headers = new HttpHeaders().set('Authorization', this.token);
        return this.http.get(`https://vartlaaap.herokuapp.com/conversation/${conversationId}`, {
            headers: headers
        })

    }
    markConversationasRead(userDest: string, conversationId: string) {
        const headers = new HttpHeaders().set('Authorization', this.token);
        return this.http.patch(`https://vartlaaap.herokuapp.com/conversation/message/${conversationId}`, { userDest }, {
            headers: headers
        })
    }
    changeConversationColor(convId: string, color: string) {
        const headers = new HttpHeaders().set('Authorization', this.token);
        return this.http.patch(`https://vartlaaap.herokuapp.com/conversation/color/${convId}`, { color }, {
            headers: headers
        })
    }
    changeConversationPseudo(convId: string, userid: string, content: string) {
        const headers = new HttpHeaders().set('Authorization', this.token);
        return this.http.patch(`https://vartlaaap.herokuapp.com/conversation/pseudos/${convId}`, { userid, content }, {
            headers: headers
        })
    }
    changeConversationEmoji(convId: string, emoji: string) {
        const headers = new HttpHeaders().set('Authorization', this.token);
        return this.http.patch(`https://vartlaaap.herokuapp.com/conversation/emoji/${convId}`, { emoji }, {
            headers: headers
        })
    }
    blockUserConversation(convId: string, userid: string) {
        const headers = new HttpHeaders().set('Authorization', this.token);
        return this.http.patch(`https://vartlaaap.herokuapp.com/conversation/block/${convId}`, { userid }, {
            headers: headers
        })
    }
    deleteMessage(messageId) {
        const headers = new HttpHeaders().set('Authorization', this.token);
        return this.http.delete(`https://vartlaaap.herokuapp.com/conversation/message/${messageId}`, {
            headers: headers
        })
    }
    unBlockConversation(convId: string, userid: string) {
        const headers = new HttpHeaders().set('Authorization', this.token);
        return this.http.patch(`https://vartlaaap.herokuapp.com/conversation/unblock/${convId}`, { userid }, {
            headers: headers
        })
    }
    archiveConversation(convId: string) {
        const headers = new HttpHeaders().set('Authorization', this.token);
        return this.http.patch(`https://vartlaaap.herokuapp.com/conversation/archive/${convId}`, null, {
            headers: headers
        })
    }
    deleteConversation(convId: string) {
        const headers = new HttpHeaders().set('Authorization', this.token);
        return this.http.patch(`https://vartlaaap.herokuapp.com/conversation/delete/${convId}`, null, {
            headers: headers
        })
    }
    setReceivedMessage(messageId: string, receptor: string) {
        const headers = new HttpHeaders().set('Authorization', this.token);
        return this.http.patch(`https://vartlaaap.herokuapp.com/conversation/message/received/${messageId}`, { receptor }, {
            headers: headers
        })
    }
}