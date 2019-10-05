import AsyncStorage from '@react-native-community/async-storage';

export default class DataStore {
    //获取数据，优先获取本地，如果本地没有数据或者过期则获取网络数据
    fetchData(url){
        return new Promise((resolve,reject) => {
            this.fetchLocalData(url).then( wrapData =>{
                if (wrapData && DataStore.checkTimestampValid(wrapData.timestamp)){
                    resolve(wrapData);
                } else{
                    this.fetchNetData(url).then((data)=>{
                        resolve(this._wrapData(data));
                    }).catch(err =>{
                        reject(err);
                    })
                }
            }).catch( err =>{
                this.fetchNetData(url).then( data =>{
                    resolve(this._wrapData(data));
                }).catch( err =>{
                    reject(err);
                })
            })
        })
    }
    //保存数据
    saveData(url,data,callback){
        if(!data || !url) return;
            // console.log("setItem");
            // console.log(JSON.stringify(this._wrapData(data)));
            // console.log('data');
            // console.log(data);
            AsyncStorage.setItem(url,JSON.stringify(this._wrapData(data)),callback);
    };
    //给数据打一个时间戳
    _wrapData(data){
        return {
            data:data,
            timestamp:new Date().getTime()
        }
    }
    //获取本地数据
    fetchLocalData(url){
        return new Promise((resolve,reject)=>{
            AsyncStorage.getItem(url,(error,result)=>{
                if(!error){
                    try {
                        resolve(JSON.parse(result))
                    } catch (error) {
                        console.error(error);
                    }
                }else{
                    reject(error);
                    console.error(error)
                }
            })
        })
    }
    //获取网络数据
    fetchNetData(url){
        return new Promise((resolve,reject)=>{
            fetch(url).then( res => {
                if(res.ok){
                    return res.json();
                }
                throw new Error("Network response was not ok")
            }).then( resData =>{
                this.saveData(url,resData);
                resolve(resData);
            }).catch( err =>{
                reject(err)
            })
        })
    }
    /*检查timestamp是否在有效期内 
      timestamp:项目更新时间
      return {boolean} true 不需要更新 false 需要更新
    */ 
   static checkTimestampValid(timestamp){
       const currentDate = new Date();
       const targetDate = new Date();
       targetDate.setTime(timestamp);
       //如果不是同一个月   
       if (currentDate.getMonth() !==targetDate.getMonth()) return false;
       if (currentDate.getDate() !==targetDate.getDate()) return false;
       //超过四个小时就需要更新
       if (currentDate.getHours() - targetDate.getHours() > 4) return false;
       return true;
   }
}