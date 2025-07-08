

const imgBox = document.getElementById('imgBox');
const qrImage = document.getElementById('qrImage');
const qrtext = document.getElementById('qrtext');
const inputField = document.getElementById('qrtext');

function generateQR() {
    
    if (qrtext.value.length > 0) {
         qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
    imgBox.classList.add("show-img");
    } else {
         //  alert("Please enter some text to generate a QR code.");
        qrtext.classList.add('error');  
        
        setTimeout(() => {   
        qrtext.classList.add('error'); 
        }, 1000);
    }

   
}



inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        generateQR(); // Call the function to generate QR code
    }
});
