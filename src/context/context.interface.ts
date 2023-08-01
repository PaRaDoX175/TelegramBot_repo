import { Context } from 'telegraf'

export interface SessionData {
    casesLikes: boolean
}

export interface IBotContext extends Context {
    session: SessionData
}