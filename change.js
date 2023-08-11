/**
 * @author leviathenn
 */

(async ()=>{
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js';
    script.class = 'cryptjs-src'
    script.onload = function() {

      function aesEncrypt(text, key) {
        return CryptoJS.AES.encrypt(text, key).toString();
      }

      function aesDecrypt(ciphertext, key) {
        var bytes = CryptoJS.AES.decrypt(ciphertext, key);
        return bytes.toString(CryptoJS.enc.Utf8);
      }


      function sha256Hash(text) {
        return CryptoJS.SHA256(text).toString();
      }


      function md5Hash(text) {
        return CryptoJS.MD5(text).toString();
      }

      // Set 1: Access information about the user.
      const studentInfo = {
        studentName: document.querySelector('h2'),
        studentId: document.querySelector('.info').querySelectorAll('span')[0],
        studentSchool: document.querySelector('.info').querySelectorAll('span')[1]

    }

      let homePic;
      if(document.location.pathname = "/Home_PXP2.aspx"){
        homePic = document.querySelector('.student-image').querySelector('img')
      }else{
        homePic = {'error': 'Invalid Pathname', 'message': 'User is not on the home page.'};
      }
      let


    };
    document.head.appendChild(script);
})();
