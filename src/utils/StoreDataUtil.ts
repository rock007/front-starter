
/**
 * StoreDataUtil
 */
declare  var window:any;

class StoreDataUtil {
    
    public  saveKey(key:string,value:any){
        
        var storage = window.localStorage;
        storage.setItem(key, value) ;
    }

    public  getKey( key:string):any{
        
        var storage = window.localStorage;
        return storage.getItem(key)
    }

    public  remove(key:string){
        
        var storage = window.localStorage;

        storage.removeItem(key) 
    }

   


}

export default new StoreDataUtil();