function Slider() {

    this.sliderImages = [];
    this.currentImageIndex = 0;
    this.showPrevButton = null;
    this.showNextButton = null;
    this.slideImage = null;

    this.start = function (elemId) {
        let that = this;
        let elemSelector = '#' + elemId;
        let elem = document.querySelector(elemSelector);

        this.showPrevButton = elem.querySelector('#prev-button');
        this.showNextButton = elem.querySelector('#next-button');
        this.slideImage = elem.querySelector('#slide-img');

        //subscribe to events
        this.showPrevButton.addEventListener('click', function (e) {
            that.onShowPrevBtnClick(e);
        });

        this.showNextButton.addEventListener('click', function (e) {
            that.onShowNextBtnClick(e);
        });

        //creat images array
        this.sliderImages.push('./img/slider_images/1.jpg');
        this.sliderImages.push('./img/slider_images/2.jpg');
        this.sliderImages.push('./img/slider_images/3.jpg');
        this.sliderImages.push('./img/slider_images/4.jpg');
        this.sliderImages.push('./img/slider_images/5.jpg');

        this.slideImage.src = this.sliderImages[this.currentImageIndex];
        this.showPrevButton.disabled = true;
    };

    this.onShowPrevBtnClick = function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.sliderImages[this.currentImageIndex];
        this.showNextButton.disabled = false;

        //disable prev button if need
        if (this.currentImageIndex === 0) {
            this.showPrevButton.disabled = true;
        }
    };

    this.onShowNextBtnClick = function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.sliderImages[this.currentImageIndex];
        this.showPrevButton.disabled = false;

        if (this.currentImageIndex === (this.sliderImages.length - 1)) {
            this.showNextButton.disabled = true;
        }
    };
}