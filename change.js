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
      const toDataURL = url => fetch(url)
      .then(response => response.blob())
      .then(blob => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
      }))

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
        if(localStorage.getItem('csp')){
          
        }else{
            let cmPrompt = await prompt(`Thank you for ussing the studentVue picture changer. !!ATTENTION!! THIS FOLLOWS CCSD GUIDELINDS! DO NOT ATTEMPT TO EDIT THE PICTURE CHANGER SOURCE CODE!!! IT IS COPYRIGHTED!!! with the warning out the way, If you want to change your photo do the following format. you are also able to change your name. imageURL;Name. example: "https://example.com/image.png;Jordan Terrell Carter"`) || "https://static01.nyt.com/images/2021/01/05/arts/04billboard/04billboard-mediumSquareAt3X.jpg;Playboi Carti";
            if(prompt("When you refresh changes will be reverted. Anytime you want to change your photo, just click on the bookmarklet. type 'OK To continune") == "OK"){
                cmsPLITED = cmPrompt.split(';');
                let imgUrl = cmsPLITED[0];
                let name = cmsPLITED[1];
                
              }else{
              alert("Process canceled");
            }
        }
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
            const imgblob = b64toBlob(localStorage.getItem('csp-img'), 'image-png');
            const imageUrl = URL.createObjectURL(imgblob);
            let homePicture = document.querySelector(additionalInfo['homePict']);
            homePicture.src = imageUrl;
            
            
          }
        }
      }
        }

    


    };
    document.head.appendChild(script);
})();