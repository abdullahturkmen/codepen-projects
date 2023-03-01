var fileUploader = document.querySelector(".file-uploader");
var fileViewer = document.querySelector(".file-viewer");

const readFile = () => {

    if (!this.files || !this.files[0]) {
        return;
    }

    const FR = new FileReader();

    FR.addEventListener("load", function (evt) {
        fileViewer.src = evt.target.result
        fileViewer.style.display = 'block'
        fileUploader.style.display = 'none'

    });

    FR.readAsDataURL(this.files[0]);

};

fileUploader.addEventListener("change", readFile);
