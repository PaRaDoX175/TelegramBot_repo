import { Markup, Telegraf } from 'telegraf';
import { Command } from './command.class';
import { IBotContext } from '../context/context.interface';

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot);
    }

    handle(): void {
        this.bot.start((ctx) => {
            ctx.reply('Как ваши дела?', Markup.inlineKeyboard([
                Markup.button.callback('👍', 'good'),
                Markup.button.callback('👎', 'bad')
            ]))
        })
        this.bot.action('good', (ctx) => {
            ctx.session.casesLikes = true
            ctx.editMessageText('🎉 Круто!')
        })
        this.bot.action('bad', (ctx) => {
            ctx.session.casesLikes = false
            ctx.editMessageText('😭')
        })
    }
}