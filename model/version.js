function versionInfo(){
  var _self = this;
  this.versionCode = 1;
  this.versionName = '1.02';
  this.updateInfo = '升级更新';

  this.setVersionCode = function(code){
      this.versionCode = code;
  }
  this.setVersionName = function(name){
      this.versionName = name;
  }
  this.setUpdateInfo = function(info){
      this.updateInfo = info;
  }
}
// 通过 接口方式 导出该model，
module.exports = versionInfo;
