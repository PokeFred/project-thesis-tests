export type Score = {
    current: number,
    max: number,
    completion: number
}

export function toScore(current: number, max: number): Score {
    const completion: number = Number((current * 100 / max).toFixed(1))

    return {
        current: current,
        max: max,
        completion: Number.isNaN(completion) ? 0 : completion
    }
}

export function isCompleted(score: Score): boolean {
    return score.current === score.max
}
