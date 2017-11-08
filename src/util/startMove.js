/**
 * 让对象obj过渡到target状态
 * @param {*} obj
 * @param {*} target
 * @param {*} endFn
 *
 * startMove(this, { contentHeight: 0 })()
 */
export default function (obj, target = {}, endFn) {
    let LASTPOINT = {}
    Object.keys(target).forEach(key => LASTPOINT[key])
    return () => {
        cancelAnimationFrame(obj.$$timer)
        var loop = () => {
            let needStop = true
            for (var attr in target) {
                var iCur = 0
                iCur = obj[attr]
                var iSpeed = (target[attr] - iCur) / 10
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed)
                if (LASTPOINT[attr] !== obj[attr]) {
                    if (Math.abs(iCur - target[attr]) > 1) {
                        needStop = false
                        LASTPOINT[attr] = iCur
                        obj[attr] = iCur + iSpeed
                    } else {
                        obj[attr] = target[attr]
                    }
                }
            }
            if (needStop) {
                cancelAnimationFrame(obj.$$timer)
                if (endFn) {
                    endFn.call(obj)
                }
            } else {
                obj.$$timer = requestAnimationFrame(loop)
            }
        }
        obj.$$timer = requestAnimationFrame(loop)
    }
}