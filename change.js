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

      const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
      
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          const slice = byteCharacters.slice(offset, offset + sliceSize);
      
          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
      
          const byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }
      
        const blob = new Blob(byteArrays, {type: contentType});
        return blob;
      }
    
      // Set 1: Access information about the user
      let homePic;
      if(document.location.pathname == "/HOME_PXP2.aspx"){
        const studentInfo = {
          studentName: document.querySelector('h2').querySelector('span').textContent,
          studentId: document.querySelector('.info').querySelectorAll('span')[0].textContent,
          studentSchool: document.querySelector('.info').querySelectorAll('span')[1].textContent 
        }
        homePic = document.querySelector('.student-image').querySelector('img')
      }else{
        homePic = {'error': 'Invalid Pathname', 'message': 'User is not on the home page.'};
        const studentInfo = {
          studentName: document.querySelector('.student-name').textContent,
          studentId: document.querySelector('.student-id').textContent,
          studentSchool: document.querySelector('.school').textContent

        }
        

    }
    //Easist way for a kill switch.\\
    let processDuping = false;
    let processes = []
    let process = {
      changeStudentPhoto = (studentInfo, additionalInfo)=>{
        let pErr;
        processes.forEach(p => {
          if(p.name == "Change Student Photo"){
            if(processDuping){
              pErr = false;
            }else{
              pErr = true;
            }
          }else{
            pErr = false;
          }
        });
        if(document.location.pathname == "/HOME_PXP2.aspx"){
          if(localStorage.getItem('csp')){
            
          }
        }
      }
        }

    


    };
    document.head.appendChild(script);
})();