 // Wait for 'polymer-ready'. Ensures the element is upgraded.
      window.addEventListener('polymer-ready', function(e) {
        var storage = document.querySelector('rise-storage');
        image1 = document.querySelector("#image1");
        image2 = document.querySelector("#image2");
        image3 = document.querySelector("#image3");
        image4 = document.querySelector("#image4");
        header1 = document.querySelector("#image1header");
        subheader1 = document.querySelector("#image1subheader");
        text1 = document.querySelector("#image1text");
        header2 = document.querySelector("#image2header");
        subheader2 = document.querySelector("#image2subheader");
        text2 = document.querySelector("#image2text");
        header3 = document.querySelector("#image3header");
        subheader3 = document.querySelector("#image3subheader");
        text3 = document.querySelector("#image3text");
        header4 = document.querySelector("#image4header");
        subheader4 = document.querySelector("#image4subheader");
        text4 = document.querySelector("#image4text");

        // Respond to events it fires.
        storage.addEventListener('rise-storage-response', function(e) {
          if (e.detail && e.detail.files && e.detail.files.length > 0) {
            image1.setAttribute("src", e.detail.files[0].url);
            image2.setAttribute("src", e.detail.files[1].url);
            image3.setAttribute("src", e.detail.files[2].url);
            image4.setAttribute("src", e.detail.files[3].url);
            header1.innerHTML= e.detail.files[0].tags[0].value;
            subheader1.innerHTML= e.detail.files[0].tags[2].value;
            text1.innerHTML= e.detail.files[0].tags[1].value;
            header2.innerHTML= e.detail.files[1].tags[2].value;
            subheader2.innerHTML= e.detail.files[1].tags[1].value;
            text2.innerHTML= e.detail.files[1].tags[0].value;
            header3.innerHTML= e.detail.files[2].tags[2].value;
            subheader3.innerHTML= e.detail.files[2].tags[1].value;
            text3.innerHTML= e.detail.files[2].tags[0].value;
            header4.innerHTML= e.detail.files[3].tags[1].value;
            subheader4.innerHTML= e.detail.files[3].tags[0].value;
            text4.innerHTML= e.detail.files[3].tags[2].value;
            
             // URL to the file.
          }
        });

        storage.go(); // Call its API methods.
      });