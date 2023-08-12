/**
 * @author Leviathenn
 */

(async ()=>{
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js';
    script.class = 'cryptjs-src';
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
      function loadXHR(url) {

        return new Promise(function(resolve, reject) {
            try {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                xhr.responseType = "blob";
                xhr.onerror = function() {reject("Network error.")};
                xhr.onload = function() {
                    if (xhr.status === 200) {resolve(xhr.response)}
                    else {reject("Loading error:" + xhr.statusText)}
                };
                xhr.send();
            }
            catch(err) {reject(err.message)}
        });
    }
    
      /**
       *  @description toDataURL Documentation
       *  @author Leviathenn
       * 
       * toDataUrl("https://example.com/image.png")
       * .then(data => {
       *  console.log(data);
       * })
       */
      function b64toBlob(base64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 1024;
        var byteCharacters = atob(base64Data);
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil(bytesLength / sliceSize);
        var byteArrays = new Array(slicesCount);
    
        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            var begin = sliceIndex * sliceSize;
            var end = Math.min(begin + sliceSize, bytesLength);
    
            var bytes = new Array(end - begin);
            for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, { type: contentType });
    }
    
      // Set 1: Access information about the user
      let homePic;
      if(document.location.pathname == "/Home_PXP2.aspx"){
        const studentInfo = {
          studentName: document.querySelector('h2').querySelector('span').textContent,
          studentId: document.querySelector('.info').querySelectorAll('span')[0].textContent,
          studentSchool: document.querySelector('.info').querySelectorAll('span')[1].textContent 
        }
        homePic = document.querySelector('.student-image').querySelector('img')
        if(localStorage.getItem('csp')){
          loadXHR(localStorage.getItem('csp')).then(function (imgBlob){
            name = JSON.parse(localStorage.getItem('csp-data'))["name"]
            let imageUrl = URL.createObjectURL(imgBlob);          
            let imageUrl2 = URL.createObjectURL(imgBlob);        
          
            $('.pxp-student-summary .student h2').text(name);
            $('.student-name').text(name);
            $('img[alt="Student Photo"]').attr("src",imageUrl2)
            homePic.src = imageUrl;  
            document.querySelector('.student-image').querySelector('img').src = imageUrl2;
            document.querySelector('.student-name').textContent = name;
          })
        }else{
        
            async function zxxxx(){
              
              let cmPrompt = await prompt(`Thank you for ussing the studentVue picture changer. !!ATTENTION!! THIS FOLLOWS CCSD GUIDELINDS! DO NOT ATTEMPT TO EDIT THE PICTURE CHANGER SOURCE CODE!!! IT IS COPYRIGHTED!!! with the warning out the way, If you want to change your photo do the following format. you are also able to change your name. imageURL;Name. example: "https://example.com/image.png;Jordan Terrell Carter"`) || "https://static01.nyt.com/images/2021/01/05/arts/04billboard/04billboard-mediumSquareAt3X.jpg;Playboi Carti";
            if(prompt("When you refresh changes will be reverted. Anytime you want to change your photo, just click on the bookmarklet. type 'OK To continune") == "OK"){
                cmsPLITED = cmPrompt.split(';');
                let imgUrl = cmsPLITED[0];
                let name = cmsPLITED[1];
                localStorage.setItem('csp-data',JSON.stringify({imgPointer: 'cps', name: name}))
                loadXHR(imgUrl).then(function (imgBlob){
                  toDataURL(imgUrl).then(data=>{
                    localStorage.setItem('csp',data);
                  })
                  let imageUrl = URL.createObjectURL(imgBlob);          
                  let imageUrl2 = URL.createObjectURL(imgBlob);        
                 
                  $('.pxp-student-summary .student h2').text(name);
                  $('.student-name').text(name);
                  $('img[alt="Student Photo"]').attr("src",imageUrl2)
                  homePic.src = imageUrl;  
                  document.querySelector('.student-image').querySelector('img').src = imageUrl2;
                  document.querySelector('.student-name').textContent = name;
                })
              }else{
              alert("Process canceled");
            }
            }
            zxxxx();
            
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
     
        }

    


    };
    document.head.appendChild(script);
})();