var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #99ffff background-color: none}";
        document.body.appendChild(css);
    };


// Literally A preloader

    svg = document.getElementById("scottie-loader");
        s = Snap(svg);
    var eyelid = Snap.select('.eyelid');
    var leftEar = Snap.select('.left-ear');
    var rightEar = Snap.select('.right-ear');
    blink();
    twitchRightStart();
    //twitchLeftStart();
    function blink(){
      setTimeout(function () {
        eyelid.animate({ d: "M85.89 68.876l24.72-16.19 17.96 27.423-24.72 16.188z" }, 150, mina.easeinout, endBlink);
      }, 3000);
    }
    function endBlink(){
      eyelid.animate({ d: "M85.88 68.878l24.722-16.19 1.802 2.754-24.72 16.19z" }, 150, mina.easeinout, blink);
    }

    function twitchRightStart(){
      setTimeout(function () {
        rightEar.animate({ transform: 'r15,66,93' }, 300, mina.easein,  twitchRightEnd );
      }, 2500);
    }

    function twitchRightEnd(){
      setTimeout(function () {
        rightEar.animate({ transform: 'r0,66,93' }, 100, mina.elastic,  twitchRightStart );
      }, 50);
    }
    function twitchLeftStart(){
      setTimeout(function () {
        leftEar.animate({ transform: 'r-10,71,78' }, 300, mina.easein,  twitchLeftEnd );
      }, 2100);
    }

    function twitchLeftEnd(){
      setTimeout(function () {
        leftEar.animate({ transform: 'r0,71,78' }, 200, mina.elastic,  twitchLeftStart );
      }, 50);
    }
