import { Candle, CandleModel } from "../models/CandleModel"

export default class CandleController {

    async save(candle: Candle): Promise<Candle> {
        const newCandle = await CandleModel.create(candle)
        return newCandle
    }

    async findLastCandles(quatity: number): Promise<Candle[]> {
        const n = quatity > 0 ? quatity : 10
        const lastCandles: Candle[] = 
            await CandleModel
                .find()
                .sort({ _id: -1 })
                .limit(n)

        return lastCandles
    }
}