/**
 * 自定义中间件
 */
// 自定义中间件的套路：
// function doNothyingMiddleware({dispatch, getState}) {
//   return function(next) {
//     return function(action) {
//       return next(action)
//     }
//   }
// }

let ComstumThunkMiddleWare = ({dispatch, getState}) => {
    return function(next) {
        return function(action) {
            if(typeof action === 'function') { //action为函数，则先调用
                return action(dispatch, getState);
            }
            return next(action); //next(action): 将当前处理的action传递给下一个中间件
        }
    }
}

let ComstumLogMiddleWare = ({dispatch, getState}) => {
    return function(next) {
        return function(action) {
            console.log("action type is: " + action.type);
            return next(action);
        }
    }
}

export { ComstumThunkMiddleWare, ComstumLogMiddleWare }; 