input.onButtonPressed(Button.A, function () {
    Tiempo = 0
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Happy)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    Tiempo = 0
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.Scissors)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
let Tiempo = 0
basic.showIcon(IconNames.Happy)
music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.pause(1000)
    Tiempo += 1
    if (Tiempo == 10) {
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    } else if (Tiempo == 20) {
        basic.showIcon(IconNames.Asleep)
        music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.UntilDone)
        while (true) {
            basic.showIcon(IconNames.Skull)
            music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
        }
    }
})
